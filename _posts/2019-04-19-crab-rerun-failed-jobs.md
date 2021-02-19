---
layout: post
date: 2019-04-19 09:44:52
title: "CRAB: Rerun failed jobs"
categories: [howto]
tags: [CMS, CMSSW, crab, grid computing]
---

Sometimes when you submit 1,000 jobs for a particular dataset, and get back 999 jobs successfully except 1. No matter how many times you resubmit the failed job, it always fails. What can you do? `crab preparelocal` comes to rescue! See [here](https://twiki.cern.ch/twiki/bin/view/CMSPublic/CRABPrepareLocal) for documentation. 

Basically you can call `crab preparelocal -d PROJDIR`, which creates a subdirectory called `local` under `PROJDIR`. Go in there and call `sh run_jobs JOBID` to run the job locally, and try to debug it.

After the rerun, you can collect the job outputs by doing `tar czf cmsRun.log.tar.gz cmsRun-stdout.log cmsRun-stderr.log FrameworkJobReport.xml`.
