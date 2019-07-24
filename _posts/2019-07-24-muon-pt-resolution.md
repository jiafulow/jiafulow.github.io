---
layout: post
date: 2019-07-23 03:03:16
title: "Muon pT resolution"
categories: [math]
tags: [track fitting, muon]
---

The muon $p_{\mathrm{T}}$ is measured from the curvature of its trajectory in the magnetic field. The curvature is proportional to $1/p_{\mathrm{T}}$. So, the error in the curvature measurement is related to the $p_{\mathrm{T}}$ resolution:

$$
\begin{align}
\Delta\left(\frac{1}{p}\right) &= -\frac{\Delta p}{p^2} \\
\frac{\Delta p}{p} &= -\left[\Delta\left(\frac{1}{p}\right)\right] \cdot p \\
    &= k(p) \cdot p
\end{align}
$$

If the error in the curvature measurement is independent of $p_{\mathrm{T}}$, i.e. $k(p) = k$, then we find that the fractional $p_{\mathrm{T}}$ resolution is proportional to $p_{\mathrm{T}}$:

$$
\frac{\Delta p}{p} \propto p
$$

