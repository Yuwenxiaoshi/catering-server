const express = require('express')
const icon = express.Router()

//配置multer中间件
const multer = require('multer')
obj = multer.diskStorage({
  destination: function (req, file, cb) { //指定目录
    cb(null, '../public/Icon')
  },
  filename: function (req, file, cb) { // 指定文件名
    let name = file.originalname
    // name:  abcd.jpg    xxxdfdd.zip
    let ext = name.substr(name.lastIndexOf('.'))
    cb(null, uuid.v4() + ext)
  }
})
const uploadTools = multer({
  storage: obj
})
const uuid = require('uuid')

//接收请求 参数名为uploadFile
icon.post('/upload',
  uploadTools.array('uploadFile'), (req, res) => {
    console.log(req.files)
    let urls = []
    req.files.forEach(item => {
      urls.push(`http://127.0.0.1:3030/Icon/${item.filename}`)
    })
    res.send({ code: 200, msg: 'ok', urls })
  })

module.exports = icon