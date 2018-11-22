//webpack.base.config
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin'); //配置js的压缩和打包
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //配置css打包

module.exports = {
    entry : './src/assets/main.js',//入口文件
    output : {//输出文件
        filename : '[name]index.js',//输出文件名
        path : path.resolve(__dirname,'dist')//输出文件路径
    },
    devServer: { // 检测代码变化并自动重新编译并自动刷新浏览器
        contentBase: path.resolve(__dirname, 'dist') // 设置静态资源的根目录
    },
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
            },
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
    plugins:[
        // new uglify(), //插件是多个插件，所以是数组
        new ExtractTextPlugin(path.resolve(__dirname,"dist/index.css"))
    ],
};