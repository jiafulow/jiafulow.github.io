---
layout: post
date: 2016-07-04 12:31:56
title: Monte Carlo sample production
categories: [howto]
tags: [CMSSW, CMS, event simulation]
---

[McM](https://cms-pdmv.cern.ch/mcm/) is a webpage used for CERN CMS Monte Carlo Request Management. It is documented at:

- <https://twiki.cern.ch/twiki/bin/view/CMS/PdmVMcM>
- <https://twiki.cern.ch/twiki/bin/view/CMS/PdmVMcCampaigns>
- <https://monte-carlo-production-tools.gitbook.io/project/>

It provides the exact commands used to generate official MC samples. To get the commands:

1. Query CMS [DAS](https://cmsweb.cern.ch/das/) to get the McM 'prepid'. 
  - e.g. `dataset dataset=/TTJets_TuneCUETP8M1_13TeV-amcatnloFXFX-pythia8/RunIISpring16DR80-PUSpring16RAWAODSIM_80X_mcRun2_asymptotic_2016_v3-v2/RAWAODSIM` gives McM prepid: `TOP-RunIISpring16DR80-00030`
  
2. Edit this URL <https://cms-pdmv.cern.ch/mcm/public/restapi/requests?prepid=PREPID> by replacing PREPID with the McM prepid.
  - e.g. <https://cms-pdmv.cern.ch/mcm/public/restapi/requests?prepid=TOP-RunIISummer15GS-00044>

When the DAS web interface is not working, one can also do the search from the command line
- e.g. `das_client.py --query="mcm dataset=/TTJets_TuneCUETP8M1_13TeV-amcatnloFXFX-pythia8/RunIISpring16DR80-PUSpring16RAWAODSIM_80X_mcRun2_asymptotic_2016_v3-v2/RAWAODSIM"`

A quicker way is simply editing the URL:
- e.g. <https://cms-pdmv.cern.ch/mcm/requests?produce=/TTJets_TuneCUETP8M1_13TeV-amcatnloFXFX-pythia8/RunIISpring16DR80-PUSpring16RAWAODSIM_80X_mcRun2_asymptotic_2016_v3-v2/RAWAODSIM>

There is also a list of all the official campaigns:
- <https://github.com/CMSCompOps/WmAgentScripts/blob/master/campaigns.json>
