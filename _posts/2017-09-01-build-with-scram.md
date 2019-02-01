---
layout: post
date: 2017-09-01 13:19:39
title: Build with SCRAM
categories: [howto]
tags: [CMSSW, CMS, scram]
---

[SCRAM](https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideScram) is the tool used to compile/build [CMSSW](http://cms-sw.github.io/) projects. Every CMS user should be familiar with `scram b` which is basically like `make`. Here are a few tips beyond the basic `scram b`:

- `scram b -j4` let you compile with 4 cores (like `make -j4`).

- `scram b clean` let you do a clean build (like `make clean`).

- `scram b distclean && scram b vclean && scram b clean` let you do a *really* clean build.

- `scram b USER_CXXFLAGS="-g -DDEBUG"` let you make a debug build.

For the documentation for SCRAM, see:

- <https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideScram>
- <https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideBuildFile>
