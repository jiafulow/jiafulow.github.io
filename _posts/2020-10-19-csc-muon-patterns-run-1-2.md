---
layout: post
date: 2020-10-19 21:10:45
title: CSC muon patterns (Run-1,2)
categories: [notes]
tags: [CMS, CSC, trigger primitive finder, pattern recognition]
---

A CSC chamber consists of 6 detector layers. A set of pre-defined patterns are used to detect muons from the 6-layer coincidence in the "comparator" digis. The patterns used for CLCT and ALCT comparator digis during Run-1 & Run-2 are illustrated below. They will be replaced by a new set of patterns in the upcoming Run-3.

The 3rd layer (ly2) is referred to as the key layer, which is like the center of the pattern. One unit represents a halfstrip (for CLCT) or a wire group (for ALCT).

### Run-1,2 CLCT

<style>
.frame{display:inline-block;line-height:1.2;}
.label{font-size:0.7em;font-weight:500;color:#24292e;}
.red-swatchbox{background-color:#d73a49;display:inline-block;vertical-align:baseline;width:0.9em;height:0.9em;border-radius:3px;margin-bottom:-1px;margin-left:-1px;}
.fff-swatchbox{background-color:#faebed;display:inline-block;vertical-align:baseline;width:0.9em;height:0.9em;border-radius:3px;margin-bottom:-1px;margin-left:-1px;}
</style>

<table style="width:500px;max-width:none;">
  <thead>
    <tr style="background-color:#fff;">
      <th style="text-align:center;">ID</th>
      <th style="text-align:center;">Bend</th>
      <th style="text-align:center;">Pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">10</td>
      <td style="text-align:center;">0</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">9</td>
      <td style="text-align:center;">1</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">8</td>
      <td style="text-align:center;">0</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">7</td>
      <td style="text-align:center;">1</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">6</td>
      <td style="text-align:center;">0</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">5</td>
      <td style="text-align:center;">1</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">4</td>
      <td style="text-align:center;">0</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">3</td>
      <td style="text-align:center;">1</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">2</td>
      <td style="text-align:center;">0</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">1</td>
      <td style="text-align:center;">1</td>
      <td>unused</td>
    </tr>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">0</td>
      <td style="text-align:center;">0</td>
      <td>unused</td>
    </tr>
  </tbody>
</table>


### Run-1,2 ALCT

<table style="width:250px;max-width:none;">
  <thead>
    <tr style="background-color:#fff;">
      <th style="text-align:center;">ID</th>
      <th style="text-align:center;">Pattern</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color:#fff;">
      <td style="text-align:center;">?</td>
      <td>
<div class="frame">
<span class="label">ly5</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly4</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly3</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly2</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly1</span>
<span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
<span class="label">ly0</span>
<span class="fff-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="red-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span> <span class="fff-swatchbox"></span>
<br/>
</div><!--frame-->
      </td>
    </tr>
  </tbody>
</table>

<br/>

Reference:
- D. Acosta et al., [Efficiency of finding muon track trigger primitives in CMS cathode strip chambers](https://doi.org/10.1016/j.nima.2008.03.118), Nucl.Instrum.Meth.A 592 (2008) 26-37.

