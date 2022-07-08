#!/bin/bash

## 项目目录
srcDir="/home/xuxy/workspace/store-server"
#srcDir="D:\workspace\xuxy\lanli"
## 原目录
sourceDir="${srcDir}/docs/.vuepress/dist/"
## 目标目录
## 文档
targetDir="/home/xuxy/workspace/nodeApp/public/docs"
## 组件
#targetDir="/home/xuxy/workspace/nodeApp/public/dist"

#npm run docs:build

## 构建命令
#buildShell="npm run build"
buildShell="npm run docs:build"

## 判断是否已经更新
includeStr="Already"
## 本地是否修改
isModify="modified"
## 构建是否成功
isBuild="complete"

date=$(date '+%Y-%m-%d-%H-%M-%S')

## 通用日志打印 支持颜色
log() {
	echo -e "\e[$1m "\>\>\> $2 \>\>\>  $3" \e[0m"
}

## 彩色日志打印
logInfo() {
	log 32 "$1" "$2"
}

## 错误日志打印
logError() {
	log 31 "$1" "$2"
}

# 合并and更新
merge() {

  if [ ! -d "$srcDir" ]; then
    logError "目录不存在 ： $srcDir,需要重配置项目目录"
    if [[ $1 == 0 ]]; then
      logError "执行退出！！！"
      exit;
    fi
    logError "尝试当前目录是否为项目目录，开始执行"
  else
    logInfo " 进入项目目录 $srcDir"
    $(cd $srcDir)
  fi

	logInfo "1、执行命令" "git status"
	isMod=$(git status | grep $isModify)
	logInfo "2、执行命令" "git add ."
	git add .
	logInfo "3、执行命令" "git commit -m $date执行提交记录"
	git commit -m "$date 执行提交记录"
	logInfo "4、执行命令" 'git pull origin master'
	result=$(git pull origin master | grep $includeStr)
	logInfo "5、执行命令" 'git push origin master'
	git push origin master

	logInfo "本地代码是否更新：$isMod" "远程代码是更新：$result"
	## 判断是否需要部署服务
	if [[ ! "$result" =~ "$includeStr" ]]; then
    logInfo "远程代码更新 "
    return 1
  fi
  if [[ "$isMod" =~ "$isModify"  ]]; then
    logInfo "本地代码更新 "
    return 1
  fi
  logInfo "本地/远程代码均未更新 ，无需部署 $date ,流程结束"
  return 0
}


# 构建
build() {
  ## 设置环境变量
  export NODE_OPTIONS=--openssl-legacy-provider
	logInfo "开始构建项目 项目目录:$srcDir"
	cd $srcDir || exit
	## 获取构建结果
	buildResult=$($buildShell | grep $isBuild)
  logInfo "构建结果: $buildResult"
	if [[ "$buildResult" =~ $isBuild ]]
  then
    logInfo "构建成功，开始部署"
    deploy
  else
    logInfo "希望下次合作"
  fi
}

## build

# 部署
deploy() {

	logInfo "开始部署项目 部署文件目录:$sourceDir  目标文件路径：$targetDir"
	cd $srcDir || exit
	rm -rf $targetDir && cp -r $sourceDir $targetDir
	logInfo "移动文件成功 ，可以通过node服务访问 端口：3000"
}

# 构建+部署
# shellcheck disable=SC2120
buildAndDeploy() {
	merge $1
  isUpdate=$(echo $?)
  if [[ "$isUpdate" == 1 ]]
  then
    logInfo "代码存在更新，开始构建部署"
    build
    logInfo "代码存在更新，完成构建部署"
  else
    logInfo "无需部署 流程结束"
  fi
}

if [[ $1 == "merge"  ]]
then
  ## 合并代码
	merge $2
elif [ $1 == "build" ]; then
  ## 构建部署
  build
else
  ## 更新代码 并构建部署
  buildAndDeploy
fi


