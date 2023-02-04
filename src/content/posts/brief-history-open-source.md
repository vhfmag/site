---
title: "Uma breve história do código aberto e do software livre"
excerpt: "De bem comum a marketing"
customTags: ["Software livre", "Código aberto"]
date: 2018-05-31
---

Esse é o primeiro de uma série de posts que explora como os conceitos de _código aberto_ e _software livre_ tem sido expandidos para além do desenvolvimento de software. Esse não é um texto técnico e não supõe que o leitor tenha familiaridade com desenvolvimento. O primeiro post da série explica um pouco da história do código aberto e do software livre, para que possamos expandir os conceitos e seus valores para outros domínios nos próximos posts.

## Código aberto?

> _Atenção_: se você já sabe o que significa _código_ e _código aberto_, pode pular pra próxima seção, já que o objetivo desta é introduzir conceitos

<blockquote class="float">
	se uma torta fosse um programa de computador, sua receita seria o código-fonte
</blockquote>

O trabalho de um desenvolvedor consiste, em grande parte, em redigir instruções que computadores (máquinas que calculam muito bem e muito rápido, mas que não são particularmente inteligentes por si só) sejam capazes de compreender e executar e que sejam úteis para determinada aplicação (exibir uma página na internet ou aplicar filtros na imagem de uma câmera, por exemplo). A essas instruções, dá-se o nome de _código-fonte_. Esse código, quando compilado (ou interpretado), torna-se um _programa_ - um aplicativo de celular ou um navegador, por exemplo. Uma analogia comum ao explicar os conceitos é o de uma receita: se uma torta fosse um programa de computador, sua receita seria o código-fonte.

Os produtos de organizações como a Microsoft, o Facebook, o Google e a Mozilla são, portanto, seus programas - por exemplo: respectivamente, o Windows, o (site do) Facebook, o Google Chrome e o Firefox. Para manter segredo industrial e dificultar o surgimento de concorrentes, a maior parte das empresas do ramo prefere manter o código em segredo, distribuindo para seus usuários apenas o programa dele resultante - pense nisso como a Coca-Cola distribuindo seu produto para todo o mundo e mantendo sua receita em segredo.

Quando o código de um programa não está publicamente disponível, diz-se que o mesmo está em _código fechado_. O oposto disso é o _código aberto_: a receita do programa está publicamente disponível - o que não significa que ela pode ser usada livremente! - e a prática com frequência vem acompanhada da possibilidade de qualquer um fazer sugestões de mudança no código.

Das organizações citadas, apenas a Mozilla tem todo o seu trabalho disponível publicamente em código aberto - as demais disponibilizam pequenas partes, mas mantém o código-fonte de seus principais produtos em segredo e protegidos por algum tipo de [Acordo de não divulgação](https://pt.wikipedia.org/wiki/Acordo_de_n%C3%A3o_divulga%C3%A7%C3%A3o) (também conhecido por sua sigla em inglês, NDA).

Com isso, estamos prontos para um pouco de história.

## Open source, ontem e hoje

A forma como desenvolvedores colaboram para além das fronteiras de suas empresas mudou fundamentalmente nos últimas décadas. Enquanto em 2001 Steve Ballmer, CEO da _Microsoft_ - empresa então no auge de sua fase [adotar, extender e extinguir](https://pt.wikipedia.org/wiki/Adoptar,_estender_e_extinguir), dizia que "_Linux is a cancer that attaches itself in an intellectual property sense to everything it touches_" [^linux-is-a-cancer], em 2016 a mesma empresa foi líder em número de contribuidores em repositórios open-source na maior plataforma de compartilhamento e hospedagem de código, o [Github](https://github.com)[^microsoft-github-leader] e até incluiu um subsistema _Linux_ (um sistema operacional de código aberto) no seu sistema operacional, o onipresente _Windows_[^enabling-linux-on-windows].

<blockquote class="float"><cite><q>Linux is a cancer that attaches itself in an intellectual property sense to everything it touches</q></cite>Steve Ballmer, ex-CEO da Microsoft</blockquote>

A _Microsoft_ não está sozinha: o _Facebook_ disponibilizou sua biblioteca de UI para a web, o _React_; e a _Google_, o _Tensorflow_, biblioteca utilizada para processar de forma eficiente grandes quantidades de dados usando GPU. Esses são apenas alguns exemplos da infinidade de empresas e organizações que tornam públicas, abertas e facilmente copiáveis algumas aplicações e bibliotecas, em que se investiu bastante tempo e dinheiro. O que mudou nesses 15 anos? O que motiva grandes empresas a disponibilizarem seu trabalho gratuitamente?

## No príncipio, tudo era open source - até chegar a propriedade intelectual

<blockquote class="float"><cite><q>Sharing software [...] is as old as computers, just as sharing recipes is as old as cooking</q></cite>Richard Stallman, em Free Software, Free Society</blockquote>

Da década de 50 até meados dos anos 70, nas suas origens acadêmicas, a programação era largamente colaborativa e aberta (_desde que você se encontrasse na elite acadêmica de países desenvolvidos, claro_): pesquisadores compartilhavam suas técnicas e programas, frequentemente licenciados como _domínio público_ - no espírito de abertura e cooperação típico da pesquisa acadêmica[^software-before-80s]. O TeX é um exemplo de _software livre_ da época em uso e desenvolvimento até os dias atuais.

<blockquote class="float"><cite><q>computer programs, to the extent that they embody an author's original creation, are proper subject matter of copyright</q></cite>US Commission on New Technological Uses of Copyrighted Works (CONTU), 1974</blockquote>

No final da década de 60, a produção de software passou a competir com os distribuidores de hardware (cujos custos do software embarcado estavam incluídos no preço de venda do hardware), enquanto os custos de produção subiam dramaticamente e não havia modelo de negócio para o ramo. Até 1974, 'programas de computador' não estavam sujeitos a propriedade intelectual - assim sendo, não havia licenças pagas e eles eram distribuídos junto a seu código fonte. Tudo mudou em 1974, quando a CONTU - _Commission on New Technological Uses of Copyrighted Works_ - decidiu que o software pode estar sujeito a propriedade intelectual[^software-before-80s]. O ecossistema mudou rapidamente: entre o final da década de 70 e o início da de 80, licenças de software se tornaram costumeiros e os programas eram distribuídos já compilados, obfuscados, sem acesso ao código fonte.

## Nascimento do movimento do _software livre_

É dessa época o esforço de _Richard Stallman_ em popularizar o conceito de _software livre_, em contraste com o _software proprietário_, com código fechado e licenças restritas, que não permitiam experimentação com o código ou redistribuição de cópias do mesmo. Com isso em mente, ele fundou a [FSF (_Free Software Foundation_)](https://www.fsf.org/); o conceito de [copyleft](https://en.wikipedia.org/wiki/Copyleft) e sua primeira implementação, a licença [GPU (_General Public License_)](https://en.wikipedia.org/wiki/General_Public_License)[^software-after-copyright]; e o [Projeto GNU](https://www.gnu.org/gnu/why-programs-should-be-shared.html).

<blockquote class="float"><cite><q>free as in speech, not free as in beer</q></cite> – Richard Stallman</blockquote>

Um software pode ser classificado como livre quando atende as seguintes liberdades para os usuários, segundo a FSF:

-   A liberdade de executar o programa, para qualquer propósito;
-   A liberdade de estudar o programa, e adaptá-lo para as suas necessidades.
-   A liberdade de redistribuir cópias do programa de modo que você possa ajudar ao seu próximo;
-   A liberdade de modificar o programa e distribuir estas modificações, de modo que toda a comunidade se beneficie.

Vale ressaltar que nenhuma dessas condições cita explicitamente que o código deva ser aberto - logo, nem todo software livre precisa ter código aberto. A união dos dois movimentos é referida como [FOSS (Free and open source software)](https://en.wikipedia.org/wiki/Free_and_open-source_software).

O Projeto GNU tinha como objetivo criar um sistema operacional livre, de forma que não se precisasse de software proprietário para usar computadores. Em 1991, quase todo o sistema estava pronto, com exceção do _kernel_. Só quando o projeto juntou esforços com Linus Torvalds, responsável pelo kernel do Linux, surgiu o primeiro sistema operacional livre: o [GNU/Linux](https://pt.wikipedia.org/wiki/Linux). Ele tem inúmeras distribuições e é amplamente utilizado até os dias atuais, estando em 498 dos 500 mais poderosos computadores do mundo[^linux-top-computers].

Vale citar também que licenças _copyleft_, com o objetivo de promover o software livre e impedir seu uso em software proprietário, obrigam todos aqueles que fazem uso da delas a disponibilizarem o resultado em uma licença compatível ou mais restrita. Ou seja: obriga quem usa software livre a publicar seu trabalho como software livre. Foi a isso que o CEO da Microsoft fez referência ao falar do Linux.

## Corporações aderem ao código aberto

<blockquote class="float">
	Biblioteca (computação): conjunto de porções reutilizáveis de código com aplicações específicas
</blockquote>

A controversa relação de empresas de tecnologia com os movimentos do código aberto e (principalmente) do software livre parecia indicar polos opostos: empresas contra o código enquanto bem comum. No entanto, o que se viu com empresas de tecnologia das novas gerações foi muito diferente: enquanto a maioria delas continua não disponibilizando seus principais produtos como código aberto, elas o fazem com _bibliotecas_.

> Esse fenômeno é recente e relativamente pouco estudado (_leia-se: não encontrei nada significativo nas minhas pesquisas_), então o que segue é opinião.

Essa mudança de paradigma aconteceu por motivos diversos, dentre os quais:

-   Ter projetos em código aberto tornou-se bom para a imagem das empresas, assim como ser ecológica e socialmente responsável
-   Código aberto aumenta a qualidade do software: atendendo maiores quantidade e variedade de casos de uso implica em código mais resiliente, testado e bem documentado
-   Desenvolvedores de fora da empresa originária podem corrigir erros ou implementar novas funcionalidades na sua biblioteca **de graça**, em troca de capital social, já que profissionais com contribuições em código aberto são mais valorizados
-   A necessidade de colaborar com desenvolvedores ao redor do mundo fez a comunidade _open source_ desenvolver técnicas de excelência, a ponto destas serem documentadas e aplicadas por empresas nas suas bases de código proprietário (exemplo: [InnerSourceCommons](https://paypal.github.io/InnerSourceCommons/))

## Abertura e liberdade, além do código

A possibilidade de ter código aberto surgiu, em primeiro lugar, porque conhecimento não é intrinsecamente escasso - diferente de comida ou bens materiais, conhecimento não é consumido ao ser usado nem está limitado a um lugar no espaço. Portanto, com ferramentas para a difusão do conhecimento (a Web surgiu por isso), todos podem colaborar com um bem comum que não acaba nem diminui em quantidade, para ganho de todos.

Esse é o conceito por trás do **FOSS**: códigos como bens comuns, inesgotáveis e infinitamente compartilháveis, que podem ser modificados por cada usuário, para seu caso de uso. A necessidade de comercializá-lo (para financiar sua produção) criou _escassez artificial_ através de propriedade intelectual, licenças pagas e dispositivos cada vez mais intrincados que impedem seu uso não licenciado (que lutam contra dispositivos cada vez mais intrincados para pirateá-los). A colaboração em código aberto nos deu muitas ferramentas, das quais Wikipedia e Android são exemplos onipresentes no ocidente; ela também possibilita maior diversidade, com participação de pessoas de inúmeras origens.

## Conclusões

Se o código aberto e o software livre podem ser tão benéficos (inclusive para corporações) e se "_compartilhar software é tão antigo quanto os computadores, assim como compartilhar receitas é tão antigo quanto cozinhar_", a ideia pode ser aplicada em outros domínios?

Ela pode e ela é, seja em plataformas eletrônicas ([Arduino](https://arduino.cc) e [Raspberry PI](https://www.raspberrypi.org/)), em [carros _open-source_](https://en.wikipedia.org/wiki/Open-source_car), em [plantas-baixas abertas para uma civilização](https://www.opensourceecology.org/) (_documentação aberta e pública de como construir a insfraestrutura básica de uma vila_) ou [em](https://openbionics.org/) [muitas](https://wikihouse.cc/) [outras](https://www.opendesk.cc/) [coisas](http://www.poc21.cc/). Mas isso é assunto pro próximo post :wink:.

[^linux-top-computers]: https://itsfoss.com/linux-supercomputers-2017/
[^software-before-80s]: https://en.wikipedia.org/wiki/History_of_free_and_open-source_software#Free_software_before_the_1980s
[^software-after-copyright]: https://en.wikipedia.org/wiki/History_of_free_and_open-source_software#Initial_decline_of_free_software
[^enabling-linux-on-windows]: https://blog.ubuntu.com/2016/04/14/howto-ubuntu-on-windows-2
[^linux-is-a-cancer]: https://www.theregister.co.uk/2001/06/02/ballmer_linux_is_a_cancer/
[^microsoft-github-leader]: http://www.businessinsider.com/microsoft-github-open-source-2016-9
