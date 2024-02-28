var db=require('../models')
var User =db.user;

var adduser=async(req,res)=>{
//const jane = User.build({ firstName: "Jane" });
const jane = await User.create({ firstName: "puneet" ,lastName: "kumar"});
console.log(jane instanceof User); // true
console.log(jane.firstName); // "Jane"
//await jane.save();
console.log('Jane was saved to the database!');
res.status(200).json(jane.toJSON());
}

module.exports={
    adduser
}