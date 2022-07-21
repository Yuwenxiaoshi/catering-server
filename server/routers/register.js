const express=require('express')
const pool=require('../pool.js')

const register=express.Router()

register.get('/check_user_name',(req,res,next)=>{
  const user_name=req.query.user_name
  if(!user_name){
    res.send({code:404,msg:"请输入用户名"})
    return
  }
  pool.query('select uid from food_user where user_name=?',[user_name],(err,r)=>{
    if(err){
      next(err)
      return
    }
    if(r.length>0){
      res.send({code:201,msg:'用户名重复'})
    }else{
      res.send({code:200,msg:'用户名可用'})
    }
  })
})
register.get('/check_uname',(req,res,next)=>{
  const uname=req.query.uname
  if(!uname){
    res.send({code:404,msg:"请输入帐号"})
    return
  }
  pool.query('select uid from food_user where uname=?',[uname],(err,r)=>{
    if(err){
      next(err)
      return
    }
    if(r.length>0){
      res.send({code:201,msg:'帐号重复'})
    }else{
      res.send({code:200,msg:'帐号可用'})
    }
  })
})

register.post('/register',(req,res,next)=>{
  console.log(req.body);
  const user_name=req.body.user_name
  const uname=req.body.uname
  const upwd=req.body.upwd
  const uemail=req.body.uemail
  const uphone=req.body.uphone
  const tx='http://127.0.0.1:3030/img/left.png'
  pool.query('INSERT INTO food_user VALUES(null,?,?,?,?,?,?,null)',[uname,upwd,uemail,uphone,tx,user_name],(err,r)=>{
    if(err){
			//如果SQL中有错误，交给下一个错误处理中间件
			next(err)
			//阻止往后执行
      res.send({code:203,msg:'用户名,帐号重复或信息不完整'})
			return
		}
    if(r.affectedRows>0){
      res.send({code:200,msg:'创建成功'})
    }else{
      res.send({code:201,msg:'创建失败'})
    }
  })
})

module.exports=register