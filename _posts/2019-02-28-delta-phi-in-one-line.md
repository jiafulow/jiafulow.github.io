---
layout: post
date: 2019-02-28 22:00:55
title: delta-phi in one line
categories: [codes]
tags: [physics]
---

Calculating the delta-phi correctly can be annoying, as you would need to ensure the result is always in the range of [-&pi;, &pi;]. Or you could just use a simple trigonometric function:

``` cpp
double dphi = std::acos(std::cos(phi1 - phi2));
```

However, the above result is always positive. If you care about the sign, you could work with cos &theta; instead:

``` cpp
double cos_dphi = std::cos(phi1 - phi2);
```

The one-liner can come in handy when you want to plot delta-phi from the ROOT command prompt.
