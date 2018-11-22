//webpack.base.config
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin'); //配置js的压缩和打包
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //配置css打包

module.exports = {
    entry : './src/main.js',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path : __dirname + 'dist'//输出文件路径
    },
    plugins:[
        // new uglify(), //插件是多个插件，所以是数组
        new ExtractTextPlugin({ //处理css 插件
            filename:"css/index.css"
        })
    ],
    resolve: {
        extensions: ['.js'],
    },
    module:{
        rules:[
            {
                test:'/\.scss$/',
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:'/\.css$/',
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test:'/\.scss$/',
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader"
                    },{
                        loader:"sass-loader"
                    }]
                })
            }
        ]
    },
    devServer:{}
};