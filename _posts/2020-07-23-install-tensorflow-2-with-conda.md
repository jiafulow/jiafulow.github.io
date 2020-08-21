---
layout: post
date: 2020-07-23 16:52:11
title: Install TensorFlow 2 with Miniconda
categories: [howto]
tags: [linux, rhel, centos, machine learning, tensorflow, python, conda, anaconda]
---

The official TensorFlow [installation](https://www.tensorflow.org/install) page no longer features instructions on how to install it with Anaconda (or Miniconda). But Anaconda still provides the [instructions](https://docs.anaconda.com/anaconda/user-guide/tasks/tensorflow/).

First, if Anaconda/Miniconda has not been installed yet, select the installer (see the [list](https://docs.conda.io/en/latest/miniconda.html#linux-installers)), and run it according to the [Linux-specifc instructions](https://conda.io/projects/conda/en/latest/user-guide/install/linux.html). Then, simply follow the [instructions](https://docs.anaconda.com/anaconda/user-guide/tasks/tensorflow/) provided by Anaconda to install TensorFlow. Note that I'm using Scientific Linux release 7.8 (Nitrogen).

The following is a quick recipe (using Python 3.6):

``` bash
# Install Miniconda into ~/miniconda
wget https://repo.anaconda.com/miniconda/Miniconda2-latest-Linux-x86_64.sh -O ~/miniconda.sh
bash ~/miniconda.sh -b -p $HOME/miniconda

miniconda/bin/conda init

# Create TensorFlow env
conda create -n tf tensorflow python=3.6

# Activate TensorFlow env
conda activate tf

# Try it
python -c "import tensorflow as tf; print(tf.__version__)"
# -> 2.2.0
```

If GPU support is needed, you should do this instead:

``` bash
conda create -n tf-gpu tensorflow-gpu python=3.6
conda activate tf-gpu
```

Note that the command `miniconda/bin/conda init` will make modifications to your `~/.bashrc`. If you prefer to modify it manually, skip the command and add these lines to your `~/.bashrc`:

``` bash
if [ -f "$HOME/miniconda/etc/profile.d/conda.sh" ]; then
    . "$HOME/miniconda/etc/profile.d/conda.sh"
else
    export PATH="$HOME/miniconda/bin:$PATH"
fi
```

To deactivate conda:

``` bash
conda deactivate
```

To uninstall the TensorFlow environment (see [Managing environments](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)):

``` bash
conda remove --name tf --all
```

To update conda:

``` bash
conda update -n base conda
```

The conda equivalent of `pip freeze > requirements.txt`:

``` bash
conda env export > environment.yml
```

And the conda equivalent of `pip install -r requirements.txt`:

``` bash
conda env create -f environment.yml
```
