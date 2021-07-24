---
layout: post
date: 2021-07-23 22:15:11
title: C++ enable_if via return type
categories: [codes]
tags: [cpp, programming]
---

I found [SFINAE](https://en.cppreference.com/w/cpp/language/sfinae) or "Substitution Failure Is Not An Error" quite fascinating. At first, it looked kind of cryptic to me (what do all these "typenames" mean?), so I tended to avoid it.
But when used right, [`std::enable_if`](https://en.cppreference.com/w/cpp/types/enable_if) (which leverages SFINAE) really helps simplifying the code. So I started to depend on it.

Recently I wrote a function based on the example provided by [Cppreference std::void_t article](https://en.cppreference.com/w/cpp/types/void_t).
Basically, I wanted to reset a variable, which can be either a scalar type (int, float, etc) or a container. If it is a container, I wanted to call `Container::clear()`.
Otherwise, I can simply set it to zero.

``` cpp
template <typename T, typename = void>
struct is_clearable : std::false_type {};

template <typename T>
struct is_clearable<T, std::void_t<decltype(std::declval<T>().clear())> > : std::true_type {};

template <typename T>
inline constexpr bool is_clearable_v = is_clearable<T>::value;

template <typename T>
typename std::enable_if_t<is_clearable_v<T> > reset(T* t) {  // #1
    t->clear();
}

template <typename T>
typename std::enable_if_t<!is_clearable_v<T> > reset(T* t) {  // #2
    *t = 0;
}
```

In my example, [`std::void_t`](https://en.cppreference.com/w/cpp/types/void_t) is used to detect whether `T` has the member function `clear()`. `is_clearable<T>::value` yields `true` or `false` based on the result. `is_clearable_v<T>` is defined as a compile-time boolean constant that takes the `is_clearable<T>::value`.

Then, the `reset(T* t)` function is defined separately for the two cases. The first version is enabled (via the return type) when `T` has the member function `clear()`; the second version is enabled when `T` does not.

It turns out to work as advertised for me. But to apply this enable_if idiom, one would have to figure out what any of these (`decltype`, `declval`, `constexpr`, `void_t`, `enable_if`) are, and I think that's not trivial without the help of some good examples.
