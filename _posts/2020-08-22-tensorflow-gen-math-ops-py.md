---
layout: post
date: 2020-08-22 12:46:20
title: TensorFlow gen_math_ops.py
categories: [tips]
tags: [python, tensorflow]
---

If you happen to look into the TensorFlow source codes, you might find functions that belong to `gen_math_ops` which is imported via:

``` python
from tensorflow.python.ops import gen_math_ops
```

But `gen_math_ops.py` does not actually exist in the TensorFlow GitHub [repo](https://github.com/tensorflow/tensorflow/blob/v2.3.0/tensorflow/python/ops/). This is because `gen_math_ops.py` (or `gen_nn_ops.py` etc) is generated automatically, thus not included in the repo. But in your local installation, you may find it in `<tensorflow-path>/python/ops/gen_math_ops.py`, where `<tensorflow-path>` is the path of `tensorflow.__file__`. The functions in this automatically generated python code are usually wrappers of the corresponding C++ functions. So if you are interested in understanding how the functions are coded, you won't find anything useful in here, but must go look at the corresponding C++ functions.
