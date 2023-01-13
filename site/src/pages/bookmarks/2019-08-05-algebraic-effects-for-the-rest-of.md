---
title: Algebraic Effects for the Rest of Us — Overreacted
links:
    - types: [bookmark-of]
      link: "https://overreacted.io/algebraic-effects-for-the-rest-of-us/"
date: 2019-08-05T10:58:43.547+00:00
---

Ok, todo mundo (nos círculos de desenvolvimento que eu frequento) já falou sobre esse post, mas vou comentar minha perspectiva mesmo assim:

Primeiro, Dan Abramov é bom nisso de escrita técnica, né?

Segundo, sobre os efeitos algébricos. Por um lado, eles (me) parecem muito promissores. Imagina o nível de _separation of concerns_{lang=en} que isso permitiria? O mesmo código de lógica de negócio no front e no back, só os _event handlers_{lang=en} que mudam 🤯. Testes também ficariam ridiculamente mais fáceis, e os efeitos algébricos poderiam dar conta da maior parte dos casos de uso de técnicas como injeção de dependência e _mock_{lang=en} de módulos.

Por outro, me parece que eles resistem a tentativas de análise estática. Não vejo como _tipar_ eles: como saber quais _handlers_{lang=en} vão lidar com um efeito em particular antes de executar o código? Como saber que código de terceiros usa os efeitos da forma como seu _handler_{lang=en} espera? Talvez um sistema parecido com como o Java tipa exceções rigorosamente, permitindo que você saiba que tipos de exceção são lançados e exigindo que você declare as mesmas exceções se não tratá-las? Mesmo assim, acho que isso poderia ficar confuso, rápido.

Enfim, empolgado com a ideia.
