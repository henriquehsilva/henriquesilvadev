---
title:  "Funções Puras em Javascript"
date:   2019-04-22
draft: false
path: "/blog/pure-functions-js"
---

### Funções Puras em Javascript

Funções puras (pure functions) por definição, são Funções que:

- Retornam o mesmo resultado se os mesmos argumentos são passados
- Dependem somente do argumento passado a elas
- Não produzem efeitos colaterais

Vamos conferir um exemplo de função pura, a square:

```javascript
// `square` is a pure function

const square = x => x * x;

```

A square é uma função pura porque gera o mesmo valor todas as vezes, desde que receba o mesmo argumento. Não há dependência se os valores produzirem aquele resultado, e podemos esperar seguramente que apenas aquele resultado seja retornado -- sem efeitos colaterais.

### Sem efeitos colaterais

Um dos requisitos das funções puras é que elas não produzem **efeitos colaterais**. Efeitos colaterais são interações entre uma função e o mundo fora dela. Isso inclui:

- Fazer chamadas HTTP
- Alterar o estado externo
- Recuperar o estado do dia
- Math.random()
- Enviar uma mensagem ao console
- Adicionar algo a um banco de dados

Funções puras são elementos essenciais da programação funcional. Além de evitar mutações dos dados e efeitos colaterais, elas se adaptam muito bem à ideia de composição. Como?

Para algumas pessoas, as funções puras são inerentemente modulares, o que faz com que elas sejam fáceis de se testar. Como as funções puras sempre produzem o mesmo resultado se receberem os mesmos argumentos, você não precisa se preocupar com a probabilidade de outras partes do aplicativo afetarem os dados gerados. Durante a realização do debugging e a inspeção, isso dá pontos de controle adicionais e bem definidos ao seu aplicativo.

Além disso, funções puras também fazem com que manter o código seja muito mais simples. Lembre-se de que as funções puras não produzem efeitos colaterais. Isso significa que, conforme você refatora seu aplicativo, mudanças a uma função pura não terão efeitos colaterais no mundo fora dele.

Embora o uso de funções puras em aplicativos traga muitos benefícios, você ainda pode ter tanto funções puras como impuras nos aplicativos que constrói. Usar funções impuras não é necessariamente uma “programação ruim”. Por exemplo, um botão com um event handler que atualiza o DOM não seria um bom caso de uso de funções puras, porque o event handler está atualizando o DOM (ou seja, produzindo um efeito colateral!). As funções puras se prestam a um código de melhor qualidade, e ter isso em mente ao construir os aplicativos fará de você um programador mais capaz.