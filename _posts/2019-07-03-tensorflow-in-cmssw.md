---
layout: post
date: 2019-07-03 10:12:29
title: "TensorFlow in CMSSW"
categories: [howto]
tags: [CMS, CMSSW, tensorflow, machine learning, cpp]
---

Recently I had to make a neural net run in CMSSW. Apparently this is possible in CMSSW 10_X_Y thanks to the interface to TensorFlow C++ library that has been implemented in [PhysicsTools/TensorFlow](https://github.com/cms-sw/cmssw/blob/master/PhysicsTools/TensorFlow). I converted the NN into a TensorFlow "constant graph" and loaded it into the CMSSW environment and ran NN inference. It worked!

How to use the CMSSW TensorFlow interface is described in [these slides](https://indico.cern.ch/event/798721/contributions/3464668/attachments/1864097/3064610/2019-06-18_ML_TFinCMS.pdf). More documentation can be found in [this repo](https://gitlab.cern.ch/mrieger/CMSSW-DNN).

