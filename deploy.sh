#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'New deployment'

git push -f git@github.com:bitardev/test-assignment-task-manager.git master:gh-pages

cd -