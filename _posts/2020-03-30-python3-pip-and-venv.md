---
layout: post
date: 2020-03-30 14:33:30
title: "Python3, pip, and venv"
categories: [bookmarks]
tags: [python, pip, venv]
---

One of the lines in [The Zen of Python](https://www.python.org/dev/peps/pep-0020/) says &ldquo;There should be one &mdash; and preferably only one &mdash; obvious way to do it&rdquo;. But there are more than 10 different ways to set up virtual environments in Python, some of them no longer applicable for Python 3. This Red Hat Developer blog explains the best practices for working with `pip` and `venv`: <https://developers.redhat.com/blog/2018/08/13/install-python3-rhel/>.

From the TL;DR section:

``` bash
$ mkdir ~/pydev
$ cd ~/pydev
 
$ python3 -m venv py36-venv
$ source py36-venv/bin/activate
 
(py36-venv) $ python3 -m pip install ...some modules...
```

Note that `venv` is preferred to `virtualenv` in Python 3 (as explained [here](https://developers.redhat.com/blog/2018/08/13/install-python3-rhel/#which-venv)). Also, virtual environments are preferred to `pip --user` (as explained [here](https://developers.redhat.com/blog/2018/08/13/install-python3-rhel/#python-tips)).
