'use strict';
//------------------------------------------------------------------------------
// the shopping cart
//-------------------------------------------------------------------------------

// the arrays
let courseName = ['Intro to Coding: Web Pages','Intro to Coding: Music','Intro to Coding: Animation','Create with Code: Web Pages','Create with Code: Music','Create with Code: Animation','Getting started as a developer',
                  'Beginner JavaScript','Beginner Front End Web Development','Beginner Python',
                  'Full Stack JavaScript','Website Deployment',
                  'Code Conversation','Presentation Skills','CV & LinkedIn','Networking','Digital Communication Skills','Applying to Tertiary Studies'];

let coursePrice = [250,250,250,960,960,960,250,
                    1800,1800,1800,
                    1800,1200,
                    300,300,300,300,300,300];

let courseDuration = ['3 Hours','3 Hours','3 Hours','3 Hours','3 Hours','3 Hours','3 Hours',
                      '6 Days','6 Days','6 Days',
                      '6 Days','4 Days',
                      '1 Day','1 Day','1 Day','2 Days','1 Day','1 Day'];

// the used variables
// to get the total price of all selected courses
let totalPrice = 0;
// to count how much courses were selected
let courseCounter = 0;

// the jQuery function
$(document).ready(function(){
  // used with the onclick in the HTML
  // i is used to find the desired content in the array when the user click a certain button
  $.fn.courseSelect = function(i){
    totalPrice += coursePrice[i];
    courseCounter++;
    $(".cart_list").append("<div class='selected_courses' id='selected_course"+i+"' ><p>"+courseName[i]+" | "+courseDuration[i]+" | R"+coursePrice[i]+"</p><button type='button' name='button' onclick='$(this).courseRemove("+i+")'><figure><img src='images/icons/x.png' alt='cancel'></figure></button></div>");
  };
  // used with the onclick in the HTML
  $.fn.courseRemove = function(i){
    totalPrice -= coursePrice[i];
    courseCounter--;
    $("#selected_course"+i).remove();
  };
  // used with the onclick in the HTML
  $.fn.removeAll = function(){
    totalPrice = 0;
    console.log(totalPrice);
    courseCounter = 0;
    console.log(courseCounter);
    $(".selected_courses").remove();
  };
});

//------------------------------------------------------------------------------
// register section
//------------------------------------------------------------------------------


// to close the pretty picture again afterwards when clicking on the wrapper
function registerWrapper(){
  document.getElementById('register_wrapper').style.display = 'none';
  document.getElementById('register').style.display = 'none';
};
// to display the register div on the page
function registerClick(){
  if(coursePrice != 0 && courseCounter != 0){
    document.getElementById('register_course').innerHTML = courseCounter;
    document.getElementById('register_total').innerHTML = totalPrice;
    document.getElementById('register_wrapper').style.display = 'block';
    document.getElementById('register').style.display = 'block';
  }
  else{
    alert('Sorry,You have not selected a course yet.')
  }
};

// on clicking of the accept button
function acceptFunction(){
  registerWrapper();
  alert('Thank You! \n You have now been registered.');
  $(this).removeAll()
}
