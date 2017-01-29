#!/bin/sh

echo "Running prettier on modified files"
git diff --name-only HEAD | grep ".*\.js" | xargs prettier --write

