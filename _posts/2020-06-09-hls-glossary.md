---
layout: post
date: 2020-06-09 11:48:11
title: HLS Glossary
categories: [notes]
tags: [hls, fpga, programming]
---

Glossary for HLS design (taken from [Parallel Programming for FPGAs](https://arxiv.org/abs/1805.03648) by R. Kastner, J. Matai, and S. Neuendorffer):

- **high-level synthesis (HLS)**: the hardware design process that translates an algorithmic description into a register transfer level (RTL) hardware description.
- **logic synthesis**: the process of converting a RTL design into a netlist of primitive FPGA logic elements (and the connections between them).
- **place and route**: the process of converting a netlist of device-level primitives into the configuration of a particular device (which is called a bitstream).
- **task latency**: the time between when a task starts and when it finishes.
- **task interval**: the time between when a task starts and when the next starts.
- **initiation interval**: the time between successive data provided to the pipeline.

