'use strict';
//------------------------------------------------------------------------------
// pretty photo
//------------------------------------------------------------------------------

// this variable will be used to find out what gallery we are in
// when a selector is clicked
let k = 1,
    image = 0;

// so that the gallery will open up to a pretty picture
// im using n to refer to which gallery is selected
// and i reffers to th element inside that gallery
function prettyPicture(n,i){
  console.log(n);
  k = n;
  image = i ;
  document.getElementById('prettyPicture_wrapper').style.display = 'block';
  document.getElementById('prettyPicture'+n).style.display = 'block';
  document.getElementById('gallery_slider'+n).style.marginLeft = -100*(i-1)+ '%';
}

// on click of right move
function rightClick(n){
  if (n == 1) {
    if(image != 12){
      document.getElementById('gallery_slider'+n).style.marginLeft = -100* image+'%';
      image ++;
    };
  }
  else{
    if(image != 8){
      document.getElementById('gallery_slider'+n).style.marginLeft = -100* image+'%';
      image ++;
    };
  };
};

// on click of left move
function leftClick(n){
  if(image != 1){
    image --;
    document.getElementById('gallery_slider'+n).style.marginLeft = -100* (image-1)+'%';
  };
};

// to change the gallery we are in
function gallerySelect(n){
  for(let i = 1 ; i<=2;i++){
    document.getElementById('gal_select'+i).style.backgroundColor = '#797979';
  };
  document.getElementById('gallery'+k).style.display = 'none';
  k = n;
  document.getElementById('gal_select'+k).style.backgroundColor = '#e38f84';

  document.getElementById('gallery'+k).style.display = 'block';

}
// to close the pretty picture again afterwards when clicking on the wrapper
function prettyPicture_click(){
  document.getElementById('prettyPicture_wrapper').style.display = 'none';
  document.getElementById('prettyPicture'+k).style.display = 'none';
};
