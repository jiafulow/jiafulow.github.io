---
layout: post
date: 2021-08-12 09:44:22
title: C++ rounding style
categories: [notes]
tags: [cpp, programming]
---

According to [Cppreference - float_round_style](https://en.cppreference.com/w/cpp/types/numeric_limits/float_round_style), there are 4 available rounding styles used in C++ floating-point arithmetics.

|Name|Definition|
|----|----------|
|`std::round_indeterminate`|Rounding style cannot be determined.|
|`std::round_toward_zero`|Rounding toward zero.|
|`std::round_to_nearest`|Rounding toward nearest representable value, i.e. [round half to even](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even). It is also known as convergent rounding.|
|`std::round_toward_infinity`|Rounding toward positive infinity.|
|`std::round_toward_neg_infinity`|Rounding toward negative infinity.|

I'm not sure why there is no `std::round_away_from_zero` i.e. rounding toward &plusmn;infinity, which is what `std::round` does. [IEEE_754](https://en.wikipedia.org/wiki/IEEE_754#Rounding_rules) defines all 5 rounding rules.

According to [Cppreference - FE_round](https://en.cppreference.com/w/cpp/numeric/fenv/FE_round), floating-point to integer implicit conversion and casts always round toward zero. Meanwhile, integer to floating-point casts usually round to nearest.
Results of floating-point arithmetic operators in expressions executed at compile time always round to nearest.
The rounding style of the library functions `std::nearbyint`, `std::rint`, `std::lrint` can be set, but the rounding style of `std::round`, `std::lround`, `std::llround`, `std::ceil`, `std::floor`, `std::trunc` cannot be set.

Sometimes one may see `std::floor(x + 0.5)` being used as a rounding function, which does rounding toward positive infinity. Meanwhile, `std::ceil(x - 0.5)` does rounding toward negative infinity.
Also, for `std::fmod(x, y)` which returns `x - n * y`, where `n` is rounded toward zero. Meanwhile, for `std::remainder(x, y)`, where `n` is rounded to nearest, ties to even.

By the way, [NumPy](https://numpy.org/doc/stable/reference/generated/numpy.around.html) does rounding to the nearest even value.

For Xilinx FPGAs, HLS `ap_fixed` datatype provides:

|Name|Definition|
|----|----------|
|`AP_RND`|Rounding toward positive infinity.|
|`AP_RND_ZERO`|Rounding toward zero.|
|`AP_RND_MIN_INF`|Rounding toward negative infinity.|
|`AP_RND_INF`|Rounding toward &plusmn;infinity.|
|`AP_RND_CONV`|Convergent rounding.|
|`AP_TRN`|Truncation to negative infinity (default).|
|`AP_TRN_ZERO`|Truncation to zero.|

According to the [UG902 manual](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2020_1/ug902-vivado-high-level-synthesis.pdf),
quantization and overflow modes that do more than the default behavior of standard hardware arithmetic
(wrap and truncate) result in operators with more associated hardware. It costs logic (LUTs) to implement the
more advanced modes, such as round to minus infinity or saturate symmetrically.
