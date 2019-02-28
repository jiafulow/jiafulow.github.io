---
layout: post
date: 2019-02-27 11:50:28
title: Remove a package after git cms-addpkg
categories: [howto]
tags: [CMS, CMSSW, git]
---

You can checkout a particular package in CMSSW by calling:

``` shell
git cms-addpkg L1Trigger/L1TMuonEndCap
```

(see [CMSSW FAQ](http://cms-sw.github.io/faq.html#how-do-i-checkout-one-or-more-packages)).

But if you happen to remove the package later, the next time you call `git status`, all the files in the package will show up as "deleted". To remedy this, notice that what `git cms-addpkg` really does is a `git sparse-checkout` operation. So, you can edit the internal file `.git/info/sparse-checkout` to remove the package name from the file, then call:

``` shell
git read-tree -mu HEAD
```

Now, your local git working area should return to the state before you had called `git cms-addpkg`.
