#!/usr/bin/env sh

set -e

npm run build

cd dist

touch README.md
echo "#### Address： https://zju-summer-camp.github.io/summer-frontend/#????????/" >> README.md
git init
git add -A
git commit -m 'feat: deploy'

git push -f git@github.com:zju-summer-camp/summer-frontend.git master:dist