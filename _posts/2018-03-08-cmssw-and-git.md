---
layout: post
date: 2018-03-08 16:58:23
title: CMSSW and Git
categories: [bookmarks]
tags: [CMS, CMSSW, git]
---

Useful links about Git:

- <http://cms-sw.github.io/faq.html>
- <https://twiki.cern.ch/twiki/bin/view/CMS/CMSGitTutorial>
- <https://indico.cern.ch/event/726620/> (Git/GitHub HATS@LPC May 2018)

If you see this error message:

``` sh
Permission denied (publickey)
fatal : Could not read from remote repository

Please make sure you have the correct access rights
and the repository exists
```

You are probably trying to download/clone/pull from a repository using an address that looks like `git@github.com:<username>/<repo>.git`. If you just want the read-only access to the repo (not committing any changes back), you can simply change the address to `https://github.com/<username>/<repo>.git`. And you are done. :relaxed:

However, if you want to be a collaborator and get the read & write access to the repo, you have to use the `git@github.com:<username>/<repo>.git` address. (Certain CMSSW tools might force you to use it even if you don't need the read & write access). In this case, you have to follow the instructions here: <http://cms-sw.github.io/faq.html#how-do-i-subscribe-to-github>.

In particular, make sure you [register in github your ssh key](https://help.github.com/articles/generating-ssh-keys). It means that you must do the following:

1. Create a GitHub account.
2. Generate a SSH key.
  * Typically it's saved as `~/.ssh/id_rsa`
3. Associate the SSH key to your GitHub account.
4. Activate the SSH key every time you connect to GitHub.
  * On Linux, call `eval "$(ssh-agent -s)"` followed by `ssh-add ~/.ssh/id_rsa`

