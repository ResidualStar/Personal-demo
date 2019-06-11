// 专门存放路由的文件 

// 1.
// module.exports = function(sever, fs) { // 放入接口函数中 require就可以直接调用自己了
//     sever.get('/', function(req, res) { // 传入参数sever fs 
//         fs.readFile('./db.json', 'utf8', function(error, data) {
//             if (error) {
//                 res.send("<h1>页面失联啦</h1>")
//             }
//             console.log(data);
//             res.render('leave.html', {
//                 fruits: [
//                     '苹果',
//                     '香蕉',
//                     '橘子',
//                     '茄咋'
//                 ],
//                 students: JSON.parse(data).students
//             })

//         })

//     })
// }



let student = require('./student')

// 2.
let express = require('express')

// let fs = require('fs')
//如何分离路由 
// 1.创建一个路由容器 
let router = express.Router()

// 2.将所有的路由都挂在至容器内
router.get('/', function(req, res) {
    student.find(res)

    // fs.readFile('./db.json', 'utf8', function(error, data) {
    //     if (error) {
    //         res.send("<h1>页面失联啦</h1>")
    //     }
    //     // console.log(data);
    //     res.render('leave.html', {
    //         fruits: [
    //             '苹果',
    //             '香蕉',
    //             '橘子',
    //             '茄咋'
    //         ],
    //         students: JSON.parse(data).students
    //     })

    // })

})

router.post('/public/new', function(req, res) {
    student.finds(res, req)

})

router.get('/public/new', function(req, res) {
    student.save(res, req)

})

router.get('/public/togg', function(req, res) {
    student.add(res, req);
})

router.get('/public/del', function(req, res) {
        student.del(res, req)

    })
    // 3. 导出router
module.exports = router