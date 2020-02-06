---
layout: post
title:  "O que são Dados Distribuídos e para que servem?"
date:   2020-02-05 16:30:09 +0900
comments: true
tags:
- [IA, Data Science, Big Data]
---

<img src="{{ site.baseurl }}/img/escola_de_ia_q3.png">

<hr />

### Dados Distribuídos

Este post é em resposta a <b>questão 3</b> da primeira aula do curso de IA da Escola Livre, se não sabe do que estou falando, dê uma olhada neste post: [https://henriquesilva.dev/2020/02/04/escola-livre-de-ia.html](https://henriquesilva.dev/2020/02/04/escola-livre-de-ia.html).

Dados distribuído são os dados armazenados em diferentes dispositivos onde nem todos os dispositivos de armazenamento estão conectados a um processador comum. Onde partes do banco de dados são armazenadas em vários locais físicos e o processamento é distribuído entre vários CPU's, [clusters ](https://pt.wikipedia.org/wiki/Cluster) de big data (Hadoop ou Spark).

#### Serve para fornecer

* <b>Escalabilidade</b> - você pode "facilmente" crescer a capacidade de atendimento adicionando novos nós de execução, isto permite atender grandes demandas no prazo estabelecido. Ao contrário do que as pessoas acham, não fica mais rápido. Você ter mais caminhões transportando uma caraga não entrega a carga mais rapidamente, apenas entrega mais carga no mesmo prazo.

* <b>Resiliência</b> - se um nó tiver problemas os outros continuam operando e o sistema como um todo não para.

Todas as demais vantagens são derivadas destas ou sem muita importância.

### Referências:

* Trecho da Aula [22:30]: [https://youtu.be/5Da7k5tNbQY?t=1350](https://youtu.be/5Da7k5tNbQY?t=1350).
* Slide 6 ao 12 do material de aula: [https://github.com/escolalivre-ia/aulas](https://github.com/escolalivre-ia/aulas)
* Apache Hadoop [https://hadoop.apache.org/](https://hadoop.apache.org/)

<hr />
#### <b>[Apoie a Escola Livre de IA](https://apoia.se/escolalivre-ia)</b> 






