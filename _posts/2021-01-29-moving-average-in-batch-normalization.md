---
layout: post
date: 2021-01-29 18:01:39
title: "Moving average in Batch Normalization"
categories: [math]
tags: [machine learning, neural network, tensorflow]
---

In TensorFlow/Keras Batch Normalization, the [exponential moving average](https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average) of the population mean and variance are [calculated as follows](https://www.tensorflow.org/api_docs/python/tf/keras/layers/BatchNormalization):

``` python
moving_mean = moving_mean * momentum + batch_mean * (1 - momentum)
moving_var = moving_var * momentum + batch_var * (1 - momentum)
```

where `momentum` is a number close to 1 (default is 0.99). In the actual code, the moving average are updated in a more efficient way:

``` python
moving_mean -= (moving_mean - batch_mean) * (1 - momentum)
moving_var -= (moving_var - batch_var) * (1 - momentum)
```

They are equivalent as shown below ($\mu$ is the moving mean, $\mu_{B}$ is the batch mean, $\alpha$ is the momentum):

$$
\begin{align}
\mu &= \alpha\mu + (1 - \alpha) \mu_{B} \\
 &= \mu - (1 - \alpha) \mu + (1 - \alpha) \mu_{B} \\
 &= \mu - (1 - \alpha) (\mu - \mu_{B})
\end{align}
$$

Hence, the moving average will decay by the difference between the existing value and the new value, multiplied with a decay factor of (1 - momentum). A lower value of momentum means that older values are forgotten sooner. This results in a faster-changing moving average.
