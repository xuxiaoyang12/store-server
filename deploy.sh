#!/usr/bin/bash

## 打包
echo '开始打包 >>> '
cd ~/workspace/typrea-doc/ && npm run docs:build

## 部署到node服务器

echo '开始部署 >>> '
rm -rf ~/workspace/nodeApp/public/docs/*  && cp -r  ~/workspace/typrea-doc/docs/.vuepress/dist/*  ~/workspace/nodeApp/public/docs/

echo '部署完成 >>> '

