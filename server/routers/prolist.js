const express = require('express')
const pool = require('../pool')

const prolist = express.Router()

prolist.get('/prolist', (req, res, next) => {
  let name = req.query.lname
  name = name ? `%${name}%` : '%_%'
  pool.query('select lid,title,subtitle,price,img from food_laptop where title like ?', [name], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.length > 0) {
      res.send({ code: 200, msg: "查询成功", data: r })
    } else {
      res.send({ code: 404, msg: "查询失败" })
    }
  })
})

prolist.get('/prolistbtn', (req, res, next) => {
  let name = req.query.lname
  name = name ? `%${name}%` : '%_%'
  pool.query('select title,subtitle,price,img from food_laptop where title like ? limit ?,8', [name, req.query.btns], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.length > 0) {
      res.send({ code: 200, msg: "查询成功", data: r })
    } else {
      res.send({ code: 404, msg: "查询失败" })
    }
  })
})

prolist.post('/postlist', (req, res, next) => {
  pool.query('INSERT INTO food_shoppingcart_item VALUES(null,?,?,(select uid from food_user where uname=?),?,?,?,1,0)', [req.body.img, req.body.subtitle, req.body.uname, req.body.lid, req.body.title, req.body.price], (err, r) => {
    if (err) {
      next(err)
      res.send({ code: 201, msg: "添加失败" })
      return
    }
    if (r.affectedRows > 0) {
      res.send({ code: 200, msg: "添加成功" })
    } else {
      res.send({ code: 201, msg: "添加失败" })
    }
  })
})

prolist.get("/getPD", (req, res, next) => {
  pool.query('select title,subtitle,price,img from food_laptop where lid=?', [req.query.id], (err, r) => {
    if (err) {
      next(err)
      return
    }
    if (r.length > 0) {
      res.send({ code: 200, msg: "查询成功", data: r })
    } else {
      res.send({ code: 201, msg: "查询失败" })
    }
  })
})



module.exports = prolist