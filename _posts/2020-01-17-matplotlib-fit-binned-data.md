---
layout: post
date: 2020-01-17 17:54:53
title: "Matplotlib: Fit binned data"
categories: [howto]
tags: [python, matplotlib]
---

Matplotlib also does not have a function that takes histograms and fit them. The following is my simple solution to do a gaussian fit on a 1D histogram that exists as a Numpy array.

``` python
from scipy.optimize import curve_fit

def gaus(x,a,mu,sig):
  return a*np.exp(-0.5*np.square((x-mu)/sig))

def fit_gaus(hist, edges, mu=0., sig=1.):
  hist = hist.astype(np.float64)
  edges = edges.astype(np.float64)
  xdata = (edges[1:] + edges[:-1])/2
  ydata = hist
  popt, pcov = curve_fit(gaus, xdata, ydata, p0=[np.max(hist),mu,sig])
  if not np.isfinite(pcov).all():
    raise RuntimeError('Fit has failed to converge.')
  popt[2] = np.abs(popt[2]) # take absolute value of sigma
  return popt
```

