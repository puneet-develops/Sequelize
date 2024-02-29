const express = require('express')
var bodyParser = require('body-parser')
const app = express()
require('./models');
let userctrl=require('./controllers/userController')

app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/adduser',userctrl.adduser);
app.post('/addcontact',userctrl.addcontact);
app.get('/users',userctrl.getusers);
app.get ('/users/:id',userctrl.getuser);
app.get('/contacts',userctrl.getcontacts);
app.get ('/contacts/:id',userctrl.getcontact);
app.delete ('/users/:id',userctrl.deleteuser);
app.delete ('/contacts/:id',userctrl.deletecontact);
app.patch ('/users/:id',userctrl.patchuser);
app.patch ('/contacts/:id',userctrl.patchcontact);




app.listen(3000,()=>{
    console.log("app will run on 3000");

});
