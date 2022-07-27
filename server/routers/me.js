const express = require('express')
const pool = require('../pool.js')

const me = express.Router()

me.post('/me', (req, res, next) => {
  var uname = req.body.uname
  pool.query('select * from food_user where uname=?', [uname], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.length > 0) {
      res.send({ code: 200, msg: '查询成功', data: r })
    } else {
      res.send({ code: 404, msg: '查询失败' })
    }
  })
})

me.put("/setusername", (req, res, next) => {
  pool.query('update food_user set user_name=? where uid=?', [req.body.username, req.body.uid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: "用户名修改成功", data: req.body.username })
    } else {
      res.send({ code: 201, msg: "用户名修改失败" })
    }
  })
})

me.get('/textpwd', (req, res, next) => {
  pool.query("select uid from food_user where upwd=?", [req.query.upwd], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.length > 0) {
      res.send({ code: 200, msg: '查询原密码成功' })
    } else {
      res.send({ code: 404, msg: "查询原密码失败" })
    }
  })
})

me.put("/setupwd", (req, res, next) => {
  pool.query('update food_user set upwd=? where uid=?', [req.body.upwd, req.body.uid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: "密码修改成功" })
    } else {
      res.send({ code: 201, msg: "密码修改失败" })
    }
  })
})

me.put("/setsex", (req, res, next) => {
  pool.query('update food_user set gender=? where uid=?', [req.body.gender, req.body.uid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: "性别修改成功" })
    } else {
      res.send({ code: 201, msg: "性别修改失败" })
    }
  })
})

me.put("/setphone", (req, res, next) => {
  pool.query('update food_user set phone=? where uid=?', [req.body.phone, req.body.uid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: "手机号修改成功", data: req.body.phone })
    } else {
      res.send({ code: 201, msg: "手机号修改失败" })
    }
  })
})

me.put("/setemail", (req, res, next) => {
  pool.query('update food_user set email=? where uid=?', [req.body.email, req.body.uid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: "邮箱修改成功", data: req.body.email })
    } else {
      res.send({ code: 201, msg: "邮箱修改失败" })
    }
  })
})

module.exports = me