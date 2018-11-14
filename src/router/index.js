/**首页路由**/
const fs = require('fs');

const index = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./src/views/index.html');
};

module.exports={
    home:index
};