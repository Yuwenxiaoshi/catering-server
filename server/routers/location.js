const express = require('express')
const pool = require('../pool.js')

let loca = express.Router()

loca.get('/loac', (req, res, next) => {
  pool.query('select * from food_location_item where user_id=?', [req.query.uid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.length > 0) {
      res.send({ code: 200, msg: "地址查询成功", data: r })
    } else {
      res.send({ code: 404, msg: "地址查询失败" })
    }
  })
})

loca.post('/postLoac', (req, res, next) => {
  let { lname, lphone, province, city, county, addressDetail, user_id, postalCode, isDefault } = req.body
  pool.query('INSERT INTO food_location_item VALUES(null,?,?,?,?,?,?,?,?,?)', [lname, lphone, province, city, county, addressDetail, user_id, postalCode, isDefault], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: "地址添加成功" })
    } else {
      res.send({ code: 201, msg: "地址添加失败" })
    }
  })
})

loca.put('/setDefaultFalse', (req, res, next) => {
  pool.query('update food_location_item set isDefault=false where user_id', [req.body.uid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: '默认为否设置成功' })
    } else {
      res.send({ code: 201, msg: '默认为否设置失败' })
    }
  })
})

loca.put('/setDefault', (req, res, next) => {
  pool.query('update food_location_item set isDefault=true where tid=?', [req.body.tid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: '默认为是设置成功' })
    } else {
      res.send({ code: 201, msg: '默认为是设置失败' })
    }
  })
})

module.exports = loca