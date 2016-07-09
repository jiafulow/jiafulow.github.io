---
layout: post
date: 2016-07-07 07:50:45
title: Xrootd
categories: [howto]
tags: [ROOT, CMS]
---

Xrootd is a service implemented in [ROOT](https://root.cern.ch/) that allows the user to remotely read data located at various CMS sites. The protocol detail can be found at following TWiki pages:

- <https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookXrootdService>

Once you have a valid grid proxy (obtained by doing `voms-proxy-init --voms cms`), you can read a file on a remote site by using a ROOT command like.

``` sh
TFile *f = TFile::Open("root://cmsxrootd.fnal.gov//store/mc/path/to/file");
```

The prefix `root://cmsxrootd.fnal.gov/` is known as the redirector. In this case, it is the Fermilab redirector. 
The `/store/mc/...` or `/store/data/...` is known as the Logical File Name (LFN) of the file, which is the global identifier of an official CMS dataset. 
You can also access non-official files stored under `/store/user/username/...` at any CMS storage element that provides Xrootd service.
If you want to download the file, you can do

``` sh
xrdcp root://cmsxrootd.fnal.gov//store/mc/path/to/file /some/local/path
```
