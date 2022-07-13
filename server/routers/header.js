const express=require('express')
const pool=require('../pool.js')
const header=express.Router()

header.get('/lbt',(req,res,next)=>{
  pool.query('select img from food_index_carousel',[],(err,r)=>{
    if(err){
      next(err)
      return
    }
    if(r.length>0){
      res.send({code:200,msg:"查询成功",data:r})
    }else{
      res.send({code:404,msg:"查询失败"})
    }
  })
})
header.get('/rx',(req,res,next)=>{
  pool.query('select title,subtitle,img from food_index_laptop',[],(err,r)=>{
    if(err){
      next(err)
      return
    }
    if(r.length>0){
      res.send({code:200,msg:"查询成功",data:r})
    }else{
      res.send({code:404,msg:"查询失败"})
    }
  })
})
header.get('/hd',(req,res,next)=>{
  pool.query('select title,subtitle,img from food_index_laptop',[],(err,r)=>{
    if(err){
      next(err)
      return
    }
    if(r.length>0){
      res.send({code:200,msg:"查询成功",data:r})
    }else{
      res.send({code:404,msg:"查询失败"})
    }
  })
})

module.exports=header