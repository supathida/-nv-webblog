let exprss = require('express')
const app = exprss() 
let bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/status', function (req, res){
    res.send('Hello nodejs server')
})

app.get('/hello/:person', function (req,res) {
    console.log('hello - ' + req.params.person)
    res.send('sey hello with ' + req.params.person)
})

// get user by id
app.get('/user/:userId', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน: '+ req.params.userId)
})
// get all user
app.get('/users', function (req, res) {
    res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')
})

let port = 8081

app.listen(port, function () {
    console.log('server running on ' + port)
})
