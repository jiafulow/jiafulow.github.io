---
layout: post
date: 2019-08-07 09:26:01
title: "Running CMSSW with Docker"
categories: [howto]
tags: [CMS, CMSSW, docker, linux]
---

Trying to install CMSSW in an OS that is not officially supported (e.g. Mac OS, Arch Linux, etc) can be very difficult. It's possible to run a virtual machine with [Scientific Linux](http://linux.web.cern.ch/linux/scientific.shtml) or [CentOS](http://linux.web.cern.ch/linux/centos.shtml) as the guest OS instead. But there is also a more lightweight solution, which is to use a [Docker](http://cms-sw.github.io/docker.html) container.

The official Docker images [provided by 'cmssw'](https://hub.docker.com/r/cmssw/cmssw) are huge (5-10 GB). Apparently there is a different Docker image that you can use, which is [provided by 'hepsw'](https://hub.docker.com/r/hepsw/cvmfs-cms), and is smaller (~200 MB). You can find the Dockerfiles used to build the images at <https://github.com/cms-sw/cms-docker> (for 'cmssw') and at <https://github.com/hepsw/docks> (for 'hepsw').

The following instructions should provide a functional CMSSW environment using the [hepsw/cvmfs-cms](https://github.com/hepsw/docks/tree/master/cvmfs-cms) image (tested on Linux Mint 18 as the host OS). Note that the image is based on slc-6.

``` shell
# Install Docker from the repository
sudo apt install docker.io

# Load the Docker image
# '--privileged' option is required because of FUSE
sudo systemctl start docker
sudo docker run -h dev --privileged -i -t hepsw/cvmfs-cms
```

Once the image is loaded, you should be in the interactive session in the guest OS. To setup CMSSW:

``` shell
yum install -y glibc glibc-headers glibc-devel.x86_64

export SCRAM_ARCH=slc6_amd64_gcc700
scramv1 project CMSSW CMSSW_10_4_0
cd CMSSW_10_4_0/src
eval `scramv1 runtime -sh`
scram b
```

To disable the annoying `fastestmirror` plugin for `yum`, open the file `/etc/yum/pluginconf.d/fastestmirror.conf`, and change `enabled=1` to `enabled=0`.
