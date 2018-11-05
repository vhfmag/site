---
title: "Como fazer uma extensão para browser"
description: "Usando a WebExtensions API para fazer extensões que funcionam em múltiplos browsers"
tags: ['Técnico']
date: 2018-02-20
draft: true
---

## O que são extensões de browser

Você já usou extensões de browser? Algumas das minhas preferidas são o [Nano Adblocker](https://addons.mozilla.org/en-US/firefox/addon/real-nano-adblocker/) (bloqueador de propaganda acompanhado de _anti-anti-adblocker_, o [Nano Defender](https://github.com/NanoAdblocker/NanoDefender/)); o [LastPass](https://lastpass.com), para gerenciamento de senhas; o [Pushbullet](https://www.pushbullet.com), para passar links e arquivos entre celular e notebook; e algumas das minhas ferramentas de desenvolvimento para [inspecionar](https://github.com/facebook/react-devtools) e [verificar performance de React](https://addons.mozilla.org/en-US/firefox/addon/nitin-tulswani/?src=api) ou [verificar compatibilidade do meu código com diferentes browsers](https://github.com/eduardoboucas/compat-report), por exemplo.

Elas estão presentes em todos os principais _browsers_: [Chrome](https://chrome.google.com/webstore/), [Firefox](https://addons.mozilla.org/), [Safari](https://safari-extensions.apple.com/), [Opera](https://addons.opera.com/en/extensions/) e [Edge](https://www.microsoft.com/pt-br/store/collections/edgeextensions/pc) tem, cada, sua própria central de distribuição de extensões. Além disso, cada uma tinha sua própria API para dar à extensão acesso a inúmeras _features_: interceptação de requisições, adição de opções em menus de contexto, adição de botões na barra de tarefas, exibição de notificações, leitura da página (para salvar o conteúdo para ler depois, por exemplo).

Para projetos como o LastPass e o uBlock, que precisam manter atualizadas as suas extensões para diferentes browsers, a manutenção pode tomar muito tempo, e a extensão do browser mais popular pode acabar por ser mais atualizada.

Porém, a W3C[^w3c], por meio do grupo de interesse Browser Extension Community Group[^w3c-browsing], criou um _padrão web_ para resolver o problema: a [WebExtensions](https://developer.mozilla.org/en-US/docs/Glossary/WebExtensions) (a Apple, que não faz parte do grupo de interesse, não aderiu ao padrão até o momeento). Trata-se de um conjunto de APIs e especificações que permitem criar extensões para browsers usando as tecnologias nativas da Web: Javascript, HTML e CSS.

Vamos botar a mão na massa e aprender na prática como ela funciona?

## O que vamos implementar

Para testar o padrão, vamos criar uma extensão que permita inspecionar os metadados de uma página. Para isso, usaremos duas bibliotecas:

- A biblioteca [microformat-shiv](npm.im/microformat-shiv), que é capaz de:
    - Identificar relações entre documentos que contenham `<link rel="relação" href="link-para-documento">`
    - Metadados em formato [microformats2](http://microformats.org/)
- A biblioteca [web-auto-extractor](npm.im/web-auto-extractor), que detecta:
    - Metadados em tags `<meta>` para padrões como o Open Graph e o Twitter Cards
    - Metadados RDF (_Rich Data Format_), como o JSON-LD[^json-ld], o RDFa[^rdfa] e o Microdata[^microdata]

Donos de sites publicam esses metadados por diferentes razões: melhorias de SEO, extração de dados ricos de documentos HTML e a defesa da [IndieWeb](http://indieweb.org/) são alguns dos principais. Esses padrões costumam ser complexos, cheios de vocabulários e especificações. Uma das principais entidades que emitem especificações de RDF é o [schema.org](schema.org), que já definiu quase 600 tipos diferentes de entidades[^schema-org-types] (pessoas, organizações, endereços, eventos, artigos, produtos, etc).

A quantidade de opções pode ser prejudicial, [como muito desenvolvedor javascript em 2018 sabe](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4), e, por isso, podemos usar de heurísticas para decidir. Por que, então, não ver o que é mais usado na Web?

Esse é o objetivo inicial da nossa extensão: exibir os metadados dos sites que visitamos.

## Criando uma extensão de browser com _WebExtensions_

Para reduzir o _boilerplate_, vamos usar um gerador do [yeoman](npm.im/yo), o [generator-web-extension](npm.im/generator-web-extension). Vamos começar instalando ambos os pacotes globalmente:

```
npm i -g yo generator-web-extension
```

Agora basta ir no diretório onde você pretende criar o projeto e rodar

```
yo web-extension
```

Você vai precisar responder algumas perguntas simples, como o nome, o _slug_ e a descrição da extensão. Depois, perguntas mais específicas:

- `Would you like to use UI Action?` dá três opções: browser (cria um ícone na barra de tarefas do navegador), page (cria um ícone na caixa de endereço) ou none (não cria ícone algum). Escolheremos browser pra ter acesso à feature de _badge_ no ícone.
- `Would you like to override a chrome page?` pergunta se queremos sobrescrever alguma página padrão do browser, como a nova aba. Não é o nosso caso.
- `Would you like more UI Features?` pergunta que features adicionais nós queremos. Para ter acesso à página e ler os metadados, precisaremos de um _content script_ que, como será explicado abaixo, um arquivo javascript que é executado no ambiente da página, podendo fazer leituras e mudanças na DOM.
- `Would you like to use permissions?` A única permissão de que vamos precisar é a ActiveTab, direito de acesso ao conteúdo da aba atual.

<figure src="/images/posts/webextensions/browseraction.png" title="Barra do Firefox mostrando browser actions à direita e page actions, como o ícone do Pocket, mais ao centro"></figure>

Depois de responder a todas as perguntas, as dependências serão instaladas e o seu projeto estará pronto. Para testar, execute `npm run dev seu-browser-favorito` - os browsers disponíveis são o Edge, o Firefox, o Chrome e o Opera. Se o browser escolhido for o Firefox, ele será automaticamente aberto e a extensão, instalada. Para os demais browsers, pesquise como instalar extensões localmente.

### O manifesto

Em `./app/manifest.json`,

[^w3c]: https://www.w3.org/
[^w3c-browsing]: https://www.w3.org/community/browserext
[^json-ld]: https://json-ld.org/
[^rdfa]: http://rdfa.info/
[^microdata]: https://schema.org/docs/gs.html
[^schema-org-types]: https://schema.org/docs/schemas.html