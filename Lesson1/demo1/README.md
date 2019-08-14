# 安装步骤
## 生成package.json文件
+ npm init -y

## 安装webpack4 和 webpack-cli
+ npm install -D webpack webpack-cli 生成node_modules文件


# 打包
## 在package.json 中配置
+ 在"scripts"中，配置"build":"webpack"
+ 然后在命令行中运行 npm run build ,打包

## 在webpack打包的同时自动生成html页面
+ 需要安装一个html-webpack-plugin插件  npm install -D html-webpack-plugin
+ 在webpack.config.js文件中引入 const HtmlWebpackPlugin = require("html-webpack-plugin")
+ 然后在webpack.config.js.中配置plugin 
+ 这时再打包的话，就会在 dist文件夹下生成 index.html文件
