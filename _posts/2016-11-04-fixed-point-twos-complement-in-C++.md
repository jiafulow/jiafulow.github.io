---
layout: post
date: 2016-11-04 08:11:13
title: Fixed-point two's complement in C++
categories: [codes]
tags: [programming, cpp]
---

[Two's complement](https://en.wikipedia.org/wiki/Two%27s_complement) is the most common way to represent signed numbers in fixed-point integer operations. Here is a simple implementation in C++ to convert from C++ signed integer to N-bit two's complement value.

```cpp
#include <iostream>
 
template<int N>
int to_twos_complement(int x) {
    return (x < 0) ? ((~abs(x) + 1) & ((1<<N)-1)) : x;
}
 
template<int N>
int from_twos_complement(int x) {
    return (x & (1<<(N-1))) ? (~(x-1) & ((1<<N)-1)) : x;
}
 
int main()
{
    int x = -1;
    int y = to_twos_complement<8>(x);
    int z = from_twos_complement<8>(y);
     
    std::cout << x << std::endl;  // = -1
    std::cout << y << std::endl;  // = 255
    std::cout << z << std::endl;  // = 1
}
```
