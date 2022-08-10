const express = require('express')
const cors = require('cors')
const app = express()

app.listen(3030, () => {
	console.log("端口3030监听成功");
})

//解决跨域
app.use(cors('*'))


//解决报错停止运行
app.use(express.urlencoded({
	extended: false
}))



app.use((err, req, res, next) => {
	//err 接收到的路由传递过来的错误
	console.log(err)
	//响应给前端
	res.send({ code: 500, msg: '服务器端错误' })
})

app.use(express.static('../public'))

const loginRouter = require("./routers/login.js")
app.use('/v2/pro', loginRouter)
const registerRouter = require('./routers/register.js')
app.use('/v2/pro', registerRouter)
const prolistRouter = require('./routers/prolist.js')
app.use('/v2/pro', prolistRouter)
const headerRouter = require('./routers/header.js')
app.use('/v2/pro', headerRouter)
const activityRouter = require('./routers/activity.js')
app.use('/v2/pro', activityRouter)
const shoppingcartRouter = require('./routers/shoppingcart.js')
app.use('/v2/pro', shoppingcartRouter)
const meRouter = require('./routers/me.js')
app.use('/v2/pro', meRouter)
const iconRouter = require('./routers/Icon.js')
app.use('/v2/pro', iconRouter)
const locationRouter = require('./routers/location.js')
app.use('/v2/pro', locationRouter)