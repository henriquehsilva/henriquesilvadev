---
layout: post
title:  "Introdução a Data Science"
date:   2019-03-13 1:30:09 +0900
comments: true
tags:
- datascience
---

## Afinal o que é Data Science?

A ciência de dados é um campo multidisciplinar onde os envolvidos no processo buscam extrair conhecimento e insights de dados, que utiliza métodos, processos, algoritmos e sistemas científicos metemáticos.
Vem ganhando cada vez mais popularidade, já a algum tempo as empresas descobriram o valor no grande volume de dados sendo gerados a todo momento de forma expodêncial, um verdadeiro tesouro, só esperando mara ser minerado.

<img src="https://media.giphy.com/media/8UHerDqCSzSR3rxPEZ/giphy.gif">

Vamos entender agora o que foi colocado acima:

#### Primeiro - O que quer dizer se tratar de um campo multidisciplinar?

O cientista de dados é o cerne de três universos de conhecimento, Ciencia da Computação, Dominio do Negocio e Conhecimento Matematico e Estatistico.

<img src="https://goo.gl/jq67PA">
###### [fonte: https://www.datanami.com/2018/09/17/improving-your-odds-with-data-science-hiring/]


In order to plot the data, we need to import libraries for dataframe and plot, also set plot inline if you're  using a notebook.
```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
%matplotlib inline
```

## plot stock price
Code is super simple, you just need to set the index of the dataframe to timestamp. If you find the figure to small, use pylab to set the figure size.
```python
from pylab import rcParams
rcParams['figure.figsize'] = 50,13
apple_data = market_train_df[market_train_df['assetCode'] == 'AAPL.O']
apple_data.set_index('time')['close'].plot(grid = True)
```
<img src="/img/python-plot-financial-data-1.png" style="height:50%">

## compare multiple plots
Then I'm trying to sanitize the data by looking at the figure it self, I want to plot all suspicious assets.
```python
for code in suspicious_asset_code:
    apple_data = market_train_df[market_train_df['assetCode'] == code]
    apple_data.set_index('time')['close'].plot(grid = True)
```
<img src="/img/python-financial-plot-2.png" style="height:50%">

This only gives me one figure with all assets, it's ugly. I want to plot them one by one.

Subplot will give you figures put up together, use
```python
# treat the whole figure as a grid, specify how many rows and columns you wanna plot and the index of the current sub plot
fig.add_subplot(row, columns, index)
```
Then you'll get graphs all together to detect abnormal data.
<img src="/img/python-plot-subplot.png" style="height:50%">
