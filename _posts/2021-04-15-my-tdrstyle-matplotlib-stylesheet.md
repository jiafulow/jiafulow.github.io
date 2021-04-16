---
layout: post
date: 2021-04-15 19:12:07
title: My TDRStyle Matplotlib stylesheet
categories: [codes]
tags: [python, matplotlib, plotting]
---

I wanted to make plots that are visually similar to the so-called CMS [TDRStyle](https://twiki.cern.ch/twiki/bin/viewauth/CMS/Internal/FigGuidelines), but using Matplotlib instead. So I created a custom [stylesheet](https://matplotlib.org/stable/tutorials/introductory/customizing.html) (best used with `matplotlib>=3.0`).
Note that it is not meant to be 100% identical, as I find that Matplotlib plots look better in certain aspects and I'd rather not change it for the sake of emulating the TDRStyle.

I named the stylesheet `tdrstyle.mplstyle`. To use it, simply drop it in the same directory as your plotting script/notebook, then apply it:

``` python
import matplotlib.pyplot as plt

# Use the stylesheet globally
plt.style.use('tdrstyle.mplstyle')

# Use the stylesheet locally
with plt.style.context('tdrstyle.mplstyle'):
  plt.plot(...)
```

The stylesheet (`tdrstyle.mplstyle`):

```
### Based on built-in stylesheets: ['seaborn-white', 'seaborn-paper']

# Seaborn common parameters
# .15 = dark_gray
# .8 = light_gray
figure.facecolor: white
text.color: .15
axes.labelcolor: .15
legend.frameon: False
legend.numpoints: 1
legend.scatterpoints: 1
#xtick.direction: out
#ytick.direction: out
xtick.color: .15
ytick.color: .15
#axes.axisbelow: True
#image.cmap: Greys
font.family: sans-serif
#font.sans-serif: Arial, Liberation Sans, DejaVu Sans, Bitstream Vera Sans, sans-serif
#grid.linestyle: -
lines.solid_capstyle: round

# Seaborn whitegrid parameters
axes.grid: True
axes.facecolor: white
#axes.edgecolor: .8
#axes.linewidth: 1
#grid.color: .8
#xtick.major.size: 0
#ytick.major.size: 0
#xtick.minor.size: 0
#ytick.minor.size: 0

# Seaborn paper context
#figure.figsize: 6.4, 4.4
#axes.labelsize: 8.8
#axes.titlesize: 9.6
#xtick.labelsize: 8
#ytick.labelsize: 8
#legend.fontsize: 8

grid.linewidth: 0.8
lines.linewidth: 1.4
patch.linewidth: 0.24
lines.markersize: 5.6
lines.markeredgewidth: 0

xtick.major.width: 0.8
ytick.major.width: 0.8
xtick.minor.width: 0.4
ytick.minor.width: 0.4

xtick.major.pad: 5.6
ytick.major.pad: 5.6



### Make my modifications
### See: https://matplotlib.org/users/customizing.html#the-matplotlibrc-file for all the configuration options

### FIGURE
figure.figsize : 4.2, 4.2
figure.dpi : 150
savefig.dpi : 150
figure.titleweight : 500

### IMAGES
image.cmap : viridis

### FONT
font.size : 11
font.sans-serif : Helvetica, Arial, Liberation Sans, DejaVu Sans, Bitstream Vera Sans, sans-serif

### AXES
axes.labelsize : medium
axes.titlesize : medium
axes.labelweight : 500
axes.axisbelow : False
axes.edgecolor: .15
axes.linewidth: 1.25
#axes.autolimit_mode : round_numbers
#axes.xmargin : 0
#axes.ymargin : 0

### LINES
#lines.linewidth : 2
#lines.markersize : 10

### TICKS
xtick.direction : in
ytick.direction : in
xtick.labelsize : small
ytick.labelsize : small
xtick.major.size : 6.0
ytick.major.size : 6.0
xtick.minor.size : 3.0
ytick.minor.size : 3.0
xtick.minor.visible : True
ytick.minor.visible : True
xtick.bottom : True
xtick.top : True
ytick.left : True
ytick.right : True

### LEGEND
legend.fontsize : medium
legend.title_fontsize : medium

### GRID
grid.color : .15
grid.linestyle : :
grid.alpha : 0.6

### ERRORBAR PLOTS
errorbar.capsize : 0
```
