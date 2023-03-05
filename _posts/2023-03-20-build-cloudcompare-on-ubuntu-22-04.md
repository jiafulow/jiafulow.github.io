---
layout: post
date: 2023-03-20 10:46:28
title: Build CloudCompare on Ubuntu 22.04
categories: [howto]
tags: [pointcloud, linux, ubuntu]
---

To compile and install [CloudCompare](https://cloudcompare.org/) on a Ubuntu 22.04 box:

``` bash
# Install dependencies
sudo apt-get install -y build-essential cmake libqt5svg5-dev libqt5opengl5-dev \
    qt5-default qttools5-dev qttools5-dev-tools libqt5websockets5-dev \
    libeigen3-dev libdlib-dev libjsoncpp-dev liblaszip-dev 

# Download Git repository including submodules
git clone --recursive https://github.com/cloudcompare/CloudCompare.git

cd CloudCompare
mkdir build && cd build

# Configure
cmake \
    -DEIGEN_ROOT_DIR=/usr/include/eigen3 \
    -DJSON_ROOT_DIR=/usr/include/jsoncpp \
    -DDLIB_ROOT=/usr/include \
    -DCCCORELIB_SCALAR_DOUBLE=OFF \
    -DCCCORELIB_USE_TBB=ON \
    -DPLUGIN_EXAMPLE_GL=ON \
    -DPLUGIN_EXAMPLE_IO=ON \
    -DPLUGIN_EXAMPLE_STANDARD=ON \
    -DPLUGIN_GL_QEDL=ON \
    -DPLUGIN_GL_QSSAO=ON \
    -DPLUGIN_IO_QADDITIONAL=ON \
    -DPLUGIN_IO_QCORE=ON \
    -DPLUGIN_IO_QE57=ON \
    -DPLUGIN_IO_QPHOTOSCAN=ON \
    -DPLUGIN_IO_QLAS=ON \
    -DPLUGIN_IO_QPDAL=OFF \
    -DPLUGIN_IO_QRDB=ON \
    -DPLUGIN_IO_QRDB_FETCH_DEPENDENCY=ON \
    -DPLUGIN_IO_QRDB_INSTALL_DEPENDENCY=ON \
    -DPLUGIN_STANDARD_QANIMATION=ON \
    -DQANIMATION_WITH_FFMPEG_SUPPORT=OFF \
    -DPLUGIN_STANDARD_QBROOM=ON \
    -DPLUGIN_STANDARD_QCANUPO=ON \
    -DPLUGIN_STANDARD_QCOMPASS=ON \
    -DPLUGIN_STANDARD_QCSF=ON \
    -DPLUGIN_STANDARD_QFACETS=ON \
    -DPLUGIN_STANDARD_QHOUGH_NORMALS=ON \
    -DPLUGIN_STANDARD_QHPR=ON \
    -DPLUGIN_STANDARD_QM3C2=ON \
    -DPLUGIN_STANDARD_QPCV=ON \
    -DPLUGIN_STANDARD_QPOISSON_RECON=ON \
    -DPLUGIN_STANDARD_QSRA=ON \
    -DPLUGIN_STANDARD_QRANSAC_SD=ON \
    -DPLUGIN_STANDARD_QPCL=OFF \
    -DPLUGIN_STANDARD_QCLOUDLAYERS=ON \
    -DBUILD_TESTING=OFF \
    ..

# Build
cmake --build . -j$(nproc)

# Install
sudo make install
```

The instructions were prepared based on the following references:
- <https://github.com/CloudCompare/CloudCompare/blob/master/BUILD.md> 
- <https://github.com/CloudCompare/CloudCompare/blob/master/.github/workflows/build.yml>
