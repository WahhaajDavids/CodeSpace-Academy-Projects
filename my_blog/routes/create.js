// the required variables
var express = require('express');
var router = express.Router();
var dataBase = require('../db.json')
var request = require('request');

/* GET create page */
router.get('/',function(req,res,next){
  res.render('create',{
    title : "Create",
  });
});

// to post to data base
router.post('/',function(req,res,next){

  // getting the id
  var id = req.app.locals.dataBase.posts[dataBase.posts.length-1].id;
  id = Number(id)+1;
  // getting the date
  var newDate = new Date();
  var date = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`
  // the content
  var content = req.body.content;
  // for the description
  // turns to stringify
  var text = JSON.stringify(content);
  var description ;
  description = text.charAt(1);
  // gets the char from the srting
  for(var i = 2; i < 200;i++){
    description += text.charAt(i);
  }

  // post request
  request({
    url:"http://localhost:8080/posts",
    method:"POST",
    form:{
      id:id,
      date: date,
      author:req.app.locals.user,
      title:req.body.title,
      image : req.body.image,
      description:description+"...</p>",
      content:content,
    },
    function(error,reponse,body){
      res.render('index',{message: 'successfully added'});
    }
  })
    res.redirect('/');
})

// to give what this page allows other pages to use
module.exports = router
