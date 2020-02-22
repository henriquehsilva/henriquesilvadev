---
title:  "O operador spread e o parâmetro rest do javascript (ES6)"
date:   2019-04-02
draft: false
path: "/blog/spread-operator"
---

## O operador spread (...)

Vamos entender de qual é desses pontinhos.

O operador spread foi introduzido ao ES6.
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


## O parâmetro rest (...)

Você pode pensar no parâmetro rest como o oposto do operador spread. Assim como o spread operator permite que você expanda um array para seus elementos individuais, o parâmetro rest permite agrupar elementos em um array.

Vejamos um exemplo:

```javascript
  const person = ["Henrique Silva", 1.82, 37, "Jade", "Duda", "Snowmeau", "Milk"]
  const [name, height, age, ...nameOfYourPets] = person

  console.log(name, height, age, nameOfYourPets)
  // Henrique Silva 1.82 37 ["Jade", "Duda", "Snowmeau", "Milk"]
```

O parâmetro rest permite pegar os valores do array de pessoa e atribuí-los a várias variáveis individuais através da utilização de  destructuring. Desta forma, nome, altura e idade são atribuídos aos três primeiros valores do array, mas onde a mágica real acontece é em nome dos pets. Graças ao parâmetro rest, os nomes dos pets são atribuídos aos valores restantes do array de pessoa, na forma de um array.

```javascript
  const sum = (...numbers) => {
    let total = 0
    for (number of numbers) {
        total += number
    }    
    return total
  }

  console.log(sum(1,2,3,4))
  // 10

```

Acima podemos ver outra forma de tirar proveito do parâmetro rest, podemos passar como atribuição de uma função, desta forma indicamos que estamos passando um array de valores.
