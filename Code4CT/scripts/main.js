'use strict'

// -------------------------------------------------------------------------------
// slideshow
// -----------------------------------------------------------------------------------

// the imidoate variable and function
let k = 1;
filler(k);
setInterval(function(){
  document.getElementById('slide_wrapper').style.marginLeft = -100 * k + "vw";
  filler(k);
  k++;
  // to find the end of the slides
  if(k== 3){
    k=0;
  }
},6000);

// the onclick function for the slider
function onSelect(x){
  k = x;
document.getElementById('slide_wrapper').style.marginLeft = -100 * k + "vw";
filler(k);
};

// this function is to save coding space
function filler(x){
  // set all selector to grey and a certain size
  for(let i = 0; i <= 2; i++){
    document.getElementById('select'+i).style.backgroundColor = '#d4d4d4b0';
    document.getElementById('select'+i).style.height = 7 + 'px';
  }
  // changes the current selector to pink and desired size
  document.getElementById('select'+x).style.backgroundColor = '#e38f84c4';
  document.getElementById('select'+x).style.height = 15 + 'px';
};

// -----------------------------------------------------------------------------------
// counter
// ------------------------------------------------------------------------------------

// this array contains the initial values
let starter = [2220,0,2340,7985];

// the function that counts up
function counting(i){
  let num = starter[i];
  let end = starter[i] + 780;
  setInterval(function(){
    document.getElementById('counter'+i).innerHTML = num;

    // this is to find and end to the inerval
    if(num >= end){
      clearInterval;
    }
    else {
      num++;
    }
  },10);
};

// these call the function
counting(0);
counting(1);
counting(2);
counting(3);
