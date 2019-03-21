---
layout: post
title:  "React e seu modelo composicional"
date:   2019-03-13 1:30:09 +0900
comments: true
tags:
- react
---

## Vamos entender primeiro o que é composição.

Segundo o [Wikipedia](https://en.wikipedia.org/wiki/Function_composition_(computer_science)) , composição é

> Ato de combinar funções simples para construir outras mais complexas.

<iframe src="https://giphy.com/embed/RIWR3fxTcLys7jnKSW" width="480" height="272" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/people-business-join-RIWR3fxTcLys7jnKSW">via GIPHY</a></p>


Uma das melhores coisas  no React é que se pode utilizar sua intuição na orquestração das funções, afim de criar seus componentes.
Ao invés da função pegar argumentos e devolver valores, ela pegará argumentos e devolverá UI.

Sendo composição construir a partir de funções simples. Vejamos um exemplo:

```javascript
  function getBio(hashcode) {
    return 'https://pt.gravatar.com' + hashcode
  }

```

```javascript
  function getAvatar(hashcode) {
    return 'https://pt.gravatar.com/avatar/' + hashcode
  }

```

Essas são, definitivamente, funções simples. Por isso, para compô-las, apenas as combinamos dentro de uma outra função:


```javascript
  function getProfile(hashcode) {
    return {
        bio: getBio(hashcode),
        avatar: getAvatar(hashcode)
    }
  }

```

O React faz uso profundo do poder da composição, para construir peças de uma UI utilizando ***componentes***

Aqui temos três **componentes** distintos:

```html
  <Page />
  <Article />
  <Sidebar />
```

Agora podemos compor um componente mais complexo, utilizando estes componentes simples:

```html
  <Page>
    <Article />
    <Sidebar />
  </Page>  
```

A composição ocorre quando funções simples são combinadas para criar outras funções mais complexas.
Cada função sendo um bloco único que faz apenas uma coisa ***(DOT - "does one thing")***, quando utilizamos estas funções simples para formar outras funções mais complexas, chamamos de ***composição***.
