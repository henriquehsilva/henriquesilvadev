---
layout: post
title:  "Ciclo de vida dos componentes em React"
date:   2019-04-03 1:30:09 +0900
comments: true
tags:
- [react]
---

<img src="{{ site.baseurl }}/img/lifecycle-react-bg.png">

Os **eventos de ciclo de vida do componente são métodos especiais** disponibilizados pelo React que nos permitem executar código em diferentes momentos da vida de um componente.
Existe diferentes eventos de ciclo de vida do componente, e cada um é executado em um momento diferente, mas podemos separá-los em:

### Eventos de Adição ao DOM
Estes eventos são chamados quando um componente está sendo adicionado ao DOM:

* constructor( )
* componentWillMount( )
* render( )
* componentDidMount( )

### Eventos de Nova Renderização
Estes eventos são chamados quando um componente é atualizado (renderizado novamente) no DOM:

* componentWillReceiveProps( )
* shouldComponentUpdate()
* componentWillUpdate( )
* render( )
* componentDidUpdate( )

## Eventos de Remoção do DOM
Este evento é chamado quando um componente está sendo removido do DOM:

* componentWillUnmount( )

Vamos ver como isso se dá olhando o gráfico abaixo:


<img src="{{ site.baseurl }}/img/lifecycle-react-diagram.png">


Tudo começa quando o ReactDOM renderiza o componente.

Como você pode ver, existem outros eventos de ciclo de vida do componente além dos contidos neste gráfico, porém, os mais utilizados são:
> componentDidMount(), componentWillMount(), componentWillUnmount(), e componentWillReceiveProps().

### Saiba mais

Na documentação do React, [Ciclo de vida dos componentes](https://pt-br.reactjs.org/docs/state-and-lifecycle.html#___gatsby)
