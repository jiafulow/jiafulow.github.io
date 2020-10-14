---
layout: post
date: 2020-08-02 20:14:41
title: HLS Arbitrary Precision data types
categories: [notes]
tags: [hls, fpga, programming, firmware, xilinx]
---

Xilinx provides an arbitrary precision (AP) data types library for use in Vivado HLS projects:

- <https://github.com/Xilinx/HLS_arbitrary_Precision_Types> (C++ header-only library)

It allows the specification of any number of bits for data types, beyond what is provided by the standard C++ data types:
- `char` (8-bit integer)
- `short` (16-bit integer)
- `int` (32-bit integer)
- `long` (32-bit integer)
- `long long` (64-bit integer)

The number of bits of the data types can affect the resource usage. For instance, a DSP48 multiplier is 18-bit. If the data width is more than 18 bits, multiple DSP48s are required. Examples of how to define arbitrary precision integers:
- `ap_int<5>` (5-bit signed integer)
- `ap_uint<65>` (65-bit unsigned integer)

The library also supports fixed-point data types. Examples of how to define them (the two template arguments denote the total num of bits and the num of integer bits; the difference being the num of fractional bits):
- `ap_fixed<11, 6>` (11-bit signed word, 6 integer bits, 5 fractional bits)
- `ap_ufixed<12, 11>` (12-bit unsigned word, 11 integer bits, 1 fractional bit)

The bit widths can be accessed at compile time by `ap_[u]int<W>::width` and by `ap_[u]fixed<W,I>::width` and `ap_[u]fixed<W,I>::iwidth`.

When assigning a value from a narrower word to a wider one, the value is sign-extended if the source variable is signed; the value is zero-extended if the source variable is unsigned. When assigning a value from a wider word to a narrower one, the bits beyond the most significant bit (MSB) of the destination variable are truncated. It doesn't matter if the destination variable is signed or unsigned.

In addition, the library also provides useful bit manipulation methods such as:
- `length()` returns the number of bits.
- `sign()` returns `true` if negative; `false` if positive.
- `operator [] (int bit)` returns the specified bit. The least significant bit (LSB) has index 0, the most significant bit (MSB) has index W - 1.
- `range(unsigned Hi, unsigned Lo)` or `operator () (unsigned Hi, unsigned Lo)` returns the value represented by the specified range of bits. If Hi has a value less than Lo, the bits are returned in reverse order.
- `test(unsigned i)` returns `true` if the specified bit is 1; `false` otherwise.
- `set(unsigned i, bool v)` sets the specified bit to the boolean value.
- `set(unsigned i)` sets the specified bit to the value 1.
- `clear(unsigned i)` sets the specified bit to the value 0.
- `invert(unsigned i)` inverts/toggles the specified bit.

(all of the above work for `ap_[u]int` types but not necessarily for `ap_[u]fixed` types).

The full reference guide for how to use the AP data types is provided at:
- <https://www.xilinx.com/support/documentation/sw_manuals/xilinx2019_2/ug902-vivado-high-level-synthesis.pdf>

