var db = require("../models");
var User = db.user;
var Contact = db.contact;

var adduser = async (req, res) => {
  // //const jane = User.build({ firstName: "Jane" });
  // const jane = await User.create({ firstName: "antino" ,lastName: "labs"});
  // console.log(jane instanceof User); // true
  // console.log(jane.firstName); // "Jane"
  // //await jane.save();
  // console.log('antino  was saved to the database!');
  // res.status(200).json(jane.toJSON());
  var postdata = req.body;
  if(postdata.length>1){
    var data=await User.bulkCreate(postdata);
  }else{
    var data = await User.create(postdata); // this is first step now get the values from request
  }
  res.status(200).json({ data: data });
};
var addcontact = async (req, res) => {
//   //const antino = User.build({ firstName: "Jane" });
//   const antino = await Contact.create({
//     firstName: "antino",
//     lastName: "labs",
//     phone: "1787872",
//   });
//   console.log(antino instanceof Contact); // true
//   console.log(antino.phone); // "antno"
//   //await antino.save();
//   console.log("antino  was saved to the database!");
//   res.status(200).json(antino.toJSON());
var postdata = req.body;
if(postdata.length>1){
    var data=await Contact.bulkCreate(postdata);
  }else{
    var data = await Contact.create(postdata); // this is first step now get the values from request
  } // this is first step now get the values from request
  res.status(200).json({ data: data });
};

const getcontacts = async (req, res) => {
  const find = await Contact.findAll({});
  res.status(200).json({ data: find });
};
const getcontact = async (req, res) => {
  const find = await Contact.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: find });
};
const getusers = async (req, res) => {
  const find = await User.findAll({});
  res.status(200).json({ data: find });
};
const getuser = async (req, res) => {
  const find = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: find });
};
const deletecontact = async (req, res) => {
    const find = await Contact.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ data: find });
  };
  const deleteuser = async (req, res) => {
    const find = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ data: find });
  };
  const patchuser = async (req, res) => {
    var updatedbody=req.body;
    const find = await User.update(updatedbody,{
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ data: find });
  };
  const patchcontact = async (req, res) => {
    var updatedbody=req.body;
    const find = await Contact.update(updatedbody,{
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ data: find });
  };


module.exports = {
  adduser,
  addcontact,
  getusers,
  getuser,
  getcontacts,
  getcontact,
  deletecontact,
  deleteuser,
  patchuser,
  patchcontact
 
};
