---
title: "Uma introdução a MobX"
description: "Apresentando os principais conceitos da biblioteca de gerenciamento de estado para aplicativos web"
customTags: ["Técnico", "MobX"]
date: 2018-04-25
---

O [MobX](https://github.com/mobxjs/mobx/) é uma biblioteca de gerenciamento de estado para Javascript frequentemente utilizada com React. Ela tem uma curva de aprendizado menos abrupta do que a sua alternativa mais popular, o [Redux](https://redux.js.org/), apesar de (de acordo com minha experiência na [Cubos](https://cubos.io/)) más práticas emergirem com mais frequência com seu uso. Nesse artigo, usaremos alguns exemplos de código em [Typescript](https://typescriptlang.org/) para explicar os principais conceitos, boas práticas e alguns gotchas.

## O que é MobX

O MobX aplica conceitos de [programação funcional reativa](https://en.wikipedia.org/wiki/Functional_reactive_programming) em Javascript de forma transparente, escondendo detalhes complexos de implementação por trás de objetos Javascript puros. Tirando o jargão, isso significa que ele permite que partes de sua aplicação sejam notificadas de mudanças de estado sem mudar o paradigma de programação do seu projeto. Para determinar o que é observado e por quem, a biblioteca se utiliza de dois conceitos de base: observáveis e reações.

### Observáveis e reações

Observáveis são porções de estado (variáveis, listas, objetos, campos de uma classe, etc) que notificam ouvintes (as reações) quando há mudanças. Observáveis são, em geral, definidos usando a função `observable`, exportada pelo módulo `mobx`. Há várias maneiras de declarar reações, uma delas sendo usar a função `autorun`. Segue exemplo:

```tsx
import { observable, autorun } from "mobx";

const lista = observable([1, 2, 3]);

autorun(() => {
	const soma = lista.reduce((acc, el) => acc + el, 0);
	console.log(soma);
});
// printa 6

lista.push(4);
// printa 10
```

Eis o que a biblioteca faz, por debaixo dos panos: roda a função passada para `autorun` uma vez, registra todos os observáveis utilizados dentro da função e a executa todas as vezes que algum desses observáveis mudar. O uso acima mostrado de observáveis é, apesar de possível, raro na prática. Com frequência, usamos classes que contém campos observáveis. Segue um exemplo mais próximo do uso prático:

```tsx
class TaskStore {
	@observable
	public tasks: Task[];

	constructor() {
		try {
			this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
		} catch {
			this.tasks = [];
		}

		autorun(() => localStorage.setItem("tasks", JSON.stringify(this.tasks)));
	}
}
```

O exemplo acima ilustra um dos usos mais frequentes de `autorun` na prática: persistir estado. Além disso, usa-se `observable` como um decorador, o que só é possível dentro de classes.

> _Observáveis_: valores a que reações podem se inscrever para ser notificadas de mudanças

> _Reações_: ações a serem executadas sempre que determinados observáveis mudarem

### Valores derivados

Até agora, nós discutimos observáveis e reações. No entanto, reagir a mudanças no estado nem sempre é suficiente: por vezes, precisamos usar uma parte do estado para calcular outra. Por exemplo:

```tsx
import { observable } from "mobx";

interface ExamResult {
	student: string;
	grade: number;
}

class ExamStore {
	@observable
	public results: ExamResult[] = [];

	public averageGrade() {
		return this.results.reduce((acc, el) => acc + el, 0) / this.results.length;
	}
}

const store = new ExamStore();
store.results.push({ student: "Victor", grade: 7 });
store.results.push({ student: "Clara", grade: 8 });
store.results.push({ student: "Dygufa", grade: 9 });

console.log(store.averageGrade());
document.querySelector("avg").innerText = `Média da turma: ${store.averageGrade()}`;
```

Nesse exemplo, `averageGrade` é chamado duas vezes, recalculando a média desnecessariamente. Isso poderia ser otimizado, já que enquanto `results` não mudar, a média permanecerá a mesma (para quem é familiar com Redux, nesse contexto se usariam seletores). E é justamente para isso que serve o `computed`, mais uma função da biblioteca. O exemplo acima ficaria assim, quando reescrito para utilizar `computed`:

```tsx
import { observable, computed } from "mobx";

interface ExamResult {
	student: string;
	grade: number;
}

class ExamStore {
	@observable
	public results: ExamResult[] = [];

	@computed
	public get averageGrade() {
		return this.results.reduce((acc, el) => acc + el, 0) / this.results.length;
	}
}

const store = new ExamStore();
store.results.push({ student: "Victor", grade: 7 });
store.results.push({ student: "Clara", grade: 8 });
store.results.push({ student: "Dygufa", grade: 9 });

console.log(store.averageGrade);
document.querySelector("avg").innerText = `Média da turma: ${store.averageGrade}`;
```

As mudanças foram:

1. O decorador `@computed` foi adicionado ao método `averageGrade`
2. O método foi convertido em getter - isso é um requisito para usar `computed`
3. Por ser um getter, `averageGrade` passa a ser utilizado como um campo, não um método (e por isso não é mais chamado)

Com essas 3 mudanças, o MobX otimiza o cálculo da média, fazendo-o apenas quando necessário. Além disso, `averageGrade` também é um observável, o que permite que reações se inscrevam a ele e reajam a mudanças.

> _Valores derivados_: observáveis derivados a partir de outros observáveis que são automaticamente re-calculados sempre que os observáveis de que depende mudam

> _Dica_: sempre que possível, use `computed` para derivar informações a partir do estado: isso evita que computações custosas se repitam desnecessariamente

### Observadores

Antes de introduzir outros conceitos de MobX, gostaria de tornar nossos exemplos mais práticos, usando o MobX em uma aplicação React:

<iframe
	src="https://codesandbox.io/embed/vq3p417997?fontsize=12"
	style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
	sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>

Observação: O exemplo acima é editável, dá pra abrir ele no [CodeSandbox](https://codesandbox.io/), fazer mudanças e ver o resultado em tempo real (dá pra experimentar colocar um `console.log` no `computed` `todoCount`, por exemplo, pra verificar se ele de fato só é chamado quando há mudanças)

Nessa aplicação, usamos todos os conceitos que já vimos: observáveis, valores derivados e reações. Usamos também uma biblioteca nova, a `mobx-react`: nela são expostas funções que facilitam a integração de `mobx`, que pode ser usado com qualquer biblioteca de UI, com React. Uma dessas funções é a `observer`, cuja função é criar uma _reação_ que assiste às mudanças em _observáveis_ utilizados dentro de render e, a cada mudança, re-renderizam o componente. Conforme visto no exemplo, é possível usar `observer` tanto como decorador de classe (como em `App`, no exemplo) quanto como higher-order function (com componentes funcionais, como em `Task`).

> _`observer`_: função que torna a re-renderização de um componente uma reação às mudanças de estado

### Ações

Conforme citado anteriormente, o MobX é extremamente flexível - e a subsequente falta de padrões e boas práticas pode ter consequências negativas. O fato de que o estado é mutável leva com frequência desenvolvedores a mudá-lo diretamente nos componentes que o utilizam, espalhando a lógica de negócio por inúmeros arquivos, gerando dívida técnica e dificultando a manutenção. Outro _anti-pattern_ comum é assumir que se está recebendo um `observable` como propriedade e modificá-lo diretamente, possivelmente introduzindo bugs sutis e difíceis de identificar caso a propriedade não seja observável.

Pensando nisso, o `mobx` introduz o conceito de `action`: funções que modificam o estado. Seu uso traz alguns benefícios:

1. Reações só são notificadas de mudanças de estado no fim da action, prevenindo a criação de vários passos intermediários e atualização desnecessária da UI em cada etapa
2. Melhor integração com as ferramentas de debugging do MobX
3. Se seu uso for difundido, é fácil saber onde mudanças de estado ocorrem

A seguir, o exemplo anterior, reescrito para usar actions:

<iframe
	src="https://codesandbox.io/embed/31ozyr4nv1?fontsize=12"
	style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
	sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>

Como se pode ver, `action` pode ser usado como decorador e como higher-order function, assim como `observer`. Outra novidade é o `configure({ enforceActions: true })`: essa configuração faz o MobX disparar um erro sempre que um estado for mudado de fora de uma `action`.

> _Dica_: experimente tirar um `@action` e utilizar a UI para ver o erro sendo disparado

Uma ressalva: `action` não funciona bem com funções assíncronas, devido à forma como elas são transpiladas para ES5:

```tsx
configure({ enforceActions: true });

class AsyncStore {
    @observable
    public isLoading = false;

    @action
    public async loadStuff = () => {
        this.isLoading = true;
        // funciona normalmente
        await makeRequest();
        this.isLoading = false;
        // dispara erro acusando mudança de estado fora de actions
    })
}
```

A solução oficial para esse problema é uma nova função chamada `flow`, sobre a qual se pode ler na [documentação](https://mobx.js.org/best/actions.html). Infelizmente, ela não funciona bem com Typescript e, por isso, não é usada na Cubos.

> _Ação_: Toda função que modifica estado é uma ação. Preferencialmente, todas elas devem ser marcadas como ações usando a função `action`

> _Modo estrito_: Modo em que mudanças de estado fora de uma action disparam erro (`configure({ enforceActions: true })`)

> _Gotcha_: Ações assíncronas exigem adaptações para não disparar erros no modo estrito após o uso de `await`. Recomenda-se evitar o uso ou substituir `action` por `flow`

### Estado global

No começo desse artigo, o MobX foi citado como alternativa para o Redux. No entanto, até agora, só usamos o MobX para gerenciar estado local, enquanto seu concorrente é comumente utilizado para gerenciar o estado global da aplicação. Para fazer o mesmo com a biblioteca em questão, usaremos a função `inject` e o componente `Provider` (similares ao `connect` e ao `Provider` do `react-redux`, respectivamente), ambos de `mobx-react`. Segue exemplo:

<iframe
	src="https://codesandbox.io/embed/7wz19ylm1?fontsize=12"
	style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
	sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
/>

O Provider é um componente que recebe um objeto cujas chaves são os nomes das stores e cujos valores são as stores (exemplo: `{ taskStore: new TaskStore() }`, onde 'taskStore' é o nome da store `new TaskStore()`). Ele deve estar sempre no topo da hierarquia, acima de qualquer componente que possa usar o estado global. O Provider disponibiliza as stores para todos os componentes abaixo dele através de [contexto](https://reactjs.org/docs/context.html).

Já o `inject` é uma função que recebe uma quantidade qualquer de nomes de store e é responsável por se comunicar com o contexto e disponibilizar as stores como propriedades para o componente em que ela é aplicada.

> _Dica_: o `inject` sempre deve vir antes do `observer`

Essa arquitetura favorece boas práticas, separando lógica de negócio de lógica de UI, e é uma excelente opção para projetos maiores, em que um estado é utilizado em pontos muito diferentes da aplicação.

### Algumas coisas mais

#### toJS

Em geral, o comportamento de valores observáveis é idêntico ao comportamento padrão. Porém, há exceções (exemplo: Array e ObservableArray tem comportamentos diferentes em alguns casos) e, caso se encontre bugs obscuros ou se esteja passando observáveis para bibliotecas de terceiros, é recomendável usar a função `toJS` de `mobx` para se obter um valor não alterado pelo MobX.

#### Mapas observáveis

Somente as propriedades já presentes em um objeto no momento de sua instanciação serão observáveis:

```tsx
class BuggyStore {
    @observable statusByClient: { [clientId: string]: string } = { nicolas: "Pending" };

    autorun(() => console.log("statusByClient foi modificado", this.statusByClient));
}

const store = new BuggyStore();
store.statusByClient.nicolas = "Done";
// o campo 'nicolas' é observável, então autorun roda e a mensagem é printada
store.statusByClient.victor = "Done";
// o campo 'victor' não é observável, então autorun não roda e a mensagem não é printada
```

Nesse caso, recomenda-se utilizar mapas observáveis:

```tsx
import { observable, autorun } from "mobx";

class BuggyStore {
    @observable statusByClient: Map<string, string> = new Map([["nicolas", "Pending"]]);

    autorun(() => console.log("statusByClient foi modificado", this.statusByClient));
}

const store = new BuggyStore();
store.statusByClient.set("nicolas", "Done");
store.statusByClient.set("victor", "Done");
// o autorun roda nos dois casos! :)
```

### Prós e contras

#### Porque usar MobX

Principais prós:

-   Boilerplate mínimo ou ausente
-   Re-renderização é automaticamente otimizada de forma granular, só sendo causada por mudanças de observáveis recentemente utilizados no `render` de cada componente
-   Tendo sido feita em Typescript, ela trabalha muito bem com tipos (algo muito difícil de fazer e custoso de manter com Redux)

Principais contras:

-   Boa parte da funcionalidade da biblioteca é abstraída e invisível para o desenvolvedor (vulgo mágica), o que pode tornar debugar difícil
-   Flexível demais: boas práticas precisam ser ativamente estimuladas pela equipe de desenvolvimento (enquanto em Redux as boas práticas são forçadas pela arquitetura)

#### Porque não usamos Redux

Os principais problemas que encontramos com Redux foram:

-   Muito, muito boilerplate
-   Tipar o payload recebido por reducers das actions era extremamente custoso e difícil de manter (específico para quem usa Typescript, Flow ou similares)
-   Seletores são uma adição, ao invés de estar no cerne do paradigma

### Conclusão

Como vimos, MobX é uma poderosa e biblioteca simples de usar. Com poucas linhas de código e sem introduzir grandes mudanças no estilo ou paradigma de programação, seu projeto pode fazer uso de um gerenciamento de estado simples e ter otimizações de performance automáticas, sem esforço.
