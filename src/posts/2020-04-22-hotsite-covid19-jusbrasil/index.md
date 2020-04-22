---
title: "Fazendo o hotsite da Jusbrasil sobre Covid19"
# description: "Premissas, desafios..."
customTags: ["Jusbrasil"]
date: 2020-02-22T12:45:55.920-03:00
draft: true
---

No longíquo dia 12 de março, [a Jusbrasil fechou seus escritórios](https://rafaelcosta.jusbrasil.com.br/artigos/820643550/fechamos-os-escritorios-do-jusbrasil-hoje-e-recomendamos-que-faca-o-mesmo) devido à disseminação do COVID19, 6 dias antes da prefeitura de Salvador [decretar situação de emergência](https://noticias.uol.com.br/cotidiano/ultimas-noticias/2020/03/18/salvador-decreta-situacao-de-emergencia-e-fecha-shoppings-por-coronavirus.htm). A crise, hoje tão clara e presente que é impossível de ignorar, era então uma ameaça assustadora, mas distante.

Como de praxe com tudo o que cresce exponencialmente, essa percepção mudou rápido e, duas semanas depois, todos nós já estávamos imersos em gráficos em escala logarítima, falando em achatar a curva, insistindo para que nossa família, amigos e vizinhos se cuidassem e temorosos pelo emprego de muitos. Afinal, as empresas podiam ou não suspender o contrato de trabalho? E reduzir salários? Quais são os impactos das férias coletivas? Esse tal auxílio emergencial, sai mesmo? Quem tem direito?

No meio de todas essas incertezas, ficou clara a necessidade de centralizar informação curada e confiável [tirando as principais dúvidas da população sobre a pandemia](https://covid19.jusbrasil.com.br/especialistas-respondem). Não só isso, mas também [como tribunais pelo Brasil estão operando, se estão](https://covid19.jusbrasil.com.br/tribunais); como [tribunais influentes estão decidindo](https://covid19.jusbrasil.com.br/#jurisprudencias); os principais [materiais, fontes de referência e apps oficiais](https://covid19.jusbrasil.com.br/#conteudo-extra); e, claro, [bate-papos com referências em direito e empreendedorismo](https://covid19.jusbrasil.com.br/jusflix) sobre como lidar com a crise.

E assim nasceu o projeto do [hotsite do COVID19 do Jusbrasil](https://covid19.jusbrasil.com.br/): nosso portal oficial de informação jurídica relacionada ao coronavírus, tema desse post.

## Requisitos

Depois de colocar no ar um _<abbr title="Minimum Viable Product">MVP</abbr>_{lang=en} que contemplava o funcionamento de tribunais ([arquivado aqui](http://archive.today/2020.04.21-155640/https://tribunais-corona.webflow.io/)), nos debruçamos sobre o escopo do projeto e seus requisitos, técnicos ou não.

O hotsite devia:

-   Disponibilizar:
    -   Um FAQ curado
    -   Informações atualizadas sobre o funcionamento dos principais tribunais do país
    -   Nossas lives sobre o tema
    -   Demais materiais relacionados ao tema
-   Ser fácil de alimentar
-   Ter bom _<abbr title="Search Engine Optimization">SEO</abbr>_{lang=en}
-   Estar pronto o quanto antes

Com isso em mãos e o projeto aprovado, era hora de pôr a mão na massa.

## A _stack_{lang=en} do projeto

Finalmente chegamos à parte técnica!

### Next.js

Optamos por construir o site usando o [Next.js](https://nextjs.org/), o que nos permitiu ter um site feito com [React](https://reactjs.org/) pronto para _<abbr title="Server-Side Rendering">SSR</abbr>_{lang=en} com o mínimo de configuração, nos poupando tempo de desenvolvimento por nos permitir começar mais rápido a efetivamente codar e usando uma stack familiar aos desenvolvedores da empresa. Nossa experiência com o _ramework_{lang=en} foi, em geral, ótima, bastando rodar `npx create-next-app covid19 --example with-relay-modern` para ter um boilerplate funcional se conectando à nossa API; bastaram minutos para estarmos com um projeto funcional onde podíamos colaborar.

Os únicos contras que eu citaria são:

<dl>

<dt>

O _Next.js_{lang=en} te obriga a usar _[CSS Modules](https://github.com/css-modules/css-modules)_{lang=en}, uma tecnologia não utilizada no Jusbrasil

</dt>

<dd>

A motivação para tal é evitar bugs onde a ordem de inclusão de arquivos CSS muda o resultado final: digamos que um projeto tem 2 páginas (A e B) e 3 arquivos CSS (`global.css`, `A.css` e `B.css`), e que o usuário 1 acessa primeiro a página A e depois a B (`A.css` é inserido antes de `B.css`) e que o usuário 2 importante deixar a acessa primeiro a B e depois a A (`A.css` é inserido depois de `B.css`). Nesse cenário, regras CSS com seletores de mesma especificidade aplicados por A e B nos mesmos elementos poderiam ter resultados visualmente diferentes para os dois usuários. Por esse ser um problema comum com _<abbr title="Single Page Application">SPA</abbr>s_ em geral e com o _Next.js_{lang=en} em particular, na versão 9 o _framework_{lang=en} adotou a restrição.

Essa mudança teve impacto no tempo necessário para um desenvolvedor ser produtivo no projeto. _CSS Modules_{lang=en} são fáceis o suficiente de usar, então isso não foi um problema tão grande, mas gostaríamos que tivesse sido possível desabilitar a restrição através de configuração, permitindo que empresas mantenham suas _stacks_{lang=en} e convenções ao adotar o _framework_{lang=en}.

</dd>

</dl>

<dt>

Links no _Next.js_{lang=en} são... confusos

</dt>

<dd>

Antes de adotar o _framework_{lang=en}, eu consultei alguns amigos que já o tinham usado para saber como tinha sido a experiência e se eles recomendavam. A maioria dos feedbacks foi positiva, mas um em particular foi uma expressão inquestionável de um trauma: <q>_Next.js_{lang=en} é o pior _framework_{lang=en} que existe!!!</q>. A origem do trauma? Links que não funcionavam.

Para navegar internamente em um site feito com _Next.js_{lang=en}, não se pode simplesmente usar a âncora do HTML (`<a>`), pelo menos não sem abrir mão da experiência de um _<abbr title="Single Page Application">SPA</abbr>_. Deve-se usar o componente `Link` fornecido pelo _framework_{lang=en}. Não bastando isso, não se pode apenas incluir a URL da página de destino diretamente se esta for uma rota dinâmica. Imagine, por exemplo, que você tem uma rota `/produtos/[id]`, a que se deseja linkar. Seu impulso inicial serial usar `<a href="/produtos/ventilador">Ventilador</a>`, mas você precisa usar o componente `Link` (`<Link href="/produtos/ventilador"><a>Ventilador</a></Link>`) e adequar seu uso à rota dinâmica (`<Link href="/produtos/[id]" as="/produtos/ventilador"><a>Ventilador</a></Link>`).

O código é maior e menos legível, usos incorretos de `Link` passavam pelo _code review_{lang=en} e concorrentes como o [Sapper](https://sapper.svelte.dev/) resolvem esse problema [com âncoras comuns](https://sapper.svelte.dev/docs#Comparison_with_Next_js).

</dd>

### Strapi

Como o conteúdo do site precisaria ser modificado com frequência e alimentado por diferentes times, percebemos de cara que precisaríamos de um _<abbr title="Content Management System">CMS</abbr>_{lang=en} _headless_{lang=en}. [Existem diversas opções](https://serverless.css-tricks.com/services/cmss), de <abbr title="Software as a Service">SaaS</abbr> como o [Contentful](https://www.contentful.com/) a opções open source e _self-hosted_{lang=en}. Optamos pelo [Strapi](https://strapi.io/) pela flexibilidade do _<abbr title="Content Management System">CMS</abbr>_{lang=en} e por ser possível hosteá-lo na nossa infraestrutura, evitando gastos desnecessários.

A experiência foi positiva: os tipos de campo disponíveis atenderam a maior parte das nossas necessidades, a interface é intuitiva e ele aguentou nossa carga com uma performance satisfatória. Como sempre, encontramos alguns problemas:

<dl>

<dt>Não existem campos do tipo URL</dt>

<dd>
<figure>

Nós ficaríamos um pouco mais seguros sabendo que o Strapi está validando por nós que não temos campos de URL sendo preenchidos incorretamente.

![](./assets/strapi-fields.png)

<figcaption>Os tipos de campo do Strapi</figcaption>
</figure>

</dd>

<dt>Usar o Strapi no Kubernetes poderia ser mais fácil</dt>

<dd>

<mark>Ravi, me ajuda</mark>

-   Compartilhar o volume entre várias instâncias do serviço
-   Mudar configurações é difícil
-   Instalar plugins é difícil

</dd>

</dl>

<hr/>

Esse artigo foi postado originalmente [no blog de Victor Magalhães]({{page.url}}).
