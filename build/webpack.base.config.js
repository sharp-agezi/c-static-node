//webpack.base.config
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin'); //配置js的压缩和打包

module.exports = {
    entry : './src/js/entry.js',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path : __dirname + '/out'//输出文件路径
    },
    plugins:[
        new uglify() //插件是多个插件，所以是数组
    ]
};