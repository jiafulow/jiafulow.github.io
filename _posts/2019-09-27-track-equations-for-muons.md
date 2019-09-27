---
layout: post
date: 2019-09-27 14:34:14
title: "Track equations for muons"
categories: [math]
tags: [muon, track fitting]
---

Charged tracks in a uniform magnetic field in the barrel geometry follow the track equations:

$$
\phi(r) = \phi_{0} - \sin^{-1}\left(\frac{r}{2R}\right)
$$

$$
z(r) = z_{0} + \cot{\theta} \left[2R \sin^{-1}\left(\frac{r}{2R}\right)\right]
$$

where $R = \frac{p_{\mathrm{T}}}{0.003 B}$, $R$ and $r$ are in cm and $B$ is in Tesla. A muon with $p_{\mathrm{T}} = 2~\text{GeV}$ in the CMS experiment ($B = 3.8~\text{T}$) has $R = 1.75~\text{m}$.

In the endcap geometry, the track equations are:

$$
\phi(z) = \phi_{0} + \frac{z - z_{0}}{2R \cot{\theta}}
$$

$$
r(z) = \left|2R \sin\left( \frac{z - z_{0}}{2R \cot{\theta}} \right) \right|
$$

where $R \cot{\theta} = \frac{p_{\mathrm{z}}}{0.003 B}$, $z$ is in cm. By the way, $\cot{\theta}$ can be easily calculated from $\eta$ via the equation $\cot{\theta} = \sinh(\eta)$.

When considering a vertex-unconstrained fit, with transverse impact parameter $d_{0} \neq 0$, the $\phi_{r}$ equation becomes:

$$
\phi(r) \approx \phi_{0} - \frac{r}{2R} - \frac{d_{0}}{r}
$$

For the endcap muon trigger in CMS, one has to take into account several considerations:

- Significant multiple scattering;
- Significant energy loss;
- Neutron background;
- Non-uniform magnetic field, including a non-zero radial component.

