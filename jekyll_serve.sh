#!/bin/bash

PATH="$PATH:$(ruby -e 'puts Gem.user_dir')/bin"

bundle exec jekyll serve --host 127.0.0.1
