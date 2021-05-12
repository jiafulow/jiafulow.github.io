---
layout: post
date: 2019-03-20 15:41:24
title: gfal-copy addresses
categories: [bookmarks]
tags: [CMS, LPC, eos, file transfer]
---

[gfal-copy](https://dmc-docs.web.cern.ch/dmc-docs/gfal2/gfal2.html) is a tool used to transfer big files from one CMS site to another. The source and destination addresses look like `protocol://host[:port]/path`, see [gfal2-util doc](https://dmc-docs.web.cern.ch/dmc-docs/gfal2-util.html) and [repository](https://github.com/cern-fts/gfal2-util) for details.

This is just a note for myself. The following are the addresses that I always use (with the [GridFTP](https://opensciencegrid.org/docs/data/gridftp/) protocol):

- LPC: `gsiftp://cmseos-gridftp.fnal.gov//eos/uscms/store/user/...`
- UF: `gsiftp://cmsio.rc.ufl.edu//cmsuf/data/store/user/...`

A quick way to find out these addresses is to check the CMS [FTS monitoring](https://fts3.cern.ch:8449/fts3/ftsmon/#/) website.

- If you have the 'fts_id' of a job, you can use it in the following URL: <https://fts3.cern.ch:8449/fts3/ftsmon/#/job/fts_id>
