var db=require('../models')
var User =db.user;
var Contact=db.contact;

var adduser=async(req,res)=>{
//const jane = User.build({ firstName: "Jane" });
const jane = await User.create({ firstName: "antino" ,lastName: "labs"});
console.log(jane instanceof User); // true
console.log(jane.firstName); // "Jane"
//await jane.save();
console.log('antino  was saved to the database!');
res.status(200).json(jane.toJSON());
}
var addcontact=async(req,res)=>{
//const antino = User.build({ firstName: "Jane" });
const antino = await Contact.create({ firstName: "antino" ,lastName: "labs",phone:"1787872"});
console.log(antino instanceof Contact); // true
console.log(antino.phone); // "antno"
//await antino.save();
console.log('antino  was saved to the database!');
res.status(200).json(antino.toJSON());
}

module.exports={
    adduser,
    addcontact
}