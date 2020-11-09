/* eslint-disable */
var models = require('../db.ts');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
 //增加用户接口
router.post('/addUser',(req,res)=>{
    let sql= 'insert into userTable(username,password,email,status,state) values (?,?,?,?,?)';
    let params = req.body;
    conn.query(sql,[params.username,params.password,params.email,"user",true],function(err,result){
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (result) {
            jsonWrite(res, result);
        }

    })


});
router.post('/findUser',(req,res)=>{
    let params = req.body;
    let sql ='select * from userTable where username="'+params.username+'" and password="'+params.password+'"';
    conn.query(sql,function(err,result){
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })

})

module.exports = router;