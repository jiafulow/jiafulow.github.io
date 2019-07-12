---
layout: post
date: 2017-08-22 14:04:35
title: CMS Plot Styles
categories: [bookmarks]
tags: [CMS, ROOT, plotting]
---

Instructions for CMS plot styles:

- <https://twiki.cern.ch/twiki/bin/view/CMS/Internal/PubGuidelines>
- <https://twiki.cern.ch/twiki/bin/view/CMS/Internal/FigGuidelines>

To use the ROOT .C macros in pyROOT, the simplest way is:

```python
from ROOT import gROOT

# Set TDR styles
gROOT.LoadMacro("tdrstyle.C")
gROOT.ProcessLine("setTDRStyle();")

# Add CMS text
gROOT.LoadMacro("CMS_lumi.C")
gROOT.ProcessLine("CMS_lumi(c1);")
```

