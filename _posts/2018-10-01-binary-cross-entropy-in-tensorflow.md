---
layout: post
date: 2018-10-01 14:42:16
title: Binary Cross Entropy in Tensorflow
categories: [math]
tags: [machine learning, neural network]
---

In Tensorflow, the binary cross entropy loss function is implemented in a way to ensure stability and avoid overflow. The formulation can be found in [the official doc](https://www.tensorflow.org/api_docs/python/tf/nn/sigmoid_cross_entropy_with_logits). But it's not very easy to follow when it's written in pseudo-code. So I decided to type it in TeX (replacing the notation $z$ by $y$).

The logistic loss is

$$
  \begin{align*}
    \mathcal{L} &= - y \log(p) - (1 - y) \log(1-p) \\
                &= - y \log(\operatorname{sigmoid}(x)) - (1 - y) \log(1-\operatorname{sigmoid}(x)) \\
                &= - y \log \left(\frac{1}{1+e^{-x}} \right) - (1 - y) \log \left(1-\frac{1}{1+e^{-x}} \right) \\
                &= - y \log \left(\frac{1}{1+e^{-x}} \right) - (1 - y) \log \left(\frac{e^{-x}}{1+e^{-x}} \right) \\
                &= y \log({1+e^{-x}}) + (1 - y)\left[- \log(e^{-x}) + \log({1+e^{-x}}) \right] \\
                &= y \log({1+e^{-x}}) + (1 - y)\left[x + \log({1+e^{-x}}) \right] \\
                &= (1 - y)(x) + \log({1+e^{-x}}) \\
                &= x - x \times y + \log({1+e^{-x}})
  \end{align*}
$$

For $x < 0$, to avoid overflow in $e^{-x}$, we reformulate the above

$$
  \begin{align*}
  \mathcal{L} &= x - x \times y + \log({1+e^{-x}}) \\
              &= \log(e^{x}) - x \times y + \log({1+e^{-x}}) \\
              &= - x \times y + \log(e^{x} \times ({1+e^{-x}})) \\
              &= - x \times y + \log(1 + e^{x})
  \end{align*}
$$

Hence, to ensure stability and avoid overflow, the implementation uses this equivalent formulation

$$
  \begin{align*}
  \mathcal{L} &= \max(x,0) - x \times y + \log({1+e^{-|x|}})  \\
              &= \operatorname{ReLU(x)} - x \times y + \log({1+e^{-|x|}})
  \end{align*}
$$

(To be more clear, the last formulation is used to combine $x - x \times y + \log({1+e^{-x}})$ when $x \geq 0$ and $- x \times y + \log(1 + e^{x})$ when $x < 0$).


