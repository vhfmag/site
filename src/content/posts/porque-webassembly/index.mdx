---
title: Por que WebAssembly?
tags: ["Técnico"]
date: 2019-03-10
draft: true
---

Existem tantas linguagens compilam para Javascript ([centenas, sério](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS)), que já se falou sobre Javascript ser a <i lang='en'>assembly language</i> da Web <sup>[1](https://www.hanselman.com/blog/JavaScriptIsWebAssemblyLanguageAndThatsOK.aspx)</sup>. Se era, não é mais.

## O que é WebAssembly?

Em novembro de 2017, Safari e Edge se juntaram ao Firefox e ao Chrome ao lançar suas primeiras versões com suporte a uma nova linguagem da Web, o [WebAssembly](https://webassembly.org/) <sup>[2](https://blog.mozilla.org/blog/2017/11/13/webassembly-in-browsers/)</sup>. Sendo um alvo de compilação para a Web com sintaxe binária compacta, garantias de segurança e performance previsível e próxima de nativa, ela traz novas possibilidades para a Web. Quais? Alguns exemplos:

-   Aplicações pesadas [como o Autocad](https://duckduckgo.com/?q=autocad+webassembly&t=ffab&atb=v154-1&ia=web) podem ser portadas para a Web
-   Jogos na Web tem acesso a um novo patamar de recursos – e <i lang='en'>engines</i> como [o <i lang='en'>Unity</i>](https://blogs.unity3d.com/2018/08/15/webassembly-is-here/) já geram WebAssembly
-   Algoritmos como os de [visão computacional](https://github.com/Web-Sight/WebSight) podem ser portados para a Web com performance satisfatória:

![Gravação de comparativo de performance entre WebAssembly, asm.js e Javascript](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/09/websight.gif)

Ou seja, WebAssembly enterra de uma vez por todas o passado sombrio da Web de Flash e Java applets. Agora, performance próxima de nativa é uma funcionalidade especificada na Web e implementada pelos principais navegadores. 🎉

Fala de:

-   Histórico
    -   asm.js (https://en.wikipedia.org/wiki/Asm.js, http://asmjs.org/)
-   Objetivos
    -   Links
        -   https://webassembly.org/docs/high-level-goals/
        -   https://webassembly.org/docs/rationale/
        -   https://webassembly.org/docs/portability/
        -   https://webassembly.org/docs/security/
    -   Streamable (executado enquanto baixado)
        -   https://hacks.mozilla.org/2018/01/making-webassembly-even-faster-firefoxs-new-streaming-and-tiering-compiler/
    -   Sem custo de parse
    -   Performance
        -   Previsível
        -   Próxima de nativa (benchmark JS: https://medium.com/samsung-internet-dev/performance-testing-web-assembly-vs-javascript-e07506fd5875; bechmark nativo: https://news.ycombinator.com/item?id=19023413)
-   Roadmap
    -   https://hacks.mozilla.org/2018/10/webassemblys-post-mvp-future/
    -   https://webassembly.org/roadmap/
-   Adoção e suporte
    -   https://developer.mozilla.org/en-US/docs/WebAssembly#Browser_compatibility
-   WebAssembly vs JVM/Flash (https://words.steveklabnik.com/is-webassembly-the-return-of-java-applets-flash)
    -   Propósitos parecidos, approaches distintas
    -   WebAssembly **é** Web, portanto:
        -   Core mínimo
        -   Tomada de decisão conjunta, multi-stakeholder
        -   Retrocompatibilidade e evolução planejada

## Como usar WebAssembly?

-   Que linguagens compilam?
    -   C, Rust, Lua, Go, Ruby(!), etc
-   Exemplinho

## O que muda com WebAssembly?

-   Javascript vai acabar?
    -   Eu tô te vendo, milituda anti-js! Calm down, talvez mas ainda não
-   WebAssembly é streamable (i.e. can be executed while being downloaded)
-   Que outras aplicações?

### Web

-   Bibliotecas e frameworks podem implementar partes críticas de seu código com Wasm <3
-   Polyfill de codecs:
    -   https://brionv.com/log/2019/02/17/ogv-js-experimental-av1-decoding/
    -   https://dev.to/chromiumdev/fast-gif-parsing-on-the-web-with-wasm--wuffs-48l4
    -   https://github.com/kbumsik/opus-media-recorder
    -   https://developers.google.com/web/updates/2018/08/wasm-av1
-   Bibliotecas e funcionalidades portadas pra Web:
    -   OpenCV: https://hacks.mozilla.org/2017/09/bootcamps-webassembly-and-computer-vision/
    -   Machine learning: https://github.com/Microsoft/onnxjs
-   Aplicativos pesados, tradicionalmente desktop, na Web:
    -   [AutoCAD](https://web.autocad.com): https://blogs.autodesk.com/autocad/autocad-web-app-google-io-2018/
-   Jogos!
    -   Links:
        -   https://hacks.mozilla.org/2017/07/webassembly-for-native-games-on-the-web/
        -   https://hacks.mozilla.org/2017/07/the-next-generation-of-web-gaming/
        -   https://www.wasmrocks.com/category/13/games
        -   https://hackernoon.com/games-build-on-webassembly-3679b3962a19
    -   Depende de SIMD, na roadmap
    -   Exemplos: https://www.webassemblygames.com/, https://webassembly.org/demo/Tanks/

### Node

-   Bibliotecas e frameworks podem implementar partes críticas de seu código com Wasm <3 (reborn)
-   Elimina necessidade de compilar binários no `postinstall`

### Serverless

Case de workers do Cloudflare:

-   Milhares de functions rodando no mesmo processo com V8 isolates (https://blog.cloudflare.com/cloud-computing-without-containers/)
    -   Segurança e isolamento sem custo de boot de cada processo (custo pago quando se usa containeres)
    -   Menor consumo de memória (um novo processo Node = 35MB, um novo worker ~= 3MB)

> Beautifully, if you call one Worker from another they have a decent chance of running on not just the same server, but in the same process. When one Worker calls another its data doesn't even leave user-space, even if the two Workers are owned by different people. Imagine calling a third-party API and having your request never even need to leave the process to be handled.

-   Com a spec de [Cloud Browser Architecture](https://www.w3.org/TR/cloud-browser-arch/) implementada, um Cloud Browser pode ser tudo o que você precisa para ter serverless, sem lock-in!

### Portabilidade

-   Executáveis portáveis: https://wasmer.io/
    -   um "POSIX" (PWSIX?) pra WebAssembly? https://nuxi.nl/
    -   nginx rodando com WebAssembly! https://medium.com/@syrusakbary/running-nginx-with-webassembly-6353c02c08ac
-   FPGA com WebAssembly: https://github.com/piranna/wasmachine
-   WASM no servidor: https://github.com/Xe/olin
-   WASM na JVM: https://github.com/cretz/asmble

### IoT

-   ???

### Apps desktop/nativos

-   Portabilidade da Web + performance do Wasm?

### Blockchain

-   Blockchains tem implementado suas próprias VMs pra rodar seus smart-contracts... [não mais](https://medium.com/zkcapital/webassembly-the-future-of-blockchain-computing-1a0ae28f7e40)
    -   Vai permitir usar linguagens familiares pra programar (Rust, C) ao invés das DSL (solidity, etc)

> Instead of relying on the EVM, we now have an excellent, efficient instruction set we can compile all sorts of languages into and be confident it will be equally performant and executable across different types of platforms — ideal for decentralized applications! Moreover, the WASM instruction set can be easily made deterministic by removing floating point instructions, which would make it suitable as a replacement for the EVM.

## Como começar com WebAssembly

## Conclusão
