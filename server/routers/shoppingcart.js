const express = require('express')
const pool = require('../pool.js')

const shoppingcart = express.Router()

shoppingcart.get('/shopping', (req, res) => {
  pool.query('select product_id,limg,title,subtitle,price,count,is_checked from food_shoppingcart_item where user_id=(select uid from food_user where uname=?)', [req.query.uname], (err, r) => {
    if (err) throw err
    if (r.length > 0) {
      res.send({ code: 200, msg: '查询成功', data: r })
    } else {
      res.send({ code: 404, msg: "购物车为空" })
    }
  })
})
shoppingcart.put('/put', (req, res, next) => {
  pool.query('update food_shoppingcart_item set is_checked=? where  user_id=(select uid from food_user where uname=?) and product_id=?', [req.body.check, req.body.uname, req.body.lid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: '修改成功' })
    } else {
      res.send({ code: 201, msg: '修改失败' })
    }
  })
})

shoppingcart.put('/putall', (req, res, next) => {
  pool.query('update food_shoppingcart_item set is_checked=0 where user_id=(select uid from food_user where user_name=?)', [req.body.user_name], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: '修改成功' })
    } else {
      res.send({ code: 201, msg: '修改失败' })
    }
  })
})
//
shoppingcart.put('/putselect', (req, res, next) => {
  console.log(req.body);
  pool.query('update food_shoppingcart_item set count=? where user_id=(select uid from food_user where uname=?) and product_id=?', [req.body.count, req.body.uname, req.body.lid], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: '修改成功' })
    } else {
      res.send({ code: 201, msg: '修改失败' })
    }
  })
})

shoppingcart.delete('/buy', (req, res) => {
  pool.query('delete from food_shoppingcart_item where user_id=(select uid from food_user where uname=?) and is_checked=1', [req.query.uname], (err, r) => {
    if (err) throw err
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: '删除成功' })
    } else {
      res.send({ code: 201, msg: '删除失败' })
    }
  })
})

shoppingcart.delete('/delPd', (req, res) => {
  pool.query('delete from food_shoppingcart_item where user_id=(select uid from food_user where uname=?) and product_id=?', [req.query.uname, req.query.id], (err, r) => {
    if (err) throw err
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: '删除成功' })
    } else {
      res.send({ code: 201, msg: '删除失败' })
    }
  })
})

module.exports = shoppingcart