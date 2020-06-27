---
title: "Privacidade (WIP)"
excerpt: "Por que, pra quê e pra quem"
date: 2018-12-10
customTags: ["Privacidade", "Sociedade"]
draft: true
---

## O que é (breve histórico)

Origem e definição da palavra, citações de aparições na cultura popular, fechar com "mas por que isso importa?"

-   https://www.merriam-webster.com/dictionary/privacy

## Privacidade e anonimidade

Privacidade = conteúdo, anonimidade = identidade.

## História

<!--
<figure>
	<iframe
		name="ngram_chart"
		src="https://books.google.com/ngrams/interactive_chart?content=privacy&case_insensitive=on&year_start=1600&year_end=2008&corpus=15&smoothing=6&share=&direct_url=t4%3B%2Cprivacy%3B%2Cc0%3B%2Cs0%3B%3Bprivacy%3B%2Cc0%3B%3BPrivacy%3B%2Cc0"
		width="765"
		height="300"
		marginwidth="0"
		marginheight="0"
		hspace="0"
		vspace="0"
		frameborder="0"
		scrolling="no"
	/>
	<figcaption>
		Gráfico mostrando ocorrência da palavra <span lang="en">'privacy'</span> na língua inglesa,
		de 1600 a 2010
	</figcaption>
</figure>
-->

História do conceito

-   https://aeon.co/essays/facebook-s-privacy-settings-aren-t-the-problem-ours-are (origem antropológica da noção de privacidade)
-   https://www.thoughtco.com/right-to-privacy-history-721174
-   https://medium.com/the-ferenstein-wire/the-birth-and-death-of-privacy-3-000-years-of-history-in-50-images-614c26059e
    > “Privacy may actually be an anomaly” ~ Vinton Cerf, Co-creator of the military’s early Internet prototype and Google executive.

### Privacidade e estado moderno

Falar de vigilância moderna, Foucault, 'Vigiar e Punir' e seu panopticon, etc

### Privacidade, computadores e a web (história recente)

-   https://en.wikipedia.org/wiki/Surveillance_capitalism

## Privacidade e teoria da informação

-   https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy

### Anonimidade e pseudonimidade

É senso comum que <i lang="en">bitcoins</i> são usadas por criminosos pra proteger suas identidades - ou seja, permanecer anônimos - mas [bitcoins são pseudônimas][^bitcoin-pseudonymous]. O que isso significa e quais são as suas implicações?

### Desanonimização

## Porque é importante

### Vigilância é um mecanismo de controle

-   https://www.utilitarianism.com/panopticon.html
-   How surveillance inhibits freedom of expression - https://www.schneier.com/blog/archives/2018/11/how_surveillanc_1.html
-   http://www.moyak.com/papers/michel-foucault-power.html
-   https://harvardmagazine.com/2017/01/the-watchers
-   https://bits.blogs.nytimes.com/2013/08/26/how-surveillance-changes-behavior-a-restaurant-workers-case-study/

### Seus dados são você e são seus (não existe harmless data)

-   https://www.nytimes.com/2018/01/29/world/middleeast/strava-heat-map.html
-   https://edition.cnn.com/2018/01/28/politics/strava-military-bases-location/index.html

### Anonimização de dados é frágil e unreliable

-   https://steveloughran.blogspot.com/2018/01/advanced-denanonymization-through-strava.html

### Casos reais

## Como é violada

### Vazamentos (Equifaz, Mariott, Facebook, etc)

-   https://www.wired.com/story/wired-guide-to-data-breaches/
-   https://informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/
-   https://en.wikipedia.org/wiki/Data_breach
-   https://en.wikipedia.org/wiki/List_of_data_breaches

### Venda de dados

Ao iniciar o processo de criar uma conta no aplicativo do Banco Next, após pedir alguns dados (incluindo seu CPF), perguntas pessoais são feitas para verificar sua identidade. Perguntas como:

> Ver se Diego ainda tem prints do Next

-   Qual é o sobrenome de solteira de sua mãe?
-   Você já morou em qual dessas ruas?
-   De qual dessas pessoas você é/foi sócio?

A ideia é que só você saberia dessas informações. A pergunta é: como eles sabem?

Lembra do CPF que foi pedido? Com ele em mãos, basta comprar esses dados de empresas com a [bigdatacorp](https://www.bigdatacorp.com.br/), que coleta, compra e agrega dados de diversas fontes.

### Coleta de dados sem consentimento

### Vigilância simples e direta (China, NSA + Snowden)

## Privacidade na web: como funcionam e quem pode vigiar o quê

### Introdução: o que não está nos termos de privacidade

O que significa confiar seus dados privados a alguém?

-   Confiar que seus dados não serão distribuídos sem autorização
    -   Como visto na [seção de desanonimização](#Desanonimização), a ideia de que dados só são considerados 'vazados' ou 'vendidos' quando eles o são na sua forma bruta ou, ao menos, de forma que te identifique é frágil e leva a abusos
-   Confiar que seus dados não serão roubados
    -   Confiar que, se eles forem roubados, você será notificado

### O que sabe seu browser

IP, URL e conteúdo de sites que acessa, bem como quando se acessa. Com que e como interage, etc.

### O que sabe sua provedora de internet

Na web: com HTTPS, IP, URL e quando acessa; com HTTP, conteúdo também (que inclusive pode ser modificado - [e é](https://techcrunch.com/2007/06/23/real-evil-isp-inserted-advertising/)). Pro restante da internet, o mesmo vale: em conexões criptografadas, se sabe momento de comunicação e metadados (URL, IP, cabeçalhos não criptografados; em conexões não criptografas, se sabe o conteúdo da comunicação também). Notavelmente, e-mails não são criptografados e devem ser considerados públicos.

-   https://invisibler.com/things-know-isp/

### O que sabe seu servidor de DNS

DNS é complexo, devido a como ele funciona, mas é certo que a cada <i lang='en'>DNS lookup</i> pelo menos um servidor tem acesso à URL completa, vazando URL, IP e momento de acesso.

-   DNS Privacy, the problem - https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+-+The+Problem

### O que sabe seu app preferido

Todos acima mais: contatos, geolocalização, microfone, sensores corporais... Aplicativos são o pior dos mundos.

-   https://github.com/FacettsOpen/exodify
-   https://www.nytimes.com/interactive/2018/12/10/business/location-data-privacy-apps.html?mc_cid=7faa1e38b8&mc_eid=49d9b64460

### O que sabe seu site preferido (Facebook, Google, Submarino, etc)

Em geral, apenas os dados internos à plataforma que se usa. Por exemplo, a Submarino sabe com que frequência você acessa o site (especialmente, mas não limitado a, quando se está logado), o que busca, o que compra, o que coloca na lista de desejos, etc. Mas empresas como a Google e o Facebook vão mais longe: eles provêem infraestrutura pro restante da internet, provendo serviços de identidade (login com Facebook e Google), ferramentas de mídia social (compartilhe no Facebook) e análise de dados de acesso a sites (Google Analytics), o que significa que eles acompanham também o que se faz nos sites que usam seus serviços. É alarmante o fato de que, já em 2015, 54,6% dos 1 milhão sites mais populares usavam o Google Analytics [^1](https://marketingland.com/as-google-analytics-turns-10-we-ask-how-many-websites-use-it-151892).

-   https://panopticlick.eff.org/
-   https://browserleaks.com/

#### Busca

Oh, boy.

#### Mídia social

### O que sabe seu provedor de e-mail

Google permite que funcionários leiam!!!

-   https://invisibler.com/email-security-basics/

### O que sabem provedores de infraestrutura pra web e apps

#### Trackers

### O que sabe seu governo

### O que sabe sua farmácia

### O que sabe sua provedora de crédito

### O que sabem as empresas de big data

## Como mitigar

### O que as empresas podem fazer

#### Anonimizar dados

-   https://gdpr.report/news/2017/09/28/data-masking-anonymization-pseudonymization/
-   https://www.oreilly.com/ideas/anonymize-data-limits

### O que você pode fazer

#### Você foi vítima de algum vazamento?

-   https://monitor.firefox.com/
-   https://haveibeenpwned.com/

#### Escolha de browser + configurações + extensões

#### Provedor de email

#### VPN, TOR

-   https://invisibler.com/tor-compromised/

#### Mecanismos de busca

#### Trackers e anunciantes

#### Mono- e oligopólios e

### Avanços teóricos (e.g. privacidade diferencial)

### Projetos e iniciativas na área (Blockchain, Fediverso, Dat + Beaker, IPFS + Neocities, Scuttlebutt, Cwtch)

### Leis (GDPR, Califórnia, Lei de dados pessoais brasileira)

-   https://www.accessnow.org/brazil-president-approves-data-protection-bill-but-vetoes-key-accountability-measures/
-   https://en.wikipedia.org/wiki/De-anonymization

## Temas relacionados

### Privacidade e decentralização (porque elas andam juntas)

-   https://www.eff.org/deeplinks/2018/07/facing-facebook-data-portability-and-interoperability-are-anti-monopoly-medicine
-   Reinvent the social web - https://staltz.com/reinvent-the-social-web.html
-   cwtch - https://cwtch.im/
-   https://twitter.com/SarahJamieLewis/status/1071554966802784256
    > No one ever got rich decentralizing power.

### Privacidade e inteligência artificial (ou porque os 5% de erro de uma IA podem destruir a vida de alguém - história do cara que foi confundido com um ladrão aí)

### Privacidade e IOT (a fantástica boneca com microfone, gps e conexão com a internet)

---

Referências:

[^bitcoin-pseudonymous]: Bitcoin Transactions Aren’t as Anonymous as Everyone Hoped https://www.technologyreview.com/s/608716/bitcoin-transactions-arent-as-anonymous-as-everyone-hoped/

---

### Fontes de referências

-   http://www.socialcooling.com/
-   https://wiki.fuckoffgoogle.de/index.php?title=GoogleAndMassSurveillance

### Referências

-   https://arstechnica.com/tech-policy/2018/08/did-google-violate-users-privacy-when-it-secretly-kept-location-data/
-   https://whotracks.me/blog/block-third-party-cookies.html
-   https://aeon.co/ideas/if-online-privacy-is-dead-will-obscurity-do-instead
-   https://aeon.co/ideas/are-you-just-inside-your-skin-or-is-your-smartphone-part-of-you
-   https://aeon.co/essays/how-the-internet-flips-elections-and-alters-our-thoughts
-   https://aeon.co/essays/why-big-data-is-actually-small-personal-and-very-human

### Links pro final

-   https://www.privacytools.io/
-   https://donottrack-doc.com/en/episodes/
-   https://panopticlick.eff.org/static/browser-uniqueness.pdf

### Yet to read

-   https://blog.mozilla.org/internetcitizen/2018/08/24/the-privacy-paradox-is-a-privacy-dilemma/
-   Privacy is consent - https://fieldnotes.resistant.tech/optimal-privacy/
-   Paranoia is now a best practice - https://medium.com/s/story/paranoia-is-now-a-best-practice-3b1adb8980ed
-   https://www.ribbonfarm.com/2018/11/28/the-digital-maginot-line/
