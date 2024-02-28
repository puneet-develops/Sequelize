const express = require('express')
var bodyParser = require('body-parser')
const app = express()
require('./models');
let userctrl=require('./controllers/userController')

app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/add',userctrl.adduser)

app.listen(3000,()=>{
    console.log("app will run on 3000");

});
