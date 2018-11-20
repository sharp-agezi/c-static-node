'use strict';
const Koa = require('koa'),
    fs = require('fs'),
    app = new Koa(),
    router =require('koa-router')(),
    staticService = require('koa-static'),
    path = require('path'),
    render = require('koa-ejs');

/**
 *当请求开始时首先请求流通过 x-response-time 和 logging 中间件,
  然后继续移交控制给 response 中间件。
  当一个中间件调用 next() 则该函数暂停并将控制传递给定义的下一个中间件。
  当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。
 */
//logging
app.use(async (ctx, next)=>{
    await next();
    const rt = ctx.response.get('X-Response-Time');
    // console.log(`${ctx} - ${rt}`);
});

//x-response-time
app.use(async (ctx, next)=>{
    const start = Date.now();
    await next();
    const ms = Date.now() -start;
    ctx.set('X-Response-Time', `${ms}ms`)
});

//response

//静态资源配置
app.use(staticService(path.join(__dirname,'src/assets')));
console.log(render)
//koa-ejs
// render(app,{
//     root: path.join(__dirname, 'src/views'),
//     layout: 'templates/head/head',
//     viewExt: 'html',
//     cache: false,
//     debug: true
// });
// app.use(function *(){
//     yield this.render('index',{layout:false});
// });

//router
const index = require('./src/router/index').home; //index
router.get('/',index)

app.use(router.routes());
app.listen(3000, ()=>{
    console.log('listenning on 3000 ---http://localhost:3000')
});