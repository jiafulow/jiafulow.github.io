---
layout: post
date: 2019-02-17 12:53:51
title: Merge arrays from multiple npz files
categories: [codes]
tags: [python, numpy]
---

When you split your task into multiple jobs, you would need a way to merge the output files. ROOT allows you to merge files using the [hadd](https://root.cern.ch/how/how-merge-histogram-files) program. It finds the histograms and trees in the ROOT files and merges them. 

As I started to move away from ROOT to the python environment, I kind of miss hadd. So I wrote a script that emulates it to merge numpy arrays from multiple .npz files. It can be used in the following way (I named the script as 'hadd_npz.py'):

```
python hadd_npz.py out_add.npz out_*.npz
```

The script:

``` python
#!/usr/bin/env python

import numpy as np
import os

"""
This implements the ability to merge .npz files. It emulates the interface
of the utility 'hadd' in ROOT (see <https://root.cern.ch/how/how-merge-histogram-files>).
"""

class Hadd(object):
  def __init__(self):
    self.d = {}
    self.dout = {}

  def run(self, target, source, force=False):
    print('hadd Target file: {0}'.format(target))

    if not force:
      if os.path.isfile(target):
        print('hadd error opening target file (does {0} exist?).'.format(target))
        print('Pass "-f" argument to force re-creation of output file.')

    # Loop over the source files
    for i, s in enumerate(source):
      print('hadd Source file {0}: {1}'.format(i, s))
      with np.load(s) as data:
        if i == 0:
          for k in data.files:
            self.d[k] = []
        # Loop over all the keys
        for k in data.files:
          self.d[k].append(data[k])

    # Merge via np.vstack()
    print('hadding...')
    for k, v in self.d.iteritems():
      vv = np.vstack(v)
      self.dout[k] = vv

    # Write to the target file
    np.savez_compressed(target, **self.dout)
    print('DONE')


if __name__ == '__main__':
  import argparse
  parser = argparse.ArgumentParser(description='hadd for npz files.')
  parser.add_argument('-f', '--force', action='store_true', help='Force write the target file')
  parser.add_argument('target', help='target file')
  parser.add_argument('source', nargs='+', help='source files')
  args = parser.parse_args()

  hadd = Hadd()
  hadd.run(args.target, args.source, force=args.force)
```

