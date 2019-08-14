# output的配置
...js
module.exports = {
    entry:{
        index:"./src/index.js"
    },
    mode:"development",
    output: {
        filename:'[name].[hash:6].js'
    }
}

+ 其中 output中的name 指的是 entry 中的index,[hash:6]是实现每次打包出来的文件出口名都不一样，且只取hash值的前6位
...