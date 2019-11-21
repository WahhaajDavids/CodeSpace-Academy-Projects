// the required variables
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET sign out */
router.get('/',function(req,res,next){
  // sets to default
  req.app.locals.logedIn = false;
  req.app.locals.user = "";
  req.app.locals.signError = "";
  req.app.locals.regError = "";

  request({
    url:"http://localhost:8080/users/"+req.app.locals.userId,
    method:"PATCH",
    form:{
      signed : false,
    }
  })

  // sends back to home page
  res.redirect('/');
});


// to give what this page allows other pages to use
module.exports = router
