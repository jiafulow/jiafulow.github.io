---
layout: post
date: 2020-06-30 11:08:22
title: Install Docker on Linux Mint 19.3
categories: [howto]
tags: [docker, linux, linux mint, ubuntu]
---

This is a simple log of how I installed Docker on my laptop running Linux Mint 19.3 (Tricia). I followed the instructions from the official [Docker Documentation](https://docs.docker.com/engine/install/ubuntu/) website. As Linux Mint 19.3 is based on Ubuntu 18.04 LTS (Bionic Beaver), I followed the instructions in the section "Install on Ubuntu".

The instructions are straight-forward:

``` bash
# Uninstall any Docker packages
sudo apt remove docker docker-engine docker.io containerd runc

# Install packages to allow apt to use a repository over HTTPS
sudo apt update
sudo apt install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Verify that the key has been added
sudo apt-key fingerprint 0EBFCD88

# Set up the Docker "stable" repository
sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"

# Install Docker Engine
sudo apt update
sudo apt install docker-ce docker-ce-cli

# Allow non-privileged users to run Docker commands
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

Check the Docker version:

``` bash
docker --version
# Output: Docker version 19.03.12, build 48a66213fe
```

Verify that you can run `docker` commands without `sudo`:

``` bash
docker run hello-world
```
