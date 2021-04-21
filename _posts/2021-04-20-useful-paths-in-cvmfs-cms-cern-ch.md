---
layout: post
date: 2021-04-20 21:07:32
title: Useful paths in /cvmfs/cms.cern.ch
categories: [notes]
tags: [CMS, CMSSW, cvmfs, scram]
---

[CernVM-FS](https://cvmfs.readthedocs.io/en/stable/) (or CVMFS) is developed by CERN and used in various HEP experiments for software distribution.
CMSSW, along with its dependencies, is distributed via CVMFS in the namespace `/cvmfs/cms.cern.ch` on the CMS Tier-1, 2, and 3 machines. There are a few special paths that are useful to know.

- To source the environment setup script:

``` bash
source /cvmfs/cms.cern.ch/cmsset_default.sh
```

- To find the available `$SCRAM_ARCH` environment variables:

``` bash
ls -d /cvmfs/cms.cern.ch/slc*
```

- To list the available CMSSW releases for a given `$SCRAM_ARCH`:

``` bash
export SCRAM_ARCH=slc7_amd64_gcc900
scram list CMSSW
# or:
#   ls /cvmfs/cms.cern.ch/slc7_amd64_gcc900/cms/cmssw/
```

- To setup a particular CMSSW release:

``` bash
cmsrel CMSSW_11_3_0_pre6
cd CMSSW_11_3_0_pre6/src
cmsenv
# or:
#   scramv1 project CMSSW CMSSW_11_3_0_pre6
#   cd CMSSW_11_3_0_pre6/src
#   eval `scramv1 runtime -sh`
```

- To find the source code for a particular CMSSW release:

``` bash
ls $CMSSW_RELEASE_BASE/src
# or:
#   ls /cvmfs/cms.cern.ch/slc7_amd64_gcc900/cms/cmssw/CMSSW_11_3_0_pre6/src
```

- To find the C++ header files from external libraries (e.g. GCC) used by a particular CMSSW release:
  - Identify the XML config file that belongs to the library under `$CMSSW_RELEASE_BASE/config/toolbox/$SCRAM_ARCH/tools/selected/`;
  - Figure out the path from the XML config file.

``` bash
cat $CMSSW_RELEASE_BASE/config/toolbox/$SCRAM_ARCH/tools/selected/gcc-cxxcompiler.xml
# Found the path
ls /cvmfs/cms.cern.ch/slc7_amd64_gcc900/external/gcc/9.3.0/
# Navigate `include`
ls /cvmfs/cms.cern.ch/slc7_amd64_gcc900/external/gcc/9.3.0/include/
# Found the header files
ls /cvmfs/cms.cern.ch/slc7_amd64_gcc900/external/gcc/9.3.0/include/c++/9.3.0/
```

- To find the Python packages (e.g. NumPy) used by a particular CMSSW release:
  - Identify the XML config file that belongs to the library under `$CMSSW_RELEASE_BASE/config/toolbox/$SCRAM_ARCH/tools/selected/`;
  - Figure out the path from the XML config file.

``` bash
cat $CMSSW_RELEASE_BASE/config/toolbox/$SCRAM_ARCH/tools/selected/py3-numpy.xml
# Found the path
ls /cvmfs/cms.cern.ch/slc7_amd64_gcc900/external/py3-numpy/1.17.5-ljfedo2/
# Navigate `lib` or `lib64`
ls /cvmfs/cms.cern.ch/slc7_amd64_gcc900/external/py3-numpy/1.17.5-ljfedo2/lib/
# Found the source files
ls /cvmfs/cms.cern.ch/slc7_amd64_gcc900/external/py3-numpy/1.17.5-ljfedo2/lib/python3.8/site-packages/numpy/
```



