---
layout: post
date: 2019-03-20 15:41:24
title: gfal-copy addresses
categories: [bookmarks]
tags: [CMS, LPC, eos]
---

[gfal-copy](https://dmc.web.cern.ch/projects/gfal-2/documentation) is a tool used to transfer big files from one CMS site to another. The source and destination addresses look like `protocol://host[:port]/path`, see [gfal2-util doc](https://dmc.web.cern.ch/projects/gfal-2/documentation) for details.

Here are some examples for CMS sites with GridFTP protocol:

- LPC: `gsiftp://cmseos-gridftp.fnal.gov//eos/uscms/store/user/...`
- UF: `gsiftp://cmsio.rc.ufl.edu//cms/data/store/user/...`

A quick way to find out these addresses is to check the [CMS FTS monitoring](https://fts3.cern.ch:8449/fts3/ftsmon/#/) website.

- If you have the 'fts_id', you can append it to the end of the URL: <https://fts3.cern.ch:8449/fts3/ftsmon/#/job/fts_id>
