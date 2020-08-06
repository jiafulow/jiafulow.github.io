---
layout: post
date: 2020-06-09 11:48:11
title: HLS Glossary
categories: [notes]
tags: [hls, fpga, programming, firmware, xilinx]
---

Glossary for HLS design (taken from [Parallel Programming for FPGAs](https://arxiv.org/abs/1805.03648) by R. Kastner, J. Matai, and S. Neuendorffer):

- High-level synthesis (HLS)
  : The hardware design process that translates an algorithmic description into a register transfer level (RTL) hardware description.

- Logic synthesis
  : The process of converting a RTL design into a netlist of primitive FPGA logic elements (and the connections between them).

- Place and route
  : The process of converting a netlist of device-level primitives into the configuration of a particular device (which is called a bitstream).

- Task latency
  : The time between when a task starts and when it finishes.

- Task interval
  : The time between when a task starts and when the next starts.

- Initiation interval
  : The time between successive data provided to the pipeline.


From the Vivado HLS tool, these are the different steps:

- C Simulation
  : Compile and validate the C (or C++) code. Also build the test bench.

- C Synthesis
  : Synthesis the C design into an RTL design. Report the performance estimates.

- C/RTL Co-Simulation
  : Verify the RTL design by simulating the RTL design and using it in the C test bench.

- Export RTL Design
  : Export the RTL design as an IP.

Note that the Vivado HLS tool only provides estimates for resource usage. To get the real resource usage, one has to go back to Vivado and do place and route.

<!-- Important HLS directives: pipeline, unroll, array_partition, array_reshape, array_map, dataflow, inline, dependence -->

I also find these resources from Xilinx very useful:

- <https://www.xilinx.com/support/documentation/sw_manuals/xilinx2019_2/ug871-vivado-high-level-synthesis-tutorial.pdf>
- <https://www.xilinx.com/support/documentation/sw_manuals/xilinx2019_2/ug902-vivado-high-level-synthesis.pdf>
- <https://xilinx.github.io/Vitis_Accel_Examples/master/html/cpp.html>
- <https://www.xilinx.com/html_docs/xilinx2019_1/sdaccel_doc/hls-pragmas-okr1504034364623.html>

Note that the Vivado HLS (v2019.2) uses gcc 4.6.3, which has support for C++11 via the flag `-std=c++0x`.
