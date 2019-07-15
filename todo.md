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
-   [ ] adicionar `rel="nofollow"` em todo link externo (plugin?)
-   [ ] Revisar descrições da página de links
-   [ ] página /now
-   [x] mover political statement pra sidebar (sempre visível)
-   [x] seletor de tema as fieldset + radio
-   [ ] re-arquitetura de notas pra indieweb
    -   [ ] configurar netlify CMS (cada tipo de nota em uma pasta diferente, pra ter fields diferentes?)
    -   [ ] tipos de resposta (https://indieweb.org/responses)
        -   [ ] like
        -   [ ] bookmark
        -   [ ] reply (default / photo / video)
        -   [ ] quotation (para RTs)
        -   [ ] review?

## Upcoming

-   [ ] function pra gerar imagem pra posts a partir do título
-   [-] integrar com indieweb
    -   [x] receber webmentions
        -   [x] configurar pra receber https://webmention.io
        -   [x] configurar https://brid.gy/
        -   [x] consumir https://webmention.io através de https://www.11ty.io/docs/data-js/
        -   [x] configurar webhook em pra fazer redeploy do site https://webmention.io
    -   [ ] mandar webmention
        -   [ ] webhook de deploy + functions? — https://github.com/strugee/lazymention
    -   [ ] POSSE
        -   [ ] https://brid.gy/about#webmentions
        -   [ ] https://fed.brid.gy/#setup
    -   [ ] form de envio de webmention a partir de link?
-   [ ] micropub? usar git gateway do netlify? https://github.com/netlify/git-gateway
-   [ ] https://indieweb.org/IndieMark
