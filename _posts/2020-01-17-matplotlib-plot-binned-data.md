---
layout: post
date: 2020-01-17 17:19:51
title: "Matplotlib: Plot binned data"
categories: [howto]
tags: [python, matplotlib]
---

In Matplotlib, you can use [hist](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.hist.html) and [hist2d](https://matplotlib.org/api/_as_gen/matplotlib.pyplot.hist2d.html) to make 1D & 2D histograms. These functions take unbinned data as input, do the binning, and then plot the histograms. (They are based on Numpy [histogram](https://docs.scipy.org/doc/numpy/reference/generated/numpy.histogram.html) and [histogram2d](https://docs.scipy.org/doc/numpy/reference/generated/numpy.histogram2d.html).) In HEP, we often work directly with binned data (i.e. histograms), but there is no available function in Matplotlib that takes histograms and plot them.

I found that the [rootpy](http://www.rootpy.org/) project has implemented methods to plot ROOT histograms using Matplotlib. For example, [this](http://www.rootpy.org/_modules/rootpy/plotting/root2matplotlib.html#hist2d) uses Matplotlib `hist2d` to plot a ROOT 2D histogram.

Based on the example, I wrote some simple functions that take binned data that exist as a Numpy array and plot it using Matplotlib `hist` or `hist2d`.

``` python
def hist_on_binned_array(hist, edges, ax=None, **kwargs):
  if ax is None:
    ax = plt.gca()
  x = (edges[1:] + edges[:-1])/2
  h, edges, patches = ax.hist(x, weights=hist, bins=edges, **kwargs)
  return h, edges, patches

def hist2d_on_binned_array(hist, xedges, yedges, colorbar=False, ax=None, **kwargs):
  if ax is None:
    ax = plt.gca()
  xdata = (xedges[1:] + xedges[:-1])/2
  ydata = (yedges[1:] + yedges[:-1])/2
  xv, yv = np.meshgrid(xdata, ydata)
  x = xv.ravel()
  y = yv.ravel()
  z = hist.T.ravel()
  h, xedges, yedges, im = ax.hist2d(x, y, weights=z, bins=(xedges, yedges), **kwargs)
  if colorbar:
    cb = ax.figure.colorbar(im, ax=ax)
  return h, xedges, yedges, im
```

