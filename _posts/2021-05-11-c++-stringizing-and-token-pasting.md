---
layout: post
date: 2021-05-11 21:57:01
title: C++ stringizing and token-pasting
categories: [notes]
tags: [cpp, programming]
---

Macro expansion is an important thing to know when trying to do metaprogramming in C++. Specifically, the [stringizing](https://gcc.gnu.org/onlinedocs/cpp/Stringizing.html) (#) and [token-pasting](https://gcc.gnu.org/onlinedocs/cpp/Concatenation.html) (##) operators. They are also explained in this Cppreference [article](https://en.cppreference.com/w/cpp/preprocessor/replace).

If the argument(s) used in the stringizing and token-pasting operators is a macro, then two levels of macro expansion are needed.

``` cpp
#define STRINGIFY_DETAIL(x) #x
#define STRINGIFY(x) STRINGIFY_DETAIL(x)

#define PASTER(x,y) x ## y
#define EVALUATOR(x,y) PASTER(x,y)
```

Check out this StackOverflow [answer](https://stackoverflow.com/a/1489985) to understand how it works.
