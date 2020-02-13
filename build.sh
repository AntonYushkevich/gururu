rm -rf dist
mkdir dist
cp src/index.html dist/index.html
mkdir dist/css
cp src/**/main.css dist/css
cp -r src/assets dist
cp -r src/js dist
