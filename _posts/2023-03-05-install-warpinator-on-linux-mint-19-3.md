---
layout: post
date: 2023-03-05 09:52:23
title: "Install Warpinator on Linux Mint 19.3"
categories: [howto]
tags: [warpinator, linux, linux mint, ubuntu]
---

[Warpinator](https://blog.linuxmint.com/?p=3890) is a file sharing tool created by the Linux Mint team. It was first released along with [Linux Mint 20](https://www.linuxmint.com/rel_ulyana_cinnamon_whatsnew.php), but there is no official build for Linux Mint 19.3. Fortunately, the instructions on its [GitHub repo](https://github.com/linuxmint/warpinator) allow us to build the app from source.
At the time of writing, the newest tag is `v1.4.5`, but due to the older versions of the packaging tools available on Linux Mint 19.3, I had to use an older tag, which is `v1.2.9`.

The following are the instructions to build and install the `v1.2.9` Warpinator on Linux Mint 19.3.

```shell
# Add the PPA so that python3-grpc-tools is available
sudo add-apt-repository ppa:clementlefebvre/grpc
sudo apt-get update

# Install build dependencies listed below, note minimum versions:
sudo apt-get install python3-grpc-tools python3-grpcio

# Clone the repo:
git clone https://github.com/linuxmint/warpinator.git

# Enter the folder, specify version:
cd warpinator
git checkout 1.2.9

# Try to build. If this fails, it's probably due to missing dependencies.
sudo apt-get install debhelper dh-python gnome-pkg-tools meson gobject-intr
ospection

echo 10 > debian/compat

dpkg-buildpackage --no-sign -d

cd ..
```

If everything works, you should now see `warpinator_1.2.9_all.deb`. Before installing it, you will need to get the dependency `python3-ifaddr`. Download the file from <http://archive.ubuntu.com/ubuntu/pool/universe/p/python-ifaddr/python3-ifaddr_0.1.6-1_all.deb>. Install both the .deb files manually.

After installation, for some unknown reason, the executable at `/usr/bin/warpinator` (which is a Python script) could not import the module 'warpinator'. The module is located at `/usr/lib/x86_64-linux-gnu/warpinator/`. I had to manually add the path to the Python script. To do so:

```shell
sudoedit /usr/bin/warpinator

# Find the line which says:
#   sys.path.insert(0, os.path.join("/usr", "libexec/warpinator/"))
# Add the following line after that line:
#   sys.path.insert(0, os.path.join("/usr", "lib/x86_64-linux-gnu/warpinator/"))
```

Hopefully you should be able to run Warpinator (can be found at Applications > Accessories > Warpinator). Using Warpinator, you can easily transfer files from an old Linux Mint system to a new one!
