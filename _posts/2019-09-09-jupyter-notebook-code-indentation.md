---
layout: post
date: 2019-09-09 12:04:27
title: "Jupyter notebook code indentation"
categories: [tips]
tags: [python, jupyter]
---

The Jupyter notebook code indentation is 4 spaces by default. It can be configured as documented [here](https://jupyter-notebook.readthedocs.io/en/stable/frontend_config.html). Basically, to change it to 2 spaces, look for the file `~/.jupyter/nbconfig/notebook.json`. If the directory or the file doesn't exist, create them. Then edit the file to add the following:

``` json
{
  "CodeCell": {
    "cm_config": {
      "indentUnit": 2
    }
  }
}
```

(Tested on Jupyter 4.4.0.)
