---
layout: post
date: 2017-11-08 14:18:40
title: CMS Global Tag
categories: [howto]
tags: [CMSSW, CMS]
---

CMS Global Tags for Conditions Data:

- <https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideFrontierConditions>

How to change it?

```python
process.load("Configuration.StandardSequences.FrontierConditions_GlobalTag_cff")
from Configuration.AlCa.GlobalTag import GlobalTag
process.GlobalTag = GlobalTag(process.GlobalTag, 'auto:run2_mc')
```

