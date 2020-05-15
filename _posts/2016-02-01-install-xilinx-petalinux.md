---
layout: post
date: 2016-02-01 02:11:32.313692
title: Install Xilinx PetaLinux 2015.4 on Ubuntu 14.04
categories: [howto]
tags: [embedded linux, linux, ubuntu, trusty tahr, xilinx, petalinux, zynq]
---

The user guide for Xilinx PetaLinux 2015.4 installation is **[UG1144][1]**. It is best used together with Xilinx Vivado 2015.4 version (see my last post about how to install Vivado). More info about PetaLinux embedded OS can be found on [Xilinx Products][2] page, and on the [Xilinx Wiki][3] site.

Firstly, go to the [Xilinx Downloads][4] page to obtain the installer. Select version 2015.4 on the left sidebar. Choose "PetaLinux 2015.4 Installer". It is a single-file executable that is 1.68 GB large. Note: you have to be a registered user to download it.

Before you proceed, make sure all the prerequisites are satisfied:

``` sh
sudo apt-get install tofrodos iproute gawk gcc git-core make net-tools \
    libncurses5-dev tftpd zlib1g-dev libssl-dev flex bison libselinux1 \
    lib32z1 lib32ncurses5 lib32bz2-1.0 lib32stdc++6 \
    zip
```

Change `/bin/sh` to bash

``` sh
sudo dpkg-reconfigure dash
# --> Select <No>
```

Now install PetaLinux into the `/opt/PetaLinux` directory. The installer is a shell script that runs in the terminal.

``` sh
chmod +x petalinux-v2015.4-final-installer-dec.run
sudo ./petalinux-v2015.4-final-installer-dec.run /opt/PetaLinux
```

Press <kbd>ENTER</kbd> to see the licenses, <kbd>q</kbd> to quit reading the licenses, and <kbd>y</kbd> + <kbd>ENTER</kbd> to accept the licenses. The installation should last for about 15-30 mins.

Every time you want to use PetaLinux tools, remember to source the "settings" script to have the right environment variables:

``` sh
source /opt/PetaLinux/petalinux-v2015.4-final/settings.sh
```

The following is a super simple walkthrough of how to use PetaLinux tools.

1. To create a PetaLinux project using [Zynq][5] for instance:

   ``` sh
   petalinux-create -t project -n MYPROJECT --template zynq
   ```

2. Get hardware description from Vivado. The hardware description is usually exported by Vivado into e.g. MYVIVADOPROJECT.sdk of a Vivado project.

   ``` sh
   cd MYPROJECT
   petalinux-config --get-hw-description=MYVIVADOPROJECT.sdk
   ```

3. Make necessary changes to rootfs and device tree (using `petalinux -c rootfs` or directly editing files under `subsystems/linux/configs/`). Then, build the embedded OS for Zynq:

   ``` sh
   petalinux-build
   ```

4. Make the SD card image:

   ``` sh
   cd images/linux
   petalinux-package --boot --fsbl zynq_fsbl.elf --fpga system_wrapper.bit --uboot
   ```

5. Copy `BOOT.BIN` and `image.ub` in that directory to the SD card and use the SD card to boot the Zynq hardware.


[1]: http://www.xilinx.com/support/documentation/sw_manuals/petalinux2015_4/ug1144-petalinux-tools-reference-guide.pdf
[2]: http://www.xilinx.com/products/design-tools/embedded-software/petalinux-sdk.html
[3]: http://www.wiki.xilinx.com/PetaLinux
[4]: http://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/embedded-design-tools.html
[5]: http://www.xilinx.com/products/silicon-devices/soc/zynq-7000.html
