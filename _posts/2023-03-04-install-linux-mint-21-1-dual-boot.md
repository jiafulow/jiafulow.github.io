---
layout: post
date: 2023-03-04 23:07:11
title: Install Linux Mint 21.1 (Dual Boot)
categories: [howto]
tags: [linux, linux mint, ubuntu]
---

This is a log of the steps to install Linux Mint 21.1 "Vera", which I put on my new laptop. The laptop comes with pre-installed Windows 11, and I'm installing Linux Mint alongside it.

#### Preparation

##### On Windows 11

- Resize the disk partitions to reserve disk space for Linux Mint installation.
  - Typically, I reserve >100 GB.

##### On some Linux system

- Download the Linux Mint ISO file (e.g. `linuxmint-21.1-mate-64bit.iso` from [the official website](https://linuxmint.com/download.php)).
- [Create a LiveUSB](https://linuxmint-installation-guide.readthedocs.io/en/latest/burn.html) from the ISO file.

##### On BIOS

- Disable Secure Boot.

#### Installation

- Boot from the LiveUSB.
- [Install Linux Mint](https://linuxmint-installation-guide.readthedocs.io/en/latest/install.html) 
  - For the installation type, I'd recommended to select the option "Something else" and create the partitions manually. Typically, I go with 3 partitions: one Ext4 partition for `/` (i.e. root), one Ext4 partition for `/home`, and one swap area. The root partition should be at least 15 GB.

#### Post-installation

##### On new Linux Mint

- Read the [release note](https://www.linuxmint.com/rel_vera_mate.php).
- Switch to mirrors in the Update Manager.
- Run `sudo apt dist-upgrade`.
- Search and install hardware drivers.
- If using a SSD disk drive, [reduce swappiness](https://forums.linuxmint.com/viewtopic.php?t=304290).
- To reduce system load, change the window manager from "Marco + Compositing" to "Marco + Compton".

##### On BIOS

- Re-enable Secure Boot.
