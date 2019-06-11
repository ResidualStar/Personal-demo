//  数据操作模块
let fs = require('fs')
    // 首页 
exports.find = function(res) { // 文件操作为异步操作 要想获取异步操作的数据则需要使用回调函数
    return (fs.readFile('./db.json', 'utf8', function(error, data) {
        if (error) {
            res.send("<h1>页面失联啦</h1>")
        }
        // console.log(data);
        res.render('leave.html', {
            fruits: [
                '苹果',
                '香蕉',
                '橘子',
                '茄咋'
            ],
            students: JSON.parse(data).students
        })
    }))
}

// 增
exports.finds = function(res, req) {
    // 获取post请求数据 
    // let comment = req.body
    // fs.readFile('./db.json', 'utf8', function(error, data) {
    //     if (error) {
    //         res.send("<h1>页面失联啦</h1>")
    //     }
    //     data = JSON.parse(data).students
    //     comment.id = data[data.length - 1].id + 1
    //     data.push(req.body)

    //     let obj = {}
    //     obj.students = data
    //     data = JSON.stringify(obj)
    //     console.log(comment);
    //     // 将数据放入指定文件中 
    //     fs.writeFile('./db.json', data, function(err) {
    //         if (err) {
    //             console.log('失败了');
    //             return
    //         }
    //         console.log('成功了');

    //     })
    // })
    res.redirect('/') // 重定向 相当于地址跳转转换 
        // console.log(req.body);
}

// 改
exports.save = function(res, req) {
    // 修改数据 存入文件  
    let comment = req.query
    fs.readFile('./db.json', 'utf8', function(error, data) {
        if (error) {
            res.send("<h1>页面失联啦</h1>")
        }
        data = JSON.parse(data).students
        data[comment.hidden - 1] = { id: comment.hidden, name: comment.name, age: comment.age, gender: comment.gender, hobbies: comment.hobbies }
        let obj = {}
        obj.students = data
        data = JSON.stringify(obj)


        // console.log(data);
        // 将数据放入指定文件中
        fs.writeFile('./db.json', data, function(err) {
            if (err) {
                console.log('失败了');
                return
            }
            console.log('成功了');

        })
    })
    res.redirect('/') // 重定向 相当于地址跳转转换 
        // console.log(req.body);



}

// 删 
exports.del = function(res, req) {
    let comment = req.query.id
    comment = comment - 1
    fs.readFile('./db.json', 'utf8', function(error, data) {
        if (error) {
            res.send("<h1>页面失联啦</h1>")
        }
        data = JSON.parse(data).students
        data.splice(comment, 1)
        for (var i = comment; i < data.length; i++) {
            data[i].id -= 1
        }
        // console.log(data);
        let obj = {}
        obj.students = data
        data = JSON.stringify(obj)
            // 将数据放入指定文件中
        fs.writeFile('./db.json', data, function(err) {
            if (err) {
                console.log('失败了');
                return
            }
            console.log('成功了');

        })
    })
    res.redirect('/') // 重定向 相当于地址跳转转换 
        // console.log(req.body);
}

exports.add = function(res, req) {
    // 获取数据 获取要修改的id
    let comment = req.query;
    // 获取数据库数据
    fs.readFile('./db.json', 'utf8', function(error, data) {
        if (error) {
            res.send("<h1>页面失联啦</h1>")
        }
        data = JSON.parse(data).students
        let num = data.find(function(item) {
                return item.id == comment.id
            })
            // console.log(num);
        res.render('togg.html', {
            students: num
        })

    })


    // res.render('togg.html');




}