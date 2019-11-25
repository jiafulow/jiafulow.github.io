---
layout: post
date: 2019-11-25 14:16:52
title: "Jupyter notebook CSS style"
categories: [tips]
tags: [python, jupyter]
---

To change the CSS style in a Jupyter notebook, simply create a cell at the top with the styles:

```
%%html
<style>
.rendered_html p {font-size: 16px;}
</style>
```

To apply the CSS style to all the notebooks, create the file `~/.jupyter/custom/custom.css` and add the styles there.
