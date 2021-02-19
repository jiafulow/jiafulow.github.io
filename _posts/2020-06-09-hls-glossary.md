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

Also note that Vivado HLS defines the macro `__SYNTHESIS__` when synthesis is performend. This can be used to exclude non-synthesizable code, such as `std::cout`.

Also note that Vivado HLS (v2020.1) uses gcc 4.6.3, which has support for C++11 via the flag `-std=c++0x`. By default, the C simulation is performed in debug mode. *EDIT*: Vivado HLS has been discontinued since v2020.1. It has been replaced by Vitis HLS.

Also note that for C/RTL co-simulation, the default tool is xsim and the default language used for RTL is Verilog.

<!-- Important HLS directives: pipeline, unroll, array_partition, array_reshape, array_map, dataflow, inline, dependence -->

I also find these resources from Xilinx very useful:

- <https://www.xilinx.com/support/documentation/sw_manuals/xilinx2020_1/ug871-vivado-high-level-synthesis-tutorial.pdf>
- <https://www.xilinx.com/support/documentation/sw_manuals/xilinx2020_1/ug902-vivado-high-level-synthesis.pdf>
- <https://www.xilinx.com/support/documentation/sw_manuals/ug998-vivado-intro-fpga-design-hls.pdf>
- <https://github.com/Xilinx/HLS-Tiny-Tutorials>
- <https://xilinx.github.io/Vitis_Accel_Examples/master/html/cpp.html>
- <https://www.xilinx.com/html_docs/xilinx2020_2/vitis_doc/hls_pragmas.html>
- Examples provided in the installation area: `<vivado-hls-installation>/examples/coding/`

Some random notes I've taken from the UG902 doc:

- When a loop or function is pipelined, Vivado HLS unrolls all loops in the hierarchy below the loop or function.

- Vivado HLS may perform automatic inlining of small functions. If a function is inlined, the logic is merged into the function above it in the hierarchy, and there is no report or separate RTL file for the inlined function. Also, if the function arguments and interface are incorrect or inaccurate, they can prevent Vivado HLS from applying some optimizations.

- To reduce latency, Vivado HLS schedules logic operations and functions to execute in parallel. But it does not schedule loops to execute in parallel. To execute two different loops in parallel, the loops should be captured in separate functions.

- Arrays accesses can often create bottlenecks to performance. When implemented as a memory, the number of memory ports limits access to the data. Some care must be taken to ensure arrays that only require read accesses are implemented as ROMs in the RTL.

- It is recommended to specify arrays that are intended to be memories with the static qualifier. A static array behaves in an almost identical manner as a memory does in RTL.
