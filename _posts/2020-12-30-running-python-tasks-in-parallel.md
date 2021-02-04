---
layout: post
date: 2020-12-30 17:35:44
title: "Running Python tasks in parallel"
categories: [notes]
tags: [python, multithreading, multiprocessing]
---

There are many options to run Python tasks in parallel. This provides a brief description for some of the options.

- [threading](https://docs.python.org/3/library/threading.html) and [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) are part of the standard library. `threading` is used for thread-based parallelism, while `multiprocessing` is used for process-based parallelism. If your tasks involve Python objects that lock the [Global Interpreter Lock](https://en.wikipedia.org/wiki/Global_interpreter_lock) (GIL), then `threading` does not provide much parallelism, and you should opt for `multiprocessing`. On the other hand, if your tasks involve NumPy objects that release the GIL, then `threading` is a better choice. In general, `threading` has less overheads compared to `multiprocessing`.

- [concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html) is also part of the standard library. It provides a high-level interface for asynchronous parallelism (using `Future` objects). You can easily choose between a "thread" pool or a "process" pool by using [ThreadPoolExecutor](https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ThreadPoolExecutor) or [ProcessPoolExecutor](https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.ProcessPoolExecutor).
If you are running user-level codes, I believe `concurrent.futures` is usually the best option. But if you are writing more low-level codes, I believe you still want to choose between `threading` or `multiprocessing`. Note that you can still use threads from `multiprocessing` by using [multiprocessing.pool.ThreadPool](https://docs.python.org/3/library/multiprocessing.html#multiprocessing.pool.ThreadPool).

- [dask](https://docs.dask.org/) is a powerful library that helps with the common pains dealing with large data and parallel computing (e.g. [delayed](https://docs.dask.org/en/latest/delayed.html), lazy loading, array chunking, distributed computing). There are two kinds of schedulers: the single-machine [scheduler](https://docs.dask.org/en/latest/setup/single-machine.html) (default) and the more advanced [dask.distributed](https://distributed.dask.org/).
The advanced `dask.distributed` provides asynchronous parallelism similar to `concurrent.futures` and can be used on a cluster. But if you are just running codes on a single machine, the default scheduler should suffice (it requires zero setup). You can set the scheduler to "threads", "processes" or "single-threaded".
The Best Practices pages ([1](https://docs.dask.org/en/latest/best-practices.html), [2](https://docs.dask.org/en/latest/array-best-practices.html), [3](https://docs.dask.org/en/latest/delayed-best-practices.html)) contain some very useful examples.

- [joblib](https://joblib.readthedocs.io/en/latest/) is a lightweight library that also provides lazy evaluation and parallel computing. For process-based parallelism, it uses the alternative serialization library `cloudpickle` instead of `pickle`, which allows you to serialize more things.

I want to mention that Keras and Tensorflow also have built-in parallelism. So, if you are dealing with ML stuff, you should be able to use what is offered by Keras/Tensorflow (e.g. [keras.Model.fit](https://www.tensorflow.org/api_docs/python/tf/keras/Model#fit)). However, I think the documentation is kind of difficult to go through.

Simple code snippets:

``` python
def fun(x):
  return x * x

# No parallelism
result = map(fun, range(10))

# Using concurrent.futures
import concurrent.futures
with concurrent.futures.ProcessPoolExecutor(max_workers=4) as executor:
  result = executor.map(fun, range(10))

# Using multiprocessing
import multiprocessing
with multiprocessing.Pool(processes=4) as pool:
  result = pool.imap(fun, range(10))

# Using threads from multiprocessing
with multiprocessing.pool.ThreadPool(processes=4) as pool:
  result = pool.imap(fun, range(10))
```
