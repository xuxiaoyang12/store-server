#!/bin/bash
# author xiaoyang
# date 2022-07-09

# 提供打印日志的工具包
# 执行打印不同级别的颜色


## 通用日志打印 支持颜色

## 通用日志打印
function log() {
	echo -e "\e[$1m "\>\>\> $2 \>\>\>  $3" \e[0m"
}

## 彩色日志打印
function logInfo() {
	log 32 "$1" "$2"
}

## 错误日志打印
function logError() {
	log 31 "$1" "$2"
}