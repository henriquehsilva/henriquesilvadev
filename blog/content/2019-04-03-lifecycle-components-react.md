---
title:  "Ciclo de vida dos componentes em React"
date:   2019-04-03
draft: false
path: "/blog/components-live-cycle"
---

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


![](https://storage.cloud.google.com/enduring-tea-269022.appspot.com/blog/lifecycle-react-diagram.png)


Tudo começa quando o ReactDOM renderiza o componente.

Como você pode ver, existem outros eventos de ciclo de vida do componente além dos contidos neste gráfico, porém, os mais utilizados são:

* componentDidMount() 
* componentWillMount() 
* componentWillUnmount() 
* componentWillReceiveProps()

### Saiba mais

Na documentação do React, [Ciclo de vida dos componentes](https://pt-br.reactjs.org/docs/state-and-lifecycle.html#___gatsby)
