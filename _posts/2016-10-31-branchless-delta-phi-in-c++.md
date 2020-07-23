---
layout: post
date: 2016-10-31 15:58:22
title: Branchless delta-phi in C++
categories: [codes]
tags: [programming, physics, cpp]
---

I recently found that CMSSW has a very nice implementation of delta-phi calculation with a very clever use of `std::round()`. See <https://github.com/cms-sw/cmssw/blob/CMSSW_8_1_X/DataFormats/Math/interface/deltaPhi.h>

But I realized it can be made even better by removing the branching condition. Hence this is my modified `deltaPhi()` function:

```cpp
#include <cmath>

template <typename T>
inline T deltaPhiInRadians(T phi1, T phi2) {
  T result = phi1 - phi2;  // same convention as reco::deltaPhi()
  constexpr T _twopi = M_PI*2.;
  result /= _twopi;
  result -= std::round(result);
  result *= _twopi;  // result in [-pi,pi]
  return result;
}

template <typename T>
inline T deltaPhiInDegrees(T phi1, T phi2) {
  T result = phi1 - phi2;  // same convention as reco::deltaPhi()
  constexpr T _twopi = 360.;
  result /= _twopi;
  result -= std::round(result);
  result *= _twopi;  // result in [-180,180]
  return result;
}
```

