---
layout: post
date: 2020-03-09 16:18:27
title: "CMSSW Phase-2 geometry numbering"
categories: [howto]
tags: [cms, cmssw]
---

The various Phase-2 geometry descriptions are documented in [Configuration/Geometry/README.md](https://github.com/cms-sw/cmssw/blob/master/Configuration/Geometry/README.md).

Available RelVal workflows for all geometries can be found by doing `runTheMatrix.py -w upgrade -n`. (The possible `-w` arguments are listed in [Configuration/PyReleaseValidation/python/](https://github.com/cms-sw/cmssw/tree/master/Configuration/PyReleaseValidation/python/)).

Related to this, the various pileup scenarios are detailed in [Configuration/StandardSequences/python/Mixing.py](https://github.com/cms-sw/cmssw/blob/master/Configuration/StandardSequences/python/Mixing.py). The 'auto' conditions are detailed in [Configuration/AlCa/python/autoCond.py](https://github.com/cms-sw/cmssw/blob/master/Configuration/AlCa/python/autoCond.py). The 'era' parameters are detailed in [Configuration/StandardSequences/python/Eras.py](https://github.com/cms-sw/cmssw/blob/master/Configuration/StandardSequences/python/Eras.py).

For Phase-2 L1T Upgrade TDR studies, I used geometry `Extended2023D41`, era `Phase2C8_timing_layer_bar`, beamspot `HLLHC14TeV`, conditions `auto:phase2_realistic`, pileup `AVE_200_BX_25ns`.

