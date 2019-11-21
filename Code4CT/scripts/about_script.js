'use strict';

//------------------------------------------------------------------------------
// spinner  with values
//------------------------------------------------------------------------------

console.log(screen.width);

  spinnerFunction(1,85,70,10);
  spinnerFunction(2,80,70,10);
  spinnerFunction(3,90,70,10);
  spinnerFunction(4,97,70,10);

// the parameters given are self explanitory
function spinnerFunction(id,Percentage,sizeOfCircle,widthOfLine){
  var can = document.getElementById('canvas'+id),
      spanProcent = document.getElementById('procent'+id),
       c = can.getContext('2d');

  var posX = can.width / 2,
      posY = can.height / 2,
      fps = 1000 / 200,
      procent = 0,
      oneProcent = 360 / 100,
      result = oneProcent * Percentage;

    c.lineCap = 'round';
    // these values are reused so that it is easier to keep track of them
    arcMove(sizeOfCircle,widthOfLine);

    function arcMove(sizeOfCircle,widthOfLine){
    var deegres = 0;
    var acrInterval = setInterval (function() {
      deegres ++;
      c.clearRect( 0, 0, can.width, can.height );
      procent = deegres / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      // this is for the circle that moves
      c.beginPath();
      c.strokeStyle = '#e38f84';
      c.lineWidth = widthOfLine;
      c.arc( posX, posY, sizeOfCircle, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
      c.stroke();
      if( deegres >= result ) clearInterval(acrInterval);
    }, fps);
  }
};
