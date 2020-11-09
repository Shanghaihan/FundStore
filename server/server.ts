
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
var express = require('express');
const app = express();
const userApi = require('./api/user.ts');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.all('*', (req, res, next) => {
    const { origin, Origin, referer, Referer } = req.headers;
    const allowOrigin = origin || Origin || referer || Referer || '*';
      res.header("Access-Control-Allow-Origin", allowOrigin);
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      res.header("Access-Control-Allow-Credentials", true); //可以带cookies
      res.header("X-Powered-By", 'Express');
      if (req.method === 'OPTIONS') {
        res.sendStatus(200);
      } else {
      next();
      }
  });

//路由文件
app.use('/api/user',userApi);

// 监听端口
app.listen(3300);
console.log('success listen at port:3300');
