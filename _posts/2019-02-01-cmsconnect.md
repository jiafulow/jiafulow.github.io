---
layout: post
date: 2019-02-01 14:07:01
title: CMSConnect
categories: [bookmarks]
tags: [CMS, CMSSW, grid]
---

CMSConnect is a more powerful alternative to condor that allows users to submit jobs to multiple sites on the CMS computing grid.

- <https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookCMSConnect>
- <http://connect.uscms.org/>
- <http://docs.uscms.org/CMS+Connect+Quickstart>

When using the CMSConnect, one has to specify the "project" name in the submit script. For UF, it is:

```
+ProjectName="cms.org.ufl"
```

To submit jobs to SLC7 machines, one has to specify:

```
+REQUIRED_OS="rhel7"
```

I'm using the [CMSConnet "client"](https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookCMSConnect#Using_the_Connect_client) on UF HiPerGator as it is the only way to submit condor jobs from there.
