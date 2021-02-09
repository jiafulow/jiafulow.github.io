---
layout: post
date: 2020-01-25 11:10:29
title: "Jupyter notebook magic commands"
categories: [tips]
tags: [python, jupyter]
---

A full list of IPython built-in magic commands can be found [here](https://ipython.readthedocs.io/en/stable/interactive/magics.html). Line magics are prefixed with a single % character and apply to a single line, whereas cell magics are prefixed with %% character and apply to the entire cell. These are the ones that I always use.

- Use the inline backend for matplotlib.

``` python
import matplotlib.pyplot as plt
%matplotlib inline
```

- Automatically reload modules before executing code.

``` python
%load_ext autoreload
%autoreload 2
```

- Print elapsed time.
  - Note: this is different from `%timeit` which calls the [timeit](https://docs.python.org/3/library/timeit.html) module.

``` python
%time
```
