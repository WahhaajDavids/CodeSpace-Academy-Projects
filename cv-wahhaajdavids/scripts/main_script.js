// the nav bar menu

// variable
var show1 = false;

// onclick function
function menu(){
  // checks if true
  if (show1 == true) {
    // if so do
    show1 = false;
    document.getElementById('menu_content').style.display = "none";
  }
  // checks if false
  else{
    // if so do
    show1 = true;
    document.getElementById('menu_content').style.display = "block";
  }

}
// when a link is clicked
function menu2(){
  if(window.innerWidth <1000){
    // sets to default
    show1 = false;
    document.getElementById('menu_content').style.display = "none";
  }
}
/* ------------------------------------------------------------------*/
/* ------------------------------------------------------------------*/
/* ------------------------------------------------------------------*/

// the bars

// checks window width
if(window.innerWidth < 700){
  // the onscroll
  document.getElementById('main').onscroll = function(){
    // sets variable
    var x = document.getElementById('main').scrollTop;
    if(x>1100){
      // runs the bar function
      bar();
    }
  }

}
else if(window.innerWidth < 1000){
  // the onscroll
  document.getElementById('main').onscroll = function(){
    // sets variable
    var x = document.getElementById('main').scrollTop;
    if(x>1500){
      // runs the bar function
      bar();
    }
  }
}
else{
  // the onscroll
  document.getElementById('main').onscroll = function(){
    // sets variable
    var x = document.getElementById('main').scrollTop;
    if(x>950){
      // runs the bar function
      bar();
    };
  }
}

/* ------------------------------------------------------------------*/

// the variables
  // the percentages
var percent = ['80','60','70','85','70','90'];
  // just a variable
var sec=0;

// the bar function
// set a variable to the interval
function bar(){
  var barWidth =setInterval(function(){
    // loops thru the bars
    for(var i = 0; i< 6;i++){
      // checks if  sec is les than the percentage
      if (sec<=percent[i]){
        // gives the bar a width of sec
        document.getElementById('barc'+(i+1)).style.width = sec+"%";
        document.getElementById('percentage'+(i+1)).innerHTML = sec+"%";
      };
    };
    // increments the sec
    sec++;
    // checks if sec is greater than 100
    if(sec >= 100){
      // if so stop the interval
      clearInterval( barWidth);
    };
    // loop every 0.1s
  },100);
}

/* ------------------------------------------------------------------*/
/* ------------------------------------------------------------------*/
/* ------------------------------------------------------------------*/

// for the references
var show2 = false;

// onclick function
if(window.innerWidth < 1000){

  function refShow(){
    // checks if true
    if (show2 == true) {
      // if so do
      show2 = false;
      document.getElementById('ref_content').style.height = "0px";
      document.getElementById('indicator').style.transform = "rotate(0deg)";
    }
    // checks if false
    else{
      // if so do
      show2 = true;
      document.getElementById('ref_content').style.height = "438px";
      document.getElementById('indicator').style.transform = "rotate(-180deg)";
    }

  }
}
else{
  function refShow(){
    // checks if true
    if (show2 == true) {
      // if so do
      show2 = false;
      document.getElementById('ref_content').style.height = "0px";
      document.getElementById('indicator').style.transform = "rotate(0deg)";
    }
    // checks if false
    else{
      // if so do
      show2 = true;
      document.getElementById('ref_content').style.height = "224px";
      document.getElementById('indicator').style.transform = "rotate(-180deg)";
    }

  }
}
