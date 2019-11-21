// the required variables
var express = require('express');
var router = express.Router();
var dataBase = require('../db.json')
var request = require('request');

/* GET edit page */
router.get('/:id',function(req,res,next){
  // sets the variable to the url parameter
  var id ;

  var Posts = dataBase.posts;

  // loop to find index
  for(var i = 0; i < Posts.length; i++){
    if (Posts[i]. id == req.params.id){
      id = i;
    }
  }

  res.render('edit',{
    title : "Edit",
    posts : dataBase.posts,
    id : id,
  });
});


// to post to data base
router.post('/:id',function(req,res,next){

  // getting the id
  var id = req.params.id;
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
    url:"http://localhost:8080/posts/"+id,
    method:"PATCH",
    form:{
      author:req.body.author,
      title:req.body.title,
      image:req.body.image,
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
