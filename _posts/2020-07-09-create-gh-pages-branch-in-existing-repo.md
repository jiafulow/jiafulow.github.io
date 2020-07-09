---
layout: post
date: 2020-07-09 17:35:45
title: Create gh-pages branch in existing repo
categories: [howto]
tags: [github pages, github, static sites]
---

It's easy to serve a website using [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages) by creating the `gh-pages` branch in a GitHub repo. The instructions can be found [here](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site).

In my case, I have an existing repository that has some stuff. I want to use GitHub Pages to serve some `.md` files, but I don't want to include the stuff from my `master` branch. What I had to do was:

1. Create/checkout an orphan `gh-pages` branch.
   - An orphan branch is not connected to the other branches and commits, and its working tree has no files at all. See [here](https://git-scm.com/docs/git-checkout) for more info.
2. Commit `.md` files to the branch.

To create the orphan `gh-pages` branch (based on instructions from [Hugo](https://gohugo.io/hosting-and-deployment/hosting-on-github/)):

``` bash
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initializing gh-pages branch"
git push origin gh-pages
git checkout master
```

Once the branch is pushed to GitHub, you have to go to the Settings page of the repository. In the section "GitHub Pages", select `gh-pages` as the source. The step is described in more details [here](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source). If successful, you will see a message saying "Your site is published at https://*your-username*.github.io/*your-repository*/".

Now you can add files to the `gh-pages` branch, and they will show up on your new website:

``` bash
git checkout gh-pages
# Adding files ...
git commit -m "Add files"
git push origin gh-pages
git checkout master
```
