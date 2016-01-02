#!/usr/bin/env python

import os
import sys
import datetime


# Configurations
ext = 'md'
#postdir = '_posts/'
postdir = 'blog/_posts/'
title = 'title me'
content = 'write me'

# Sanity checks
if not postdir.endswith('/'):
  postdir += '/'

if ext not in ['md', 'html']:
  raise Exception('Invalid extension: %s' % ext)

# Main function
def main():

  # Get the current UTC time
  now = datetime.datetime.utcnow()

  # Decide post name
  # Increment post number if multiple posts in one day
  i = 1
  filename = '%s-post-%i.%s' % (now.date(), i, ext)

  while True:
    if filename not in os.listdir(postdir):
      break
    i += 1
    filename = '%s-post-%i.%s' % (now.date(), i, ext)

  writeme = [
    '---',
    'layout: post',
    'date: %s %s' % (now.date(), now.time()),
    'title: %s' % title,
    '---',
    '',
    '%s' % content,
  ]

  with open(postdir+filename, 'w') as f:
    f.write('\n'.join(writeme))

  print("[INFO] Created %s" % (postdir+filename))


if __name__ == '__main__':
  main()

