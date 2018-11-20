/**首页路由**/
const fs = require('fs');

const home = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./src/views/index.html');
};




module.exports={
    home:home
};