#### 项目启动 npm start

koa-static 静态资源配置
koa-ejs  koa的ejs 模板
koa-router koa路由

babel-core babel-loader babel-preset-env babel-preset-react  打包js
node-sass sass-loader 配置打包sass
extract-text-webpack-plugin  配置生成css

webpack-dev-server   webpack服务

##### koa-ejs use
var render = require('koa-ejs');
	render(app, {
    	root: path.join(__dirname, 'views'),
    	layout: '__layout',
    	viewExt: 'html',
   	 cache: false,
    	debug: true
	});
	app.use(function *(){
    	yield this.render('index',{layout:false});
	});
##### Koa-router
router.get()
router.post()
router.put()
router.del()
router.patch()