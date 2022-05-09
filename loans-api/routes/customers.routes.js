var express = require('express');
var router = express.Router();

var moongose=require('mongoose');

const customerModel=require('../models/customers.model')

/* GET all customers */
router.get('/list', function(req, res, next) {
  customerModel.find(function(err,customerListResponce){
    if(err){
      res.send({status:500,message:'Unable to Add customer'});
    }
    else{
      const recordLength=customerListResponce.length
      res.send({status:200,recordLength,results:customerListResponce})
    }
  })
  
});


/* GET Deatalis of a specific customer */
router.get('/view', function(req, res, next) {
  const userId=req.query.userId
  customerModel.findById(userId,function(err,customerResponce){
    if(err){
      res.send({status:500,message:'Unable to view customer',userId});
    }
    else{
      res.send({status:200,results:customerResponce})
    }
  })
  
});

/* Create new customer */
router.post('/add', function(req, res, next) {

  let firstName=req.body.firstName;
  let lastName=req.body.lastName;
  let email=req.body.email;
  let phone=req.body.phone;
  let dob=req.body.dob;
  let department=req.body.department;

  let customerObj=new customerModel({
    firstName,
    lastName,
    email,
    phone,
    dob,
    department
  })
  customerObj.save((err,cusomerObj)=>{
    if(err){
      res.send({status:500,message:'Unable to Add customer'});
    }
    else{
      res.send({status:200,message:'user added successfully',customerDetails:cusomerObj})
    }
  })

});

/* update existing customer */
router.put('/update', function(req, res, next) {
  const userId=req.body.userId
  let firstName=req.body.firstName;
  let lastName=req.body.lastName;
  let email=req.body.email;
  let phone=req.body.phone;
  let dob=req.body.dob;
  let department=req.body.department;

  let customerObj={
    firstName,
    lastName,
    email,
    phone,
    dob,
    department
  }

  
  customerModel.findOneAndUpdate(userId,customerObj,function(err,customerResponce){
    if(err){
      res.send({status:500,message:'Unable to update the customer'});
    }
    else{
      res.send({status:200,results:customerResponce})
    }
  })
});

/* delete customer */
router.delete('/delete', function(req, res, next) {
  const userId=req.query.userId


 

  
  customerModel.findOneAndDelete(userId,function(err,customerResponce){
    if(err){
      res.send({status:500,message:'Unable to delete the customer'});
    }
    else{
      res.send({status:200,message:'user deleted successfully',results:customerResponce})
    }
  })
});

/* delete customer */
router.delete('/delete-multiple', function(req, res, next) {
  const userId=req.query.userId


 

  
  customerModel.find({'firstName':'Mark'},function(err,customerResponce){
    if(err){
      res.send({status:500,message:'Unable to delete the customer'});
    }
    else{
      res.send({status:200,message:'user deleted successfully'})
    }
  })
});

/* search existing customer */
router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});




module.exports = router;
