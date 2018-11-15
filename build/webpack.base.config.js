//webpack.base.config
const path = require('path');

module.exports = {
    entry : './src/js/entry.js',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path : __dirname + '/out'//输出文件路径
    },
};