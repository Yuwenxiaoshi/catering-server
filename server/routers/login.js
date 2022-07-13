const express = require("express")
const pool=require("../pool.js")

const login=express.Router()

login.post('/login',(req,res,next)=>{
  var u=req.body.uname
  var p=req.body.upwd
  pool.query('select uid,user_name from food_user where uname=? and upwd=?',[u,p],(err,r)=>{
    if(err){
      next(err)
      return
    }
    if(r.length>0){
      res.send({code:200,msg:"login success",data:r})
    }else{
      res.send({code:404,msg:'login fail'})
    }
  })
})

module.exports=login
