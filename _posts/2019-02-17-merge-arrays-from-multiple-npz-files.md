---
layout: post
date: 2019-02-17 12:53:51
title: Merge arrays from multiple npz files
categories: [codes]
tags: [python, numpy, programming]
---

When splitting your task into multiple jobs, you'll need a way to merge the output files. ROOT allows you to merge files using the [hadd](https://web.archive.org/web/20171120164643/https://root.cern.ch/how/how-merge-histogram-files) program.
It finds the histograms and trees from multiple ROOT files and merges them, resulting in a single ROOT file.

As I started to move away from ROOT into the Python environment, I kind of missed hadd. So I wrote a script that emulates it to merge numpy arrays from multiple .npz files. It can be used in the following way (I named the script as `hadd_npz.py`):

``` bash
python hadd_npz.py out_add.npz out_*.npz
```

The script (`hadd_npz.py`):

``` python
#!/usr/bin/env python

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import numpy as np
import os
import six


class Hadd(object):
  """Merge arrays from multiple .npz files.

  It emulates the interface of the utility 'hadd' in ROOT
  (see <https://root.cern.ch/how/how-merge-histogram-files>).
  """
  def __init__(self):
    self.d = {}
    self.dout = {}

  def process(self, target, source, force=False):
    print('hadd Target file: {}'.format(target))

    if not force:
      if os.path.isfile(target):
        msg = 'hadd error opening target file (does {} exist?).\n'.format(target)
        msg += 'Pass "-f" argument to force re-creation of output file.'
        raise ValueError(msg)

    # Loop over the source files
    for i, s in enumerate(source):
      print('hadd Source file {}: {}'.format(i + 1, s))
      with np.load(s) as loaded:
        # Insert the keys
        if i == 0:
          for k in loaded.files:
            self.d[k] = []
        # Keep the arrays
        for k in loaded.files:
          self.d[k].append(loaded[k])

    # Merge arrays via np.hstack() or np.vstack()
    print('hadding...')
    for k, v in six.iteritems(self.d):
      print('array: {}'.format(k))
      if v[0].ndim == 0:
        vv = np.array(v)
      elif v[0].ndim == 1:
        vv = np.hstack(v)
      elif v[0].ndim == 2:
        vv = np.vstack(v)
      elif v[0].ndim == 3:
        vv = np.dstack(v)
      else:
        vv = np.concatenate(v, axis=-1)
      self.dout[k] = vv

    # Write to the target file
    np.savez_compressed(target, **self.dout)
    print('DONE')


# Main
if __name__ == '__main__':
  import argparse
  parser = argparse.ArgumentParser(description='hadd for npz files.')
  parser.add_argument('-f', '--force', action='store_true', help='Force write the target file')
  parser.add_argument('target', help='target file')
  parser.add_argument('source', nargs='+', help='source files')
  args = parser.parse_args()

  hadd = Hadd()
  hadd.process(args.target, args.source, force=args.force)
```

