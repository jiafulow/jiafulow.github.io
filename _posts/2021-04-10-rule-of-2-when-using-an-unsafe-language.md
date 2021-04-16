---
layout: post
date: 2021-04-10 21:05:07
title: "Rule of 2 when using an unsafe language"
categories: [notes]
tags: [cpp, programming]
---

I learned today from [Google Security Blog](https://security.googleblog.com/2021/04/rust-in-android-platform.html) that Google follows the [Rule of 2](https://chromium.googlesource.com/chromium/src/+/master/docs/security/rule-of-2.md) when writing code in an unsafe language (C/C++). The Rule of 2 says that you should pick no more than 2 of:

- untrustworthy inputs;
- unsafe implementation language; and
- high privilege

In other words, you should "always use a safe language, a sandbox, or not be processing untrustworthy inputs in the first place".

![rule-of-2.png](/assets/images/2021-04-10-rule-of-2.png)


I thought that this is relevant not only in programming, but also in life. In this internet age, when you read something, you should only read/internalize subjects that you are familiar with ("safe language"), do not spread anything that could be misinformation ("unprivileged sandbox"), or not be reading from untrustworthy sources in the first place.
