---
title: "Fazendo o hotsite da Jusbrasil sobre Covid19"
# description: "Premissas, desafios..."
customTags: ["Jusbrasil"]
date: 2020-05-14T12:45:55.920-03:00
draft: true
---

No longíquo dia 12 de março, [a Jusbrasil fechou seus escritórios](https://rafaelcosta.jusbrasil.com.br/artigos/820643550/fechamos-os-escritorios-do-jusbrasil-hoje-e-recomendamos-que-faca-o-mesmo) devido à disseminação do COVID19, 6 dias antes da prefeitura de Salvador [decretar situação de emergência](https://noticias.uol.com.br/cotidiano/ultimas-noticias/2020/03/18/salvador-decreta-situacao-de-emergencia-e-fecha-shoppings-por-coronavirus.htm). A crise, hoje tão clara e presente que é impossível de ignorar, era então uma ameaça assustadora, mas distante.

Como de praxe com tudo o que cresce exponencialmente, essa percepção mudou rápido e, duas semanas depois, todos nós já estávamos imersos em gráficos em escala logarítima, falando em achatar a curva, insistindo para que nossa família, amigos e vizinhos se cuidassem e temorosos pelo emprego de muitos. Afinal, as empresas podiam ou não suspender o contrato de trabalho? E reduzir salários? Quais são os impactos das férias coletivas? Esse tal auxílio emergencial, sai mesmo? Quem tem direito?

No meio de todas essas incertezas, ficou clara a necessidade de centralizar informação curada e confiável [tirando as principais dúvidas da população sobre a pandemia](https://covid19.jusbrasil.com.br/especialistas-respondem). Não só isso, mas também [como tribunais pelo Brasil estão operando, se estão](https://covid19.jusbrasil.com.br/tribunais); como [tribunais influentes estão decidindo](https://covid19.jusbrasil.com.br/#jurisprudencias); os principais [materiais, fontes de referência e apps oficiais](https://covid19.jusbrasil.com.br/#conteudo-extra); e, claro, [bate-papos com referências em direito e empreendedorismo](https://covid19.jusbrasil.com.br/jusflix) sobre como lidar com a crise.

E assim nasceu o projeto do [hotsite do COVID19 do Jusbrasil](https://covid19.jusbrasil.com.br/): nosso portal oficial de informação jurídica relacionada ao coronavírus, tema desse post.

## Requisitos

Depois de colocar no ar um _<abbr title="Minimum Viable Product">MVP</abbr>_{lang=en} que contemplava o funcionamento de tribunais ([arquivado aqui](http://archive.today/2020.04.21-155640/https://tribunais-corona.webflow.io/)) feito com a ferramenta no-code [webflow](https://webflow.com/), nos debruçamos sobre o escopo do projeto e seus requisitos, técnicos ou não.

O hotsite devia:

-   Disponibilizar:
    -   Um _<abbr title="Frequently asked questions">FAQ</abbr>_{lang=en} curado
    -   Informações atualizadas sobre o funcionamento dos principais tribunais do país
    -   Nossas lives sobre o tema
    -   Demais materiais relacionados
-   Ser fácil de alimentar sem a ajuda de um desenvolvedor
-   Ter bom _<abbr title="Search Engine Optimization">SEO</abbr>_{lang=en}
-   Estar pronto o quanto antes

Com isso em mãos e o projeto aprovado, era hora de pôr a mão na massa.

## A _stack_{lang=en} do projeto

Finalmente chegamos à parte técnica! O site foi feito em [Typescript](http://typescriptlang.org/) usando o _framework_ [Next.js](https://nextjs.org/), baseado em [React](https://reactjs.org/), e alimentado pelo _<abbr title="Content Management System">CMS</abbr>_{lang=en} [Strapi](https://strapi.io/). Pelo prazo apertado e pelo site ser mais uma teia de documentos do que uma aplicação, optamos por não implementar testes automatizados. A seguir, explico um pouco do processo de decisão por trás de nossas escolhas.

### Next.js

Optamos por construir o site usando o [Next.js](https://nextjs.org/), o que nos permitiu ter um site feito com [React](https://reactjs.org/) pronto para _<abbr title="Server-Side Rendering">SSR</abbr>_{lang=en} com o mínimo de configuração, nos poupando tempo de desenvolvimento por nos permitir começar mais rápido a efetivamente codar e usando uma stack familiar aos desenvolvedores da empresa. Nossa experiência com o _framework_{lang=en} foi, em geral, ótima, bastando rodar `npx create-next-app covid19 --example with-relay-modern` para ter um boilerplate funcional se conectando à nossa API; bastaram minutos para estarmos com um projeto funcional onde podíamos colaborar.

> **Explicando as _buzzwords_{lang=en}:**
>
> -   React: uma biblioteca de renderização para a Web baseada em Javascript feita para rodar no navegador (_client-side_{lang=en}), diferente de Ruby on Rails e Laravel, que geram o HTML no servidor
> -   _Server-Side Rendering_{lang=en} (SSR): conceito nascido junto com os frameworks e bibliotecas _client-side_{lang=en}, como React, Angular, Vue, Backbone, Svelte, etc. É a ideia de gerar o HTML no servidor, mesmo ao usar bibliotecas _client-site_{lang=en}
> -   Next.js: um _framework_ web opinionado baseado no React que torna fácil implementar _<abbr title="Server-Side Rendering">SSR</abbr>_{lang=en} e já deixa seu web app pronto para boas práticas (precarrega links quando se passa o mouse por cima, facilita de implementar _service workers_, etc)

Os únicos contras que eu citaria são:

<dl>

<dt>

O _Next.js_{lang=en} te obriga a usar _[CSS Modules](https://github.com/css-modules/css-modules)_{lang=en}, uma tecnologia não utilizada no Jusbrasil

</dt>

<dd>

A motivação para tal é evitar bugs onde a ordem de inclusão de arquivos CSS muda o resultado final: digamos que um projeto tem 2 páginas (_home_ e _sobre_) e 3 arquivos CSS (`global.css`, `home.css` e `sobre.css`), e que o usuário 1 acessa primeiro a _home_ e depois a _sobre_ (`home.css` é inserido antes de `sobre.css`) e que o usuário 2 acessa primeiro a _sobre_ e depois a _home_ (`home.css` é inserido depois de `sobre.css`). Nesse cenário, regras CSS com seletores de mesma especificidade aplicados por `home.css` e `sobre.css` nos mesmos elementos poderiam ter resultados visualmente diferentes para os dois usuários. Por esse ser um problema comum com _<abbr title="Single Page Application">SPA</abbr>s_ em geral e com o _Next.js_{lang=en} em particular, o _framework_{lang=en} adotou a restrição na versão 9.

Essa mudança teve impacto no tempo necessário para um desenvolvedor ser produtivo no projeto. _CSS Modules_{lang=en} são fáceis o suficiente de usar, então isso não foi um problema tão grande, mas gostaríamos que tivesse sido possível desabilitar a restrição através de configuração, permitindo que empresas mantenham suas _stacks_{lang=en} e convenções ao adotar o _framework_{lang=en}.

</dd>

</dl>

<dt>

Links no _Next.js_{lang=en} são... confusos

</dt>

<dd>

Antes de adotar o _framework_{lang=en}, eu consultei alguns amigos que já o tinham usado para saber como tinha sido a experiência e se eles recomendavam. A maioria dos feedbacks foi positiva, mas um em particular foi uma expressão inquestionável de um trauma: <q>_Next.js_{lang=en} é o pior _framework_{lang=en} que existe!!!</q>. A origem do trauma? Links que não funcionavam.

Para navegar internamente em um site feito com _Next.js_{lang=en}, não se pode simplesmente usar a âncora do HTML (`<a>`), pelo menos não sem abrir mão da experiência de um _<abbr title="Single Page Application">SPA</abbr>_. Deve-se usar o componente `Link` fornecido pelo _framework_{lang=en}. Não bastando isso, não se pode apenas incluir a URL da página de destino diretamente se esta for uma rota dinâmica.

Imagine, por exemplo, que você tem uma rota `/produtos/[id]` (o que equivale a um arquivo `pages/produtos/[id].js`), a que se deseja linkar. Talvez nosso impulso inicial fosse usar `<a href="/produtos/ventilador">Ventilador</a>`, mas precisaríamos usar o componente `Link` (`<Link href="/produtos/ventilador"><a>Ventilador</a></Link>`) e adequar seu uso à rota dinâmica (`<Link href="/produtos/[id]" as="/produtos/ventilador"><a>Ventilador</a></Link>`).

O código é maior e menos legível, usos incorretos de `Link` passavam pelo _code review_{lang=en} e concorrentes como o [Sapper](https://sapper.svelte.dev/) resolvem esse problema [com âncoras comuns](https://sapper.svelte.dev/docs#Comparison_with_Next_js) (e contam vantagem por isso).

</dd>

### Strapi

Como o conteúdo do site precisaria ser modificado com frequência e alimentado por diferentes times, percebemos de cara que precisaríamos de um _<abbr title="Content Management System">CMS</abbr>_{lang=en} _headless_{lang=en} (e você acabou de marcar duas palavras no bingo das _buzzwords_{lang=en}). _<abbr title="Content Management System">CMS</abbr>_{lang=en} ou _Content Management System_{lang=en} é um sistema que te permite criar, deletar e modificar conteúdo, como o [Wordpress](https://br.wordpress.com/) e o [Drupal](https://www.drupal.org/). Tradicionalmente, um CMS é associado a um site em particular e é o responsável por gerá-lo, como é o caso dos dois citados. Quando esse não é o caso e cabe à página pegar o conteúdo através de uma _<abbr title="Abstract Programming Interface">API</abbr>_{lang=en}, dizemos que esse _<abbr title="Content Management System">CMS</abbr>_{lang=en} é _headless_{lang=en}.

[Existem diversas opções](https://serverless.css-tricks.com/services/cmss), desde <abbr title="Software as a Service">SaaS</abbr> como o [Contentful](https://www.contentful.com/) até opções open source e _self-hosted_{lang=en}. Optamos pelo [Strapi](https://strapi.io/) pela flexibilidade do _<abbr title="Content Management System">CMS</abbr>_{lang=en} e por ser possível hosteá-lo na nossa infraestrutura, evitando gastos desnecessários.

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

<dt>Devíamos ter criado uma instância do Strapi de dentro do projeto</dt>

<dd>

Nós escolhemos usar uma imagem docker do CMS pra acelerar o deploy do serviço no nosso _cluster_{lang=en} [Kubernetes](https://kubernetes.io/). Ledo engano. Por causa dessa escolha, dado o tempo limitado pra execução, tivemos dificuldades em mudar configurações (ex: tamanho máximo de upload), em instalar plugins (ex: um otimizador de imagens) e tivemos problemas ao gerenciar a instância dentro de nossa infraestrutura, perdendo os metadados (os dados continuavam no banco de dados, mas o Strapi não sabia que as coleções existiam).

O último ponto é interessante o suficiente pra merecer uma explicação: como o banco de dados fica em um [_persistent volume_](https://kubernetes.io/docs/concepts/storage/persistent-volumes/){lang=en}, ele persistia; mas os metadados parecem ser armazenados junto com a aplicação, e fazer deploy de uma instância mudando suas configurações nos fez perder os metadados e precisar recriar as coleções, uma a uma, para ter acesso aos dados que estavam persistidos no banco de dados.

</dd>

</dl>

### Typescript

Assim como a mão de Midas transforma tudo o que toca em ouro, eu gostaria de deixar todo projeto que eu toco estaticamente tipado. Então, como eu coordenei esse projeto, ele é feito em Typescript. 🤷 Essa é uma decisão um tanto controversa na comunidade Javascript:

Por um lado, como Javascript não é estaticamente tipado, Typescript pode ser uma complicação a mais com benefícios limitados. Eu discordo porque mesmo sem checagem em tempo de execução, tipos são uma ferramenta de comunicação. Perguntas como "que campos essa API retorna?" e "que propriedades esse componente espera?", que envolveriam procurar a resposta no código fonte ou em outros trechos do código que usem a API ou o componente, podem ser facilmente respondidas pelo seu editor com Typescript, sem mudança de contexto. Sem tipo algum, mudanças de contrato (ex: acrescentar ou renomear uma propriedade num componente React) ficam implícitas no código: elas só podem ser vistas quando o código consome o componente e faz uso da nova propriedade. Com tipos, o contrato é declarado em código.

Outra vantagem é que se pode comunicar uma restrição para o desenvolvedor e para o compilador, dificultando que bugs cheguem em produção. Por exemplo: imagine que, num site de rastreamento de encomendas, a API retorne um status (`WAITING`{lang=en}, `SENT`{lang=en}, `DELIVERED`{lang=en}) e um objeto mapeie cada valor para um texto a ser exibido na UI ("esperando ser enviado", etc); agora, imagine que um novo status é adicionado (`WAITING_TAKEOUT`{lang=en}). Com tipos, o compilador pode avisar em tempo de desenvolvimento que o objeto precisa mapear o novo valor de status!

Por outro lado, entusiastas de sistemas fortes de tipo consideram o Typescript permissivo demais. Eu posso concordar, mas isso é uma _feature_{lang=en}, não um _bug_{lang=en}. Javascript é permissivo, então uma linguagem que se propõe a adicionar um sistema de tipos estáticos em cima de Javascript também precisa ser.

Dito isso, o Typescript certamente pode ser uma complicação, especialmente quando se trata de dados vindos de uma API. Diferentes métodos retornam diferentes propriedades de um mesmo objeto, e alguns componentes aceitam todas as variantes, outros só algumas. Para resolver isso, acabei criando um sistema de tipos excessivamente complexo para os dados vindos da API do Strapi.

Como o tipo dependia da profundidade de um tipo no retorno da API (ex: se eu pego posts, que tem autores, o post tem autores, mas cada autor tem sua lista de posts como ids), a complexidade aumentou, e de repente alguns componentes aceitavam o tipo raiz, outros o tipo aninhado. Depois, adicionamos parsing (ex: data vem como string, o parser transforma em `Date`{lang=en}) e adicionamos mais dois tipos no bolo. Adicionar um tipo novo era confuso e complexo.

Me fez ter saudade do GraphQL.

De todo modo, tipos ajudaram a reduzir o trabalho necessário pra revisar o código de 12 pessoas trabalhando simultaneamente num projeto sem testes.

## Resultado

Duas semanas e 260 commits depois, finalmente lançamos o site no dia 9 de abril! Desde então, mais de 3 mil pessoas se informam toda semana sobre seus direitos e sobre o prazo de seus processos e tem acesso a conteúdos relevantes para nosso contexto de pandemia. E assim [o Jusbrasil segue fechando o _justice gap_{lang=en}](https://sobre.jusbrasil.com.br/para-que-existimos)! 🤘
