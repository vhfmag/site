# To do:

## Done

-   [x] microformats
    -   [x] [h-entry](http://microformats.org/wiki/h-entry)
    -   [x] [h-card](http://microformats.org/wiki/h-card)
    -   [x] [h-feed](http://microformats.org/wiki/h-feed)
    -   [x] [h-resume](http://microformats.org/wiki/h-resume)
-   [x] mover political statement pra sidebar (sempre visível)
-   [x] seletor de tema as fieldset + radio
-   [x] re-arquitetura de notas pra indieweb
    -   [x] tipos de resposta (https://indieweb.org/responses)
        -   [x] like
        -   [x] bookmark
        -   [x] reply (default / photo / video)
        -   [x] quotation (para RTs)
-   [x] usar `/search?q=` pra fazer um campo de busca na sidebar
-   [x] integrar com indieweb
    -   [x] receber webmentions
        -   [x] configurar pra receber https://webmention.io
        -   [x] configurar https://brid.gy/
        -   [x] consumir https://webmention.io através de https://www.11ty.io/docs/data-js/
        -   [x] configurar webhook em pra fazer redeploy do site https://webmention.io
    -   [x] mandar webmention
        -   [x] webhook de deploy + functions? — https://github.com/strugee/lazymention
    -   [x] POSSE
        -   [x] https://brid.gy/about#webmentions
-   [x] micropub? https://paulrobertlloyd.github.io/indiekit/config 😱

## Todo

-   [ ] re-arquitetura de notas pra indieweb
    -   [ ] tipos de resposta (https://indieweb.org/responses)
        -   [ ] review?
    -   [ ] layout a parte pra notas, já que títulos são opcionais
-   [ ] Plugins do 11ty:
    -   [ ] adicionar `rel="noopener noreferrer"` em todo link externo
    -   [ ] fallback pra iframes (conteúdo dentro dele)
-   [ ] Revisar descrições da página de links
-   [ ] página /now
-   [ ] linha do tempo (https://colly.com/journal/timeline, https://kirk.is/timelines/)
-   [ ] function pra gerar imagem pra posts a partir do título (algo como https://og-image.now.sh/)
-   [ ] integrar com indieweb
    -   [ ] form de envio de webmention a partir de link? (Conforme https://andy-bell.design/notes/229/)
        -   [ ] form[target="POST", action="https://webmention.io/vhfmag.dev/webmention"]
        -   [ ] link - input[type=url, required, name=source]
        -   [ ] target - input[type=hidden, name=target]
-   [ ] contribuir pro IndieKit
    -   [ ] passar dados de sindicação pro contexto de renderização
    -   [ ] fazer upload de imagens
-   [ ] https://indieweb.org/IndieMark
