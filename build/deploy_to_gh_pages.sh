cd dist
git init
git config user.name "travis@travis-ci.org"
git config user.email "Travis"
git add .
git commit -m "Update docs"
git push -f "https://${GITHUB_TOKEN}@github.com/vueComponent/vue-antd-issue-helper.git" master:gh-pages

echo "Done updating gh-pages\n"

else
 echo "Skipped updating gh-pages, because build is not triggered from the master branch."
fi;