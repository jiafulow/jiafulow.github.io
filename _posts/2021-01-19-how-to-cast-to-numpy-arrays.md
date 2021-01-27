---
layout: post
date: 2021-01-19 21:59:00
title: "How to cast to NumPy arrays"
categories: [howto]
tags: [python, numpy, pandas, tensorflow]
---

This post is written for people like me who can never remember how to convert an array-like object back to a NumPy array. An array-like object refers to the following (not an exhaustive list):
- pandas: DataFrame
- tensorflow: Tensor
- h5py: Dataset
- dask: Array

### General

If you don't want to look up the answers on StackOverflow, just try: `np.array()`. There is a good chance that it will work. 

``` python
import numpy as np
import pandas as pd
df = pd.DataFrame({"A": [1, 2], "B": [3, 4]})
arr = np.array(df)
print(arr.__class__)
# <class 'numpy.ndarray'>
```

### Pandas

The recommended way to convert a `pd.DataFrame` to `np.ndarray` is [`to_numpy()`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_numpy.html).

``` python
import pandas as pd
arr = pd.DataFrame({"A": [1, 2], "B": [3, 4]}).to_numpy()
print(arr.__class__)
# <class 'numpy.ndarray'>
```

### TensorFlow

For TensorFlow v2 in the [eager](https://www.tensorflow.org/guide/eager) mode, use [`numpy()`](https://www.tensorflow.org/guide/eager) to convert a `tf.Tensor` (it must be of type `EagerTensor`).

``` python
import tensorflow as tf
x = tf.constant([[1, 2],
                 [3, 4]])
arr = x.numpy()
print(arr.__class__)
# <class 'numpy.ndarray'>
```

### h5py

You can slice a `h5py.Dataset` with an [empty tuple](https://docs.h5py.org/en/stable/high/dataset.html) (i.e. `()`) to get a `np.ndarray`. Actually, any supported slicing operations should return a `np.ndarray`.

``` python
import h5py
f = h5py.File('dummy.h5', 'w')
dset = f.create_dataset('dset', (10,10,10), 'f')
arr = dset[()]
print(arr.__class__)
# <class 'numpy.ndarray'>
arr = dset[:]
print(arr.__class__)
# <class 'numpy.ndarray'>
```

### Dask

Dask arrays are lazy. To convert it into a NumPy array, a Dask array needs to be computed via the [`compute()`](https://docs.dask.org/en/stable/user-interfaces.html#laziness-and-computing) method.

``` python
import dask
import dask.array as da
x = da.ones(10, chunks=(5,))
arr = x.compute()
print(arr.__class__)
# <class 'numpy.ndarray'>
y = da.ones(10, chunks=(5,))
arr0, arr1 = dask.compute(x, y)
print(arr0.__class__, arr1.__class__)
# <class 'numpy.ndarray'> <class 'numpy.ndarray'>
```

As a footnote, to convert a scalar `np.ndarray` back to a built-in Python object, use `item()`. For instance, `np.array([1]).item()` will return `1`.

