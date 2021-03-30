---
layout: post
date: 2021-03-29 22:07:11
title: "Graph execution in TensorFlow 2"
categories: [notes]
tags: [machine learning, neural network, tensorflow, keras]
---

TensorFlow 2 is [eager execution](https://www.tensorflow.org/guide/eager) by default. However, as a Keras user, when I do NN training and predictions, TensorFlow is actually running in graph execution mode. Basically, graph execution still offers better performance and can be easily run in parallel. Useful documentation about graph execution can be found at the following:

- [Introduction to graphs and tf.function](https://www.tensorflow.org/guide/intro_to_graphs)
- [Better performance with tf.function](https://www.tensorflow.org/guide/function)
- [AutoGraph reference](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/autograph/g3doc/reference/index.md)
  - [Limitations](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/python/autograph/g3doc/reference/limitations.md)

Although Keras uses graphs by default, it is possible to configure it to run eagerly. See [Model training APIs](https://keras.io/api/models/model_training_apis/). It is also possible to turn off `tf.function` everywhere in TensorFlow. See [tf.config.run_functions_eagerly](https://www.tensorflow.org/api_docs/python/tf/config/run_functions_eagerly).

Note that while TensorFlow 1 was also using graphs, the graphs in TensorFlow 2 are very different compared to those in TensorFlow 1. There is no longer any `session.run`, `feed_dict`, etc. See [Migrate your TensorFlow 1 code to TensorFlow 2](https://www.tensorflow.org/guide/migrate).
