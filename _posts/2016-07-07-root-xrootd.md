---
layout: post
date: 2016-07-07 07:50:45
title: Xrootd
categories: [howto]
tags: [ROOT, CMS]
---

Xrootd is a service implemented in [ROOT](https://root.cern.ch/) that allows the user to remotely read data located at various CMS sites. The protocol details can be found at the following TWiki page:

- <https://twiki.cern.ch/twiki/bin/view/CMSPublic/WorkBookXrootdService>

Once you have a valid grid proxy (obtained by doing `voms-proxy-init --voms cms`), you can read a file on a remote site by using a ROOT command like.

```sh
TFile *f = TFile::Open("root://cmsxrootd.fnal.gov//store/mc/path/to/file");
```

The prefix `root://cmsxrootd.fnal.gov/` is known as the redirector. In this case, it is the Fermilab redirector. 
The path `/store/mc/...` or `/store/data/...` is known as the Logical File Name (LFN), which is the global identifier of an official CMS dataset. 
You can also access non-official files stored under `/store/user/username/...` at any CMS storage element that provides Xrootd service.
To download the file, you can use `xrdcp`:

```sh
xrdcp root://cmsxrootd.fnal.gov//store/mc/path/to/file /some/local/path
```

In case your grid proxy is not recognized, check if the environment variable `$X509_USER_PROXY` is set. If not, set it by doing:

```sh
export X509_USER_PROXY=/tmp/x509up_u`id -u`
```

or:

```sh
export X509_USER_PROXY=`voms-proxy-info -path`
```
