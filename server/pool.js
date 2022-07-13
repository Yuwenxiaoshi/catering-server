const mysql=require('mysql')

const pool=mysql.createPool({
  user:'root',
  database:'cy',
})

module.exports=pool