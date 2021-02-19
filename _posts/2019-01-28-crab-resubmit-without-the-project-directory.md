---
layout: post
date: 2019-01-28 12:12:45
title: "CRAB: Resubmit without the project directory"
categories: [howto]
tags: [CMS, CMSSW, crab, grid computing]
---

The CRAB project directory is the directory that is created when you make a new CRAB project (i.e. when you do `crab submit`). Sometimes you might have removed the project directory too quickly, before you realize that you want to resubmit some of the jobs. But without the project directory, you cannot call `crab resubmit`.

If you know the "task name", which looks like `YYMMDD_HHMMSS:request_name`, then it's possible to recreate the project directory. The timestamp is the time when you call `crab submit`, whereas the `request_name` is `config.General.requestName` from your `crab.py`.  If you don't remember the task name, you can always check the [Task Monitoring dashboard](http://dashb-cms-job.cern.ch/dashboard/templates/task-analysis) to find out.

First, make an empty directory to be used as the CRAB project directory:

``` shell
mkdir PROJDIR
```

Then, do the following in python:

``` shell
from CRABClient.UserUtilities import config
from CRABClient.ClientUtilities import createCache

requestarea = PROJDIR
uniquerequestname = TASKNAME

host = 'cmsweb.cern.ch'
port = ''
voRole = ''
voGroup = ''
instance = 'prod'
originalConfig = config()
createCache(requestarea, host, port, uniquerequestname, voRole, voGroup, instance, originalConfig)
```

Please replace `PROJDIR` and `TASKNAME` in the above with the project directory and the task name.
