---
layout: post
date: 2018-07-10 11:11:21
title: Install Tensorflow with GPU support on Red Hat Linux
categories: [howto]
tags: [linux, redhat, machine learning, tensorflow, python, conda, GPU]
---

I had the chance to play with [Tensorflow](https://www.tensorflow.org/), a high performance machine learning framework/library originally developed by Google. These are my installation notes.

I am working on the system with Red Hat Linux

``` sh
cat /etc/redhat-release
# Output: Red Hat Enterprise Linux Server release 7.4 (Maipo)
```

The easiest option to install Tensorflow seems to be using [Anaconda](https://docs.anaconda.com/anaconda/install/linux). I used the more lightweight version of Anaconda called [Miniconda](https://conda.io/miniconda.html). To download and install Miniconda 3:

``` sh
wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
sh Miniconda3-latest-Linux-x86_64.sh
```

Accept the license, enter your preferred install location, then say 'yes' to prepend the install location to your `$PATH` environment variable.

Once `conda` has been installed, now it's time to install Tensorflow. The instructions come from this [Tensorflow page](https://www.tensorflow.org/install/install_linux#InstallingAnaconda), but adapted a little bit for my purpose. I just downloaded the `tensorflow-gpu` package that is [provided by Anaconda](https://anaconda.org/anaconda/tensorflow-gpu).

``` sh
conda update conda
conda create -n tensorflow_conda pip python=2.7
source activate tensorflow_conda
conda install -c anaconda cudatoolkit=9.0
conda install -c anaconda tensorflow-gpu
```

To validate the installation, try the following in python:

``` python
import tensorflow as tf
print(tf.__version__)
# Output: 1.8.0
hello = tf.constant('Hello, TensorFlow!')
sess = tf.Session()
print(sess.run(hello))
# Output: Hello, TensorFlow!
```

When you leave, you can call `source deactivate` to exit the `conda` environment. To get back again, call `source activate tensorflow_conda`. 

Note that when  the `conda` environment isactivated, the `$PATH` is prepended with `<your-install-location>/envs/tensorflow_conda/bin`. In some cases, you might also want to prepend `$LD_LIBRARY_PATH` with `<your-install-location>/envs/tensorflow_conda/lib`. This will help `tensorflow` find and import all the necessary CUDA libraries such as `libcudart.so.XYZ`, `libcublas.so.XYZ`, `libcudnn.so.XYZ` and whatnot.

Finally, to also install other machine learning-related libraries:

``` sh
pip install -U pip
pip install keras sklearn matplotlib jupyter
```

In case you want to remove the environment:

``` sh
conda remove --name tensorflow_conda --all
```

