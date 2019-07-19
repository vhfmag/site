# To do:

## MVP ✅

-   [-] página de links
    -   [x] Criar página
-   [x] página de 404
-   [x] currículo
-   [x] revisar se faltou trazer outras imagens da pasta /images
-   [x] cache buster
-   [x] links codesandbox://
-   [x] manifesto
-   [x] skip nav
-   [x] sitemap
-   [x] RSS
-   [x] headers do netlify
    -   [x] cache de assets
    -   [x] redirect pro 404
    -   [x] redirect old routes to new routes
        -   [x] bookmarks -> notes
        -   [x] links -> blogroll
        -   [x] resume -> work

## Up next

-   [x] microformats
    -   [x] [h-entry](http://microformats.org/wiki/h-entry)
    -   [x] [h-card](http://microformats.org/wiki/h-card)
    -   [x] [h-feed](http://microformats.org/wiki/h-feed)
    -   [x] [h-resume](http://microformats.org/wiki/h-resume)
-   [x] mover political statement pra sidebar (sempre visível)
-   [x] seletor de tema as fieldset + radio
-   [x] re-arquitetura de notas pra indieweb
    -   [-] tipos de resposta (https://indieweb.org/responses)
        -   [x] like
        -   [x] bookmark
        -   [x] reply (default / photo / video)
        -   [x] quotation (para RTs)
        -   [ ] review?
-   [ ] usar /search?q= pra fazer um campo de busca na sidebar
-   [ ] adicionar `rel="nofollow"` em todo link externo (plugin?)
-   [ ] Revisar descrições da página de links
-   [ ] página /now
-   [ ] function pra gerar imagem pra posts a partir do título (algo como https://og-image.now.sh/)

## Upcoming

-   [-] integrar com indieweb
    -   [x] receber webmentions
        -   [x] configurar pra receber https://webmention.io
        -   [x] configurar https://brid.gy/
        -   [x] consumir https://webmention.io através de https://www.11ty.io/docs/data-js/
        -   [x] configurar webhook em pra fazer redeploy do site https://webmention.io
    -   [x] mandar webmention
        -   [x] webhook de deploy + functions? — https://github.com/strugee/lazymention
    -   [x] POSSE
        -   [x] https://brid.gy/about#webmentions
    -   [ ] form de envio de webmention a partir de link?
-   [ ] micropub? https://paulrobertlloyd.github.io/indiekit/config 😱
-   [ ] https://indieweb.org/IndieMark
