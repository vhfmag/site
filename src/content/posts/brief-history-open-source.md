---
title: "Open source, para além do código"
description: "wip"
date: 2018-05-31
draft: true
---

A forma como desenvolvedores colaboram para além das fronteiras de suas empresas mudou fundamentalmente nos últimos anos. Em 2001, Steve Ballmer, CEO da _Microsoft_ - então no auge de sua fase [adotar, extender e extinguir][embrace-extend-extinguish], dizia que "_Linux is a cancer that attaches itself in an intellectual property sense to everything it touches_" [^linux-is-a-cancer]; já em 2016 a mesma empresa foi líder em número de contribuidores em repositórios open-source na plataforma de compartilhamento e hospedagem de código [Github](https://github.com)[^microsoft-github-leader] e até incluiu um subsistema Linux no seu sistema operacional, o onipresente _Windows_[^enabling-linux-on-windows].

<citation
    quote="Linux is a cancer that attaches itself in an intellectual property sense to everything it touches"
    author="Steve Ballmer"
    from="CEO da Microsoft"
/>

A _Microsoft_ não está sozinha: o _Facebook_ disponibilizou sua biblioteca de UI para a web, o _React_; e a _Google_, o _Tensorflow_, biblioteca utilizada para processar de forma eficiente grandes quantidades de dados usando GPU. Esses são apenas alguns exemplos da infinidade de empresas e organizações que tornam públicas, abertas e facilmente copiáveis algumas aplicações e bibliotecas, em que se investiu bastante tempo e dinheiro. O que mudou nesses 15 anos? O que motiva grandes empresas a disponibilizarem seu trabalho gratuitamente?

## No príncipio, tudo era _open source_... até chegar a propriedade intelectual

<citation
    position="right"
    quote="Sharing software [...] is as old as computers, just as sharing recipes is as old as cooking"
    author="Richard Stallman"
    from="Free Software, Free Society"
/>

Da década de 50 até meados dos anos 70, nas suas origens acadêmicas, a programação era largamente colaborativa e aberta (_desde que você se encontrasse na elite acadêmica de países desenvolvidos, claro_): pesquisadores compartilhavam suas técnicas e programas, frequentemente licenciados como _domínio público_ - no espírito de abertura e cooperação típico da pesquisa acadêmica[^software-before-80s]. O TeX é um exemplo de _software livre_ da época em uso e desenvolvimento até os dias atuais.

<citation
    quote="computer programs, to the extent that they embody an author's original creation, are proper subject matter of copyright"
    author="US Commission on New Technological Uses of Copyrighted Works (CONTU)"
    from="1974"
/>

No final da década de 60, a produção de software passou a competir com os distribuidores de hardware (cujos custos do software embarcado estavam incluídos no preço de venda do hardware), enquanto os custos de produção subiam dramaticamente e não havia modelo de negócio para o ramo. Até 1974, 'programas de computador' não estavam sujeitos a propriedade intelectual - assim sendo, não havia licenças pagas e eles eram distribuídos junto a seu código fonte. Tudo mudou em 1974, quando a CONTU - _Commission on New Technological Uses of Copyrighted Works_ - decidiu que o software pode estar sujeito a propriedade intelectual[^software-before-80s].

## A gênese do software livre

O ecossistema mudou rapidamente: entre o final da década de 70 e o início da de 80, licenças de software se tornaram costumeiros e os programas eram distribuídos já compilados, obfuscados, sem acesso ao código fonte. É dessa época o esforço de _Richard Stallman_ em popularizar o conceito de _software livre_, em contraste com o _software proprietário_, com código fechado e licenças restritas, que não permitiam experimentação com o código ou redistribuição de cópias do mesmo. Com isso em mente, ele fundou o [Projeto GNU](https://www.gnu.org/gnu/why-programs-should-be-shared.html), que passou a trabalhar num sistema operacional livre; a [FSF (_Free Software Foundation_)](https://www.fsf.org/); o conceito de [copyleft](https://en.wikipedia.org/wiki/Copyleft) (_licenças para software livre que obriga quem o utiliza a publicar seu trabalho com uma licença compatível ou menos restrita_) e sua primeira implementação, a licença [GPU (_General Public License_)](https://en.wikipedia.org/wiki/General_Public_License)[^software-after-copyright].

Um software pode ser classificado como livre quando atende as seguintes liberdades para os usuários, segundo a FSF:

- A liberdade de executar o programa, para qualquer propósito;
- A liberdade de estudar o programa, e adaptá-lo para as suas necessidades.
- A liberdade de redistribuir cópias do programa de modo que você possa ajudar ao seu próximo;
- A liberdade de modificar(aperfeiçoar) o programa e distribuir estas modificações, de modo que toda a comunidade se beneficie.

[^software-before-80s]: https://en.wikipedia.org/wiki/History_of_free_and_open-source_software#Free_software_before_the_1980s
[^software-after-copyright]: https://en.wikipedia.org/wiki/History_of_free_and_open-source_software#Initial_decline_of_free_software
[^enabling-linux-on-windows]: https://blog.ubuntu.com/2016/04/14/howto-ubuntu-on-windows-2
[^linux-is-a-cancer]: https://www.theregister.co.uk/2001/06/02/ballmer_linux_is_a_cancer/
[^microsoft-github-leader]: http://www.businessinsider.com/microsoft-github-open-source-2016-9
[embrace-extend-extinguish]: https://pt.wikipedia.org/wiki/Adoptar,_estender_e_extinguir
