---
layout: post
date: 2019-03-29 17:43:49
title: Bayesian statistics
categories: [math]
tags: [statistics, probability]
---

This is just a note to self.

From the famous [Bayes's theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem):

$$
P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}
$$

- $P(A\|B)$ is called the posterior probability.
- $P(B\|A)$ is called the likelihood.
- $P(A)$ is called the prior probability.
- $P(B)$ is called the marginal likelihood.

Maximum likelihood estimation is based on maximizing $\mathcal{L} = P(B\|A)$, or equivalently, minimizing $-\log \mathcal{L}$. Maximum a posteriori (MAP) estimation is based on minimizing $-\log \mathcal{P} = -\log P(A\|B)$, including the prior during the minimization.
