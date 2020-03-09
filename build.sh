echo 'start script'
rm -rf dist
mkdir dist
cp src/index.html dist/index.html
mkdir dist/styles
cp src/**/main.css dist/styles
cp -r src/assets dist
cp -r src/js dist
echo 'end script. Build files in ./dist'
