// the required variables
var express = require('express');
var router = express.Router();
var users = require('../db.json').users;
var request = require('request');

/* GET register page */
router.get('/',function(req,res,next){
  res.render('register',{
    title : "register",
    thisError : req.app.locals.regError,
  });
});

// to post
router.post('/',function(req,res,next){

  // for used username
  var usernameUsed = false;

  // sets id to last id in users +1
  var id = users[users.length-1].id;
  id = Number(id)+1;

  // to check if the username is already used
  var logUser = req.body.username;

  // checking through the users
  for(var i = 0;i<users.length;i++){
    if(logUser == users[i].username){
      usernameUsed = true;
    }
  }

  // if username is available
  // create new membership account
  if(usernameUsed == false){
    request({
      url:"http://localhost:8080/users",
      method:"POST",
      form:{
        id:id,
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        signed : false,
      },
      function(error,reponse,body){
        res.render('register',{message: 'successfully added'});
      }
    });
    req.app.locals.regError = "Registration Successful!";
    // goes to sign in page after regostration
    res.redirect('/sign_in');

  }
  // if username is already used
  else if(usernameUsed == true){
    req.app.locals.regError = "Username Already Been Used!";
  }

  res.redirect('/register');
})

// to give what this page allows other pages to use
module.exports = router
