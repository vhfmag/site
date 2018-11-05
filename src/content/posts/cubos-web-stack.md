---
title: A stack front-end da Cubos
description: Que linguagens e bibliotecas a Cubos usa em seus web apps?
tags: ['Técnico']
date:  2017-10-13
---

Começar em JavaScript em 2017 não é fácil. As infinitas possibilidades podem sobrecarregar e parar a gente antes da primeira linha de código.

Enquanto para começar a desenvolver um aplicativo nativo para iOS há decisões simples, como entre Objective-C ou Swift, em JavaScript há mais de 5 opções de sintaxe (ES5, ES5+, Typescript, Elm, ClojureScript, CoffeeScript, PureScript, ReasonML…), incontáveis frameworks/bibliotecas para a interface de usuário e ferramentas de build — tudo isso antes de escrever a primeira linha de código. Como não há tempo hábil para testar cada uma das combinações possíveis de escolha, resta pesquisar e ver o que está sendo utilizado no mercado.

Por isso, a Cubos decidiu falar um pouco mais sobre a nossa stack front-end, passando principalmente pelas três categorias acima citadas: _flavor_, biblioteca de UI e ferramentas de build.

## Typescript 

### JavaScript com tipos

Nós usamos [TypeScript](http://www.typescriptlang.org/), um superset tipado de JavaScript. Ou seja: uma linguagem baseada em JavaScript (todo código JavaScript é, sintaticamente, um código TypeScript válido - daí o _superset_) que compila para JavaScript depois de checar a consistência e validade dos tipos na aplicação.

A razão principal para o usarmos é melhorar a sustentabilidade de nossas aplicações. Com checagem de tipo em tempo de compilação, os desenvolvedores podem mudar tranquilamente o tipo retornado pela API ou refatorar um componente React para receber novas propriedades e fazer todos os ajustes necessários com base nos erros exibidos durante a compilação ou no seu editor de código preferido.

Falando em editores de códigos, há funcionalidades deles ausentes em JavaScript, mas facilmente executadas com TypeScript: editores corretamente configurados autocompletam código com base nos tipos e fazem refatorações avançadas com facilidade, como mover arquivos e renomear propriedades, funções e variáveis.

Por fim, a comunidade TypeScript é grande e ativa e projetos como o [DefinitelyTyped](http://definitelytyped.org/) fazem um excelente trabalhando disponibilizando tipos para grande parte das bibliotecas utilizadas pela comunidade JavaScript, então não há muito trabalho para procurar ou definir tipos para as bibliotecas mais utilizadas. Por isso, recomendamos o uso de algum flavor tipado de JavaScript para qualquer projeto de tamanho não trivial que vão fazer, seja ele Typescript, Flow ou qualquer outro de sua preferência.

## React

Como citado na seção anterior, nós usamos [React](https://reactjs.org/), uma biblioteca open source para criação de interfaces de usuário disponibilizada pelo Facebook e onipresente na web, utilizada por empresas como Airbnb, Netflix, Yahoo e Mozilla — todas organizações que contribuem ativamente para o ecossistema. Segundo o clássico [State of JS](http://stateofjs.com/2016/frontend/), praticamente ninguém da comunidade front-end nunca ouviu falar da biblioteca, 58% dela já usou e 92% dos que já usaram ficaram satisfeitos.

Nós utilizamos React por esta ser uma biblioteca poderosa e extremamente flexível, que dá ao desenvolvedor o poder de escolha com relação a praticamente todos os detalhes do desenvolvimento — da gestão de estado à plataforma da interface (não limitada à web: a biblioteca pode ser usada para criar aplicativos nativos e realidade virtual, por exemplo). A isso se adiciona a maturidade de seu ecossistema, rico em [componentes](https://github.com/brillout/awesome-react-components) e com mais de 60 mil perguntas no [StackOverflow](https://stackoverflow.com/questions/tagged/reactjs).

Ela estimula também boas práticas de programação por usar uma arquitetura baseada em componentes — idealmente reutilizáveis e autoexplicativos. E com sua última versão, o [React 16](https://reactjs.org/blog/2017/09/26/react-v16.0.html), sua performance — que já era superior ou comparável à dos concorrentes [[1]](https://auth0.com/blog/more-benchmarks-virtual-dom-vs-angular-12-vs-mithril-js-vs-the-rest/)— está ainda melhor.

## Build

### Webpack + Babel

O nosso bundler é o [Webpack](https://webpack.github.io/), um bundler poderoso que trata todo e qualquer arquivo como um módulo — seja ele JavaScript, TypeScript, CSS, imagens, fontes ou até [linguagens que compilem para WebAssembly](https://medium.com/webpack/webpack-awarded-125-000-from-moss-program-f63eeaaf4e15). Seus [loaders](https://webpack.js.org/concepts/loaders/) nos permitem executar todos os processos da nossa build: transpilamos TypeScript, transpilamos ES5+, compactamos imagens, habilitamos ServiceWorkers para que nossas aplicações tenham controle sobre seu cache e funcionem offline, forçamos boas práticas e consistência de estilo de código com o TSLint e muito mais. Além disso, técnicas avançadas como o Tree Shaking permitem que o tamanho final de nossas aplicações sejam significativamente reduzidas.

O responsável pela transpilação de código ES5+ para versões que todo navegador possa utilizar é o [Babel](https://babeljs.io/), o que não deve ser surpresa. Mas, para além do ES5, os plugins da biblioteca permitem o uso de JSX e otimizações avançadas de performance. Seu ecossistema é riquíssimo e sua build, infinitamente configurável.

Eis a nossa stack! Vale ressaltar que essa lista não pretende ser prescritiva: essas não são necessariamente as melhores ou únicas opções disponíveis, mas hoje se aplicam bem ao nosso trabalho.
