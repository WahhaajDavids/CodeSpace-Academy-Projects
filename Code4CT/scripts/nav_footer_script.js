'use strict';

//-------------------------------------------------------------------------------
// search button on nav bar
//--------------------------------------------------------------------------------

// this function is to search fo something when it is typed in the searchbar
function search_button(){
  let searchOption = document.getElementById('search_box').value;
  console.log(searchOption);
  document.getElementById('search_box').style.display = 'inline-block';
  if(searchOption != ''){
    window.open('https://www.google.co.za/search?q='+searchOption,'_blank')
  }
};

//-------------------------------------------------------------------------------
// scroll to top
//--------------------------------------------------------------------------------

// for the scroll-to-top buttton
// so the button shows up onscroll
window.onscroll = function() {scroll()};

function scroll(){
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    document.getElementById('scroll_top').style.right = '0px';
  }
  else{
    document.getElementById('scroll_top').style.right = '-100px';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topScreen() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
