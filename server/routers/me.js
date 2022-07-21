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

module.exports = me