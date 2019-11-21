// the required variables
var express = require('express');
var router = express.Router();
var dataBase = require('../db.json')

/* GET main page */
router.get('/',function(req,res,next){

  res.render('index',{
    title : "Bloggle",
    posts : dataBase.posts,
  });
});


// to give what this page allows other pages to use
module.exports = router
