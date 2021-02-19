---
layout: post
date: 2020-02-28 14:32:59
title: "Update GitHub forked repository"
categories: [howto]
tags: [git, github]
---

When you fork a repository on GitHub, you get a copy of the upstream repository. But the forked repository doesn't receive future updates from the upstream repository. You would have to do that manually. GitHub has some useful help pages:
- <https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork>
- <https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork>
- <https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/merging-an-upstream-repository-into-your-fork>

Suppose you start by forking a repo, and `git clone` from the forked repo (as opposed to the upstream repo). If you do `git remote -v` in your working area, you should see something like:

``` shell
git remote -v
#  origin git@github.com:YOUR_USERNAME/YOUR_FORK (fetch)
#  origin git@github.com:YOUR_USERNAME/YOUR_FORK (push)
```

Now, you want to add the upstream as a new remote:

``` shell
git remote add upstream git@github.com:ORIGINAL_OWNER/ORIGINAL_REPOSITORY
```

To verify that you have added it successfully, you can do `git remote -v` again.

Suppose the branch you want to update is the 'master' branch. In your working area, the master branch is pointing to the fork remote, not to the upstream remote. This can be confusing. To avoid the confusion, I suggest to rename the existing master branch into something else:

``` shell
git branch -m YOUR_BRANCH
```

To verify that you have renamed it successfully, you can do `git branch`.

Push this branch to the fork remote:

``` shell
git push -u origin YOUR_BRANCH
```

Then, check out the master branch from the upstream remote. From now on, the master branch is pointing to the upstream remote:

``` shell
git fetch upstream
git checkout -t upstream/master
```

Push this recreated master branch to your fork remote, overwriting what is currently there:

``` shell
git push --force origin master
```

In the future, to receive updates from the upstream master branch, and apply those updates to your local repo and your fork repo:

``` shell
# Pull from upstream, but push to origin (a.k.a. fork)
git checkout master
git pull
git push origin master
```

