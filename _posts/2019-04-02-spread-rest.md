---
layout: post
title:  "O spread operator e rest parameter no javascript (ES6)"
date:   2019-04-02 1:30:09 +0900
comments: true
tags:
- [javascript]
---

<img src="{{ site.baseurl }}/img/js-spread-rest-bg.png">

## O spread operator (...)

Vamos entender de qual é desses pontinhos.

<iframe src="https://giphy.com/embed/3o6fJ66RKYXJbkQ1RC" width="480" height="304" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hello-hi-dots-3o6fJ66RKYXJbkQ1RC">via GIPHY</a></p>

O spread operator foi introduzido ao ES6.
Tendo a abilidade de expandir objetos interaveis, retornando seus multiplos elementos.

Vamos ver alguns exemplos:

```javascript
  const fruits = ['Maça', 'Pera', 'Laranja', 'Banana']
  console.log(...fruits)
  // Maça Pera Laranja Banana
```

```javascript
  const numbers = new Set([1, 4, 5, 7])
  console.log(...numbers)
  // 1 4 5 7
```

O uso mais comum do spread é provavelmente a combinação de matrizes. Se você já teve que fazer isso antes do ES6, provavelmente usou o método concat ().

Caso quiséssemos combinar os dois conjustos de dados acima, teriamos que fazer assim:

```javascript
  const fruitsAndNumbers = fruits.concat(numbers)
  console.log(fruitsAndNumbers);
  // ["Maça", "Pera", "Laranja", "Banana", Set(4)]
```

Já utilizando spread basta fazer assim:

```javascript
  const fruitsAndNumbers = [...fruits, ...numbers]
  console.log(fruitsAndNumbers);
  // ["Maça", "Pera", "Laranja", "Banana", 1, 4, 5, 7]
```

> É possível perceber no retorno que o spread decompõe os elementos de Set().
