---
layout: post
date: 2018-07-22 03:47:59
title: Virtualenv issue in CMSSW_9_3_X
categories: [bugs]
tags: [CMS, CMSSW, python, pip, virtualenv]
---

I ran into a strange issue related to Python `virtualenv` and `pip` in CMSSW_9_3_X. Python version 2.7.11 and Virtualenv version 15.1.0. Doing the following will cause an error:

``` sh
virtualenv venv
source venv/bin/activate
pip install -U pip
```

The error message reads:

```
Traceback (most recent call last):
  File "/tmp/venv/bin/pip", line 7, in <module>
    from pip._internal import main
ImportError: No module named _internal
```

Apparently it is due to the environment variable `$PYTHONPATH` not set properly. I fixed it by patching the file `venv/bin/activate`. Here's the patch file:

``` diff
diff --git a/venv/bin/activate b/venv/bin/activate
index 03fa903..c104cf0 100644
--- a/venv/bin/activate
+++ b/venv/bin/activate
@@ -11,6 +11,11 @@ deactivate () {
         export PATH
         unset _OLD_VIRTUAL_PATH
     fi
+    if ! [ -z "${_OLD_PYTHONPATH+_}" ] ; then
+        PYTHONPATH="$_OLD_PYTHONPATH"
+        export PYTHONPATH
+        unset _OLD_PYTHONPATH
+    fi
     if ! [ -z "${_OLD_VIRTUAL_PYTHONHOME+_}" ] ; then
         PYTHONHOME="$_OLD_VIRTUAL_PYTHONHOME"
         export PYTHONHOME
@@ -47,6 +52,10 @@ _OLD_VIRTUAL_PATH="$PATH"
 PATH="$VIRTUAL_ENV/bin:$PATH"
 export PATH
 
+_OLD_PYTHONPATH="$PYTHONPATH"
+PYTHONPATH="$VIRTUAL_ENV/lib/python2.7/site-packages:$PYTHONPATH"
+export PYTHONPATH
+
 # unset PYTHONHOME if set
 if ! [ -z "${PYTHONHOME+_}" ] ; then
     _OLD_VIRTUAL_PYTHONHOME="$PYTHONHOME"
```

To apply, download it as `mypatch.txt` in the same directory where `virtualenv venv` was called. Then do:

``` sh
patch -p1 < mypatch.txt
```

Now `pip install -U pip` should work.

