---
title: "Sobre a neutralidade de rede"
description: "O que é, como a internet muda sem ela, porque defendem e porque atacam"
date: 2017-12-19
customTags: ["Tecnologia", "Sociedade"]
draft: false
---

Recentemente, a FCC (Federal Communications Commission), agência do governo americano responsável por regular a comunicação no país em âmbito federal (similar à ANACOM no Brasil), votou por anular regras estabelecidas na era Obama pelo [FCC Open Internet Order 2010][fcc-open-internet-order], que regulamentavam a _neutralidade de rede_[^net-neutrality-dead][^net-neutrality-dead-2]. A votação, que envolveu um escândalo de manipulação de plataforma de consulta pública, incluindo roubo de identidade[^fake-comments-scandal], beneficiou as provedoras de internet, que passam a poder discriminar o conteúdo trafegado, passando a poder cobrar por serviços como priorização de tráfego ou até mesmo limitando a que sites e serviços o cliente terá acesso.

Desde a votação, muito se especula sobre o futuro da internet nos Estados Unidos e no mundo. Alguns países, como Portugal e Indonésia, não regulamentam a neutralidade da internet e podem servir de exemplo do que está por vir[^portugal-non-neutral-web] - com planos de internet similares aos de TV a cabo, que limitam o acesso dos clientes aos sites e serviços disponibilizados no pacote contratado. No Brasil, temos uma regulamentação equivalente desde 2014, o [Marco Civil da Internet](https://pt.wikipedia.org/wiki/Marco_Civil_da_Internet) - mas, [segundo a Folha de S. Paulo](http://www1.folha.uol.com.br/mercado/2017/12/1943511-no-brasil-teles-tambem-vao-pedir-mudanca-de-neutralidade-de-rede.shtml "No Brasil, teles também vão pedir mudança de neutralidade de rede"), empresas de telecomunicações que operam no Brasil pretendem solicitar à presidência a revisão do mesmo logo após a votação da reforma da previdência.

Para se entender melhor a situação e poder ter opiniões embasadas sobre o assunto, este artigo pretende introduzir o conceito de neutralidade de rede, listar prós e contras e sugerir o que pode ser feito daqui em diante .

## O que é a neutralidade da rede?

A definição de neutralidade de rede é ampla e passa pelo atendimento de alguns princípios, e a obrigatoriedade de todos eles pode não ser consenso, a depender de quem a define. Alguns dos principais são: neutralidade da internet, internet aberta, _dumb pipe_, princípio de ponta-a-ponta e limitação de modelagem de tráfego. Em comum, a visão da internet como utilidade pública, equiparando as provedoras de internet às distribuidoras de água e energia; essencial ao exercício da cidadania, conforme o [Marco Civil da Internet][marco-civil], artigo 7º; e até mesmo direito humano básico, conforme a ONU[^internet-human-right].

### Neutralidade da internet

Princípio segundo o qual toda e qualquer informação que trafega na internet deve ser tratada igualmente, sem qualquer discriminação e na mesma velocidade - na velocidade contratada pelo usuário. Esse é um dos princípios mais básicos. Como rege o [Marco Civil][marco-civil]:

> Art. 9o O responsável pela transmissão, comutação ou roteamento tem o dever de tratar de forma isonômica quaisquer pacotes de dados, sem distinção por conteúdo, origem e destino, serviço, terminal ou aplicação.

### Internet aberta

O princípio segundo o qual a totalidade dos recursos disponíveis na internet, bem como os meios para operá-los, deve ser facilmente acessível para qualquer empresa, indivíduo ou organização[^definicao-neutralidade]. Consonante com a visão da internet como utilidade pública, o princípio prega a ausência de censura, baixas barreiras de entrada e a adesão a padrões abertos, decididos publicamente (exemplos são as especificações de tecnologias como HTTP, HTML, Javascript e CSS) e que, não pertecendo a nenhuma parte individual, todos podem usar para se comunicar.

### Dumb pipe e princípio de ponta-a-ponta

Assim como redes de distribuição de água são feitas de canos que não são capazes de saber o conteúdo, direcionar ou manipular o fluxo que passa por eles, assim deve ser a internet para quem advoca pelo _dumb pipe_. Ele prega que toda a inteligência da rede deve estar em suas pontas (servidores, computadores, celulares), não na sua infraestrutura. O princípio de ponta-a-ponta é próximo ao _dumb pipe_ e serviu de base para os protocolos de comunicação que temos hoje, afirmando que funcionalidades adicionais na infraestrutura só se justificam se forem otimizações de performance (ex: retransmissão de TCP).

Para citar exemplos mais concretos de violações desses princípios, pense na Vivo, Oi, Claro ou Tim vendendendo serviços como:

-   Coleta de dados de tráfego (ex: Google Analytics e Piwik)
-   Otimização de tráfego (ex: CDNs)

### Limitação de modelagem de tráfego

Modelagem de tráfego é o controle do tráfego na rede para otimizar ou garantir performance, diminuir latência e aumentar a largura de banda disponível, usualmente através do atraso ou limitação de tráfego de determinados tipos de dados (ex: vídeos e torrents).

## Porque defender a neutralidade?

No Brasil, estamos acostumados a acessar qualquer site ou serviço, sem restrições e com a mesma velocidade de conexão - conforme regulado no Marco Civil. Mas países como a Indonésia e Portugal, onde esse tipo de regulamentação é fraca ou inexiste, podem ilustrar melhor as práticas de mercado concretas decorrentes da não-neutralidade. A seguir, um print extraído do site da provedora portuguesa [MEO](https://www.meo.pt/internet/internet-movel/telemovel/pacotes-com-telemovel), mostrando planos de internet estruturados como os de TV a cabo, com acesso ilimitado restrito a uma gama predeterminada de serviços:

![Na provedora portuguesa MEO, os planos de internet móvel 'Smart Net' dão acesso ilimitado a serviços predeterminados, mediante contratação de pacotes específicos](https://upload.wikimedia.org/wikipedia/commons/7/77/Screenshot-2017-10-28MEO-Televis%C3%A3o%2C_Internet%2C_Telefone_e_Telem%C3%B3vel.png)

O modelo de cobrança ilustra umas das principais críticas levantadas por quem apoia a neutralidade contra sua ausência: o aumento da barreira para a entrada de novos serviços no mercado e, portanto, o aumento da dificuldade de inovação[^net-neutrality-innovation]. A lógica é como segue: imagine que uma empresa local crie um novo serviço de _streaming_. Ela acabou de entrar no mercado e tem pouco capital, não podendo pagar para as provedoras e, portanto, não estando nos planos de acesso ilimitado. Para competir contra serviços como a Netflix, além de barreiras que já existem hoje (como a presença de menos conteúdo, menor poder de barganha e capital de giro, etc), adicionaria-se um agravante: o seu usuário precisaria pagar para consumir o seu pesado conteúdo, enquanto poderia assistir aos títulos de suas concorrentes maiores gratuitamente.

Além disso, pode-se ver na imagem acima que os serviços de nuvem, streaming e mapas oferecidos pela MEO são gratuitos em qualquer plano contratado com a provedora. Adicionando a pretensão de provedoras de entrar nestes mercados, chega-se à segunda crítica: a concorrência desleal entre os serviços oferecidos pelas próprias provedoras e suas parceiras, em comparação aos concorrentes. Não seria o primeiro caso de provedoras usando de seu poder para desequilibrar o mercado a seu favor: no passado, provedoras de serviços de telecomunicação bloquearam serviços de VOIP em favor de seu próprio serviço de telefonia.

Outra prática que os defensores da neutralidade abominam é a de inspecionar, filtrar ou modificar o conteúdo que trafega na rede. Num caso recente, um cliente da americana Comcast [denunciou no fórum da empresa](https://forums.xfinity.com/t5/Customer-Service/Are-you-aware-Comcast-is-injecting-400-lines-of-JavaScript-into/td-p/3009551) que a mesma estava injetando mais de 400 linhas de Javascript em sites não associados à empresa - o objetivo era informar o cliente de que seu modem estava próximo a deixar de ser suportado. Pode não parecer nada demais, mas o problema se evidencia se for visto da perspectiva de proprietários de sites e serviços: você oferece um serviço através de um site e sabe que anúncios invasivos prejudicam a experiência do usuário e a imagem de sua empresa, mas terceiros (a provedora) injetam um anúncio invasivo no seu site sem qualquer aviso ou solicitação prévia. Seus clientes podem acreditar que o anúncio é do seu site e o dano à marca está feito.

A crítica vai mais além: a depender da extensão do poder da provedora, esta pode vir a censurar, modificar ou prejudicar (ex: diminuindo a velocidade) o acesso a determinados conteúdos e serviços. Outro modelo de negócios comumente citado no debate é o das _fast lanes_: as provedoras poderiam priorizar o tráfego (aumentando velocidade) de serviços e conteúdos que paguem mais. Assim, grandes empresas e organizações, dotadas de capital, teriam mais uma vantagem desleal contra pequenas concorrentes, dificultando a inovação.

## O caso contra a neutralidade

Como já deve ter ficado claro a essa altura, eu sou a favor da neutralidade da rede. Mas eu também reconheço os perigos da polarização que vivemos e das bolhas de consenso criadas por algoritmos de redes sociais[^fb-bubble-1][^fb-bubble-2]. A neutralidade é debatida (e legislada) há mais de 15 anos e se hoje ela não é um princípio estável e difundido, é porque o debate continua vivo. Seguem, portanto, nos parágrafos a seguir, alguns dos principais argumentos contra ela.

Para [Richard Bennet](http://bennett.com/), tecnólogo canadense envolvido na criação do protocolo Wi-Fi MAC e da mais popular implementação da Ethernet, a neutralidade da rede é um objetivo vago, difícil de detectar (por isso difícil de fiscalizar e punir, segundo artigo citado[^net-neutrality-enforcement]) e cujo longo e prolixo debate toma o tempo de discussões mais objetivas e urgentes, citando que a neutralidade não resolve problemas amplamente discutidos hoje, como a segurança e privacidade na rede.

Outro argumento amplamente utilizado é o de que a neutralidade da rede desestimula o investimento em infraestrutura, tendo sido citado por Ajit Pai[^ajit-pai-order], _chairman_ da FCC e responsável pela recentemente aprovada proposta de reversão da regulamentação da neutralidade. Esse argumento baseia-se na ideia de que um mercado é tanto mais inovador e competitivo quanto mais livre de regulamentação e burocracia ele for - ideia que vê seus limites em mercados imperfeitos, como os oligopolísticos e monopolísticos.

Outra justificativa é a de que a [FCC Open Internet Order 2010][fcc-open-internet-order], longe de favorecer pequenos empreendimentos, minorias e os socialmente desfavorecidos, estabelece impostos diretos e indiretos, desfavorece a redução de custos de operação (já que desestimularia o investimento em infraestrutura) e impede os mais carentes de ter acesso a planos mais baratos e adequados à forma como usam a rede[^case-against-neutrality], conforme detalhado pelo próprio Ajit Pay em [artigo de 2015 no Chicago Tribune](http://www.chicagotribune.com/news/opinion/commentary/ct-internet-regulations-fcc-ftc-obama-broadband-perspec-0219-20150218-story.html).

---

Esperamos que este artigo possa te ajudar a entender melhor o que é e porque defender ou atacar a neutralidade da rede. O debate provavelmente está longe de ser encerrado, e após a decisão do FCC, outros países devem rediscutir suas legislações sobre o assunto, incluindo o Brasil. Conforme citado no artigo, estar na internet e participar da discussão é parte integrante de uma cidadania completa, especialmente em tempos em que governos usam a rede para consultas públicas e prestação de serviços ao cidadão. Para saber mais sobre a rede enquanto infraestrutura pública e espaço de cidadania, sugiro ler o [blog da Mozilla](https://blog.mozilla.org/internetcitizen/) e este artigo de [Jack Shenker para a Aeon](https://aeon.co/users/jack-shenker) sobre [o papel e a influência de tecnologias em nossas democracias](https://aeon.co/essays/digital-technologies-play-politics-lets-use-them-for-democracy).

[marco-civil]: http://www.planalto.gov.br/CCIVIL_03/_Ato2011-2014/2014/Lei/L12965.htm
[fcc-open-internet-order]: https://en.wikipedia.org/wiki/FCC_Open_Internet_Order_2010

[^case-against-neutrality]: https://www.thebalance.com/the-case-against-net-neutrality-2531680
[^ajit-pai-order]: https://www.fcc.gov/document/chairman-pai-proposes-restore-internet-freedom
[^net-neutrality-enforcement]: https://www.ofcom.org.uk/__data/assets/pdf_file/0024/71682/traffic-management-detection.pdf
[^net-neutrality-dead]: https://www.technologyreview.com/the-download/609784/the-fcc-has-now-done-its-part-to-kill-net-neutrality/
[^net-neutrality-dead-2]: https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html
[^definicao-neutralidade]: https://en.wikipedia.org/wiki/Net_neutrality
[^net-neutrality-innovation]: https://www.technologyreview.com/s/609594/the-demise-of-net-neutrality-will-harm-innovation-in-america/
[^neutrality-delusion]: https://www.technologyreview.com/s/607984/the-neutrality-delusion/
[^portugal-non-neutral-web]: https://boingboing.net/2017/10/28/warning-taken-as-suggestion.html
[^neutralidade-da-rede]: https://pt.wikipedia.org/wiki/Neutralidade_da_rede
[^isp-blocks-competition]: https://www.dailydot.com/layer8/net-neutrality-violations-history/
[^internet-human-right]: https://gizmodo.com/internet-access-is-now-a-basic-human-right-1783081865
[^fb-bubble-1]: https://www.vanityfair.com/news/2017/11/the-end-of-the-social-era-twitter-facebook-snapchat
[^fb-bubble-2]: https://www.theatlantic.com/technology/archive/2017/10/what-facebook-did/542502/
[^fake-comments-scandal]: https://hackernoon.com/more-than-a-million-pro-repeal-net-neutrality-comments-were-likely-faked-e9f0e3ed36a6

> Publicado originalmente [no blog da cubos](http://cubos.io/blog/neutralidade-de-rede/)
