---
layout: post
date: 2019-11-04 17:42:49
title: "Track impact parameter"
categories: [math]
tags: [muon, track fitting]
---

The transverse impact parameter of a track, $d_{0}$, is determined by the vector product of $\vec{r} \times \vec{p}$, where $\vec{r}$ is the transverse displacement vector of the point of closest approach (PCA) w.r.t the origin $(0,0)$, and $\vec{p}$ is the transverse momentum vector of the track at the PCA. For a straight track with $p_{\mathrm{T}} = \infty$, $d_{0}$ with the correct sign can be obtained from the following equation:

$$
d_{0} = x_{v} \sin{\phi} - y_{v} \cos{\phi}
$$

where $\phi$ is the azimuth angle of the track momentum, $(x_{v}, y_{v})$ is the location of the production vertex.

But tracks are curved, and we cannot always approximate a curve with a straight line. To calculate the $d_{0}$ for a curved track, firstly we define the signed radius of curvature $R$:

$$
R = -\frac{p_{\mathrm{T}}}{0.003 q B}
$$

where $p_{\mathrm{T}}$ is the transverse momentum in GeV/c, $q$ is the charge of the track, $B$ is the magnetic field in Tesla, and $R$ is in cm. The constant 0.003 is the speed of light multiplied by the necessary conversion factors. The negative sign accounts for the fact that a track with negative charge rotates counter-clockwise, i.e. $\phi(r)$ increases as $r$ increases, so $R$ is positive.

The exact equation for $d_{0}$ can be obtained from the following equation:

$$
d_{0} = R - \operatorname{sign}(R) \cdot \sqrt{ {x_{c}}^2 + {y_{c}}^2}
$$

where $(x_{c}, y_{c})$ is the center of the track circle. It is related to $(x_{v}, y_{v})$ by:

$$
x_{c} = x_{v} - R \sin{\phi}  \\
y_{c} = y_{v} + R \cos{\phi}
$$

Since $\operatorname{sign}(R) = -q$, the equation can also be written more clearly as:

$$
d_{0} = q \cdot \left(\sqrt{ {x_{c}}^2 + {y_{c}}^2} - |R|\right)
$$

from which we can see that the length of $d_{0}$ is given by the difference between the center of the track circle and the radius of the track curvature. The following figure shows the relationship between $d_{0}$, $R$, and $(x_{c}, y_{c})$.

<p align="center">
<img src="/assets/images/2019-11-04-d0-circle.png" height="350" />
</p>

Moreover, at the point of closest approach, the momentum $\phi$ is tangential to the $\phi_{\text{PCA}}$:

$$
\phi = \phi_{\text{PCA}} \pm \frac{\pi}{2}
$$

Given $d_{0}$ and momentum $\phi$ at the PCA, $(x_{\text{PCA}}, y_{\text{PCA}})$ can be found using:

$$
x_{\text{PCA}} = d_{0} \sin{\phi}  \\
y_{\text{PCA}} = -d_{0} \cos{\phi}
$$
