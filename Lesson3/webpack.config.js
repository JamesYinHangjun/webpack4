const path = require("path")

module.exports = {
    entry:{
        index:"./src/index.js"
    },
    mode:"development",
    output: {
        filename:'[name].[hash:6].js',
        path:path.join(__dirname,'release')
    }
}