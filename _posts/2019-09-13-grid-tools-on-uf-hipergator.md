---
layout: post
date: 2019-09-13 17:02:29
title: "Grid tools on UF HiPerGator"
categories: [howto]
tags: [UF, grid computing, crab, cvmfs]
---

Recently I moved my codes to the UF HiPerGator machines (also referred to as the HPC machines) which are running RHEL 7. Info about HiPerGator can be found on:
- <https://help.rc.ufl.edu/doc/Getting_Started>
- <https://help.rc.ufl.edu/doc/Training>

One issue that I ran into was that the grid tools used by CMS, e.g. `voms-proxy-*`, `uberftp`, `gfal-copy`, `globus-url-copy`, etc, are not automatically set up. To get them working, I got the following instructions from Bockjoo Kim:

``` shell
source /cvmfs/oasis.opensciencegrid.org/osg-software/osg-wn-client/current/el7-x86_64/setup.sh
export X509_CERT_DIR=/cvmfs/cms.cern.ch/grid/etc/grid-security/certificates
export X509_VOMS_DIR=/cvmfs/cms.cern.ch/grid/etc/grid-security/vomsdir
export VOMS_USERCONF=/cvmfs/cms.cern.ch/grid/etc/vomses
```
