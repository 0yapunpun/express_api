const controller = {};
const User = require('../models/user.model')
const config = require('../config');

controller.loginUser = async (req, res, next) => {
  let {name, password} = req.body; 

  if (name == config.credentials.name && password == config.credentials.password) {
    return res.send({success: true, token: '01'}) 
  } else {
    return res.send({success: false}) 
  }
}

controller.createUser = async (req, res, next) => {
  let {name, age, gender, password} = req.body;
  let user = new User({name, age, gender, password});

  try {
    await user.save()
    return res.send({success: true, message: 'succeeded operation'}) 
  } catch (error) {
    console.log(error)
    return res.send({success: false, message: 'failed operation'}) 
  }
}

controller.updateUser = async (req, res, next) => {
  let {_id, name, age, gender, password} = req.body;

  try {
    let response = await User.updateOne({_id: _id}, { $set: {
      name: name,
      age: age,
      gender: gender,
      password: password
    }})
    return res.send({success: true, message: response}) 
  } catch (error) {
    console.log(error)
    return res.send({success: false, message: 'failed operation'}) 
  }
}

controller.getUsers = async (req, res, next) => {
  try {
    let response = await User.find({})
    return res.send({success: true, response: response}) 
  } catch (error) {
    console.log(error)
    return res.send({success: false, message: 'failed operation'}) 
  }
}

controller.getUserByName = async (req, res, next) => {
  try {
    let response = await User.find({name: req.params.name})
    return res.send({success: true, response: response}) 
  } catch (error) {
    console.log(error)
    return res.send({success: false, message: 'failed operation'}) 
  }
}

controller.deleteUser = async (req, res, next) => {
  try {
    let response = await User.deleteOne({ _id: req.params.id });
    return res.send({success: true, response: response}) 
  } catch (error) {
    console.log(error)
    return res.send({success: false, message: 'failed operation'}) 
  }
}

module.exports = controller