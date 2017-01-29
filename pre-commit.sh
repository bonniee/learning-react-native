echo "Running prettier on modified files"
git diff --name-only | grep ".*\.js" | xargs prettier --write

