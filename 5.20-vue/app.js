//引入express
let express = require('express');

//引入ejs模块
let ejs = require('ejs');

//构建应用
let app = new express();

//更改ejs的默认后缀，ejs的后缀默认是.ejs 将其改为.html
app.engine('.html', ejs.__express);

//静态化
app.use('/dist/', express.static('./dist'));

//设置用户的请求
app.get('*',(req,res) => {
    res.render('../04 路由策略.html');
    console.log('草')
});

//监听端口号
app.listen(3000,() => {
    console.log('服务器动了')
});