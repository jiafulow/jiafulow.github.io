---
layout: post
date: 2021-02-04 10:59:24
title: "Multithreading in CMSSW"
categories: [notes]
tags: [CMS, CMSSW, multithreading]
---

Documentation about how to do multithreading in the CMSSW framework can be found at the following twikis:

- [Types of Modules in the Threaded Framework](https://twiki.cern.ch/twiki/bin/view/CMSPublic/FWMultithreadedFrameworkModuleTypes)
  - [C++ Interface Description for Stream Modules](https://twiki.cern.ch/twiki/bin/view/CMSPublic/FWMultithreadedFrameworkStreamModuleInterface)
  - [C++ Interface Description for Global Modules](https://twiki.cern.ch/twiki/bin/view/CMSPublic/FWMultithreadedFrameworkGlobalModuleInterface)
  - [C++ Interface Description for One Modules](https://twiki.cern.ch/twiki/bin/view/CMSPublic/FWMultithreadedFrameworkOneModuleInterface)
- [Framework and Event Data Model Offline Guide](https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideFrameWork#Multithreading)

The rule of thumb is that EDProducer or EDFilters should probably be a Stream module, while EDAnalyzers and OutputModules should probably be a Global module. A One module basically exists as a fallback to single-threaded processing.

From the discussion in this [pull request](https://github.com/cms-sw/cmssw/pull/32641), one could use [Clang Static Analyzer](https://clang-analyzer.llvm.org/) within the CMSSW framework to check for thread safety. To do that, first check out the `Utilities/StaticAnalyzers` package.

``` bash
git cms-addpkg Utilities/StaticAnalyzers
```

Then, call `scram b` with certain environment variables.

``` bash
export USER_CXXFLAGS="-DEDM_ML_DEBUG -w"
export USER_LLVM_CHECKERS="-enable-checker threadsafety -enable-checker optional.ClassChecker -enable-checker cms -disable-checker cms.FunctionDumper"
scram b -k -j $(nproc) checker
```

The static analyzer results can be viewed in a web browser. See also: <https://twiki.cern.ch/twiki/bin/view/CMSPublic/SWGuideStaticAnalyzer>.
