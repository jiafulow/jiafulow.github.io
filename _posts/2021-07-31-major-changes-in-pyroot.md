---
layout: post
date: 2021-07-31 15:26:17
title: Major changes in PyROOT
categories: [notes]
tags: [ROOT, python]
---

PyROOT is the Python binding of the CERN [ROOT](https://root.cern/) library. Apparently, major changes have been introduced for the ROOT v6.22 release &mdash; see the [Release Note](https://root.cern/doc/v622/release-notes.html#pyroot) and [blog post](https://root.cern/blog/new-pyroot-622/), using modern technology such as [cling](https://github.com/root-project/cling) and [cppyy](https://github.com/wlav/cppyy).
It also adds the ability to build PyROOT for both Python 2 and 3 (see [manual](https://root.cern/manual/python/)). A lot of old hacks for PyROOT might become obsolete at this point. But I believe the modernization of PyROOT is very much desired.
