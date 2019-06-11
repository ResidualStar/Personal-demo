let express = require('express')

let router = require('./router.js')

let sever = express()

sever.engine('html', require('express-art-template'))

sever.use('/node_modules/', express.static('./node_modules/'))

sever.use('/public/', express.static('./public/')) // 开放的文件就可以直接通过/public/来访问该文件目录下的文件

sever.use(router) // 将路由容器挂在至sever服务中  相当于将容器内挂载的路由重新挂载至sever服务中
    // router(sever, fs)

sever.listen(5000, function() {
    console.log('running ...');

})