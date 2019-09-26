#!/usr/bin/env bash
npm run build
rm -r ../backend/src/main/resources/static
cp -r dist ../backend/src/main/resources/static
rm ../backend/src/main/resources/static/index.html
cp dist/index.html ../backend/src/main/resources/templates/
