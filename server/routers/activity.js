const express=require("express")
const pool=require('../pool')

const activity=express.Router()

activity.get('/activity',(req,res,next)=>{
  let atime=req.query.atime || "%_%"
  pool.query('select img,aname,title from food_activity_laptop where atime like ?',[atime],(err,r)=>{
    if(err){
      next(err)
      return
    }
    if(r.length){
      res.send({code:200,msg:"成功",data:r})
    }
  })
})

module.exports=activity