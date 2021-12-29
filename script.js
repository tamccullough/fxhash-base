// LICENSE.md to be added

//use fxrand() to determine the properties in your code

// let a = fxrand()

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


function getImage(letter,min,max,ftype) {
  var img = new Image();
  img.src = './images/'+ letter + getRandomInt(min, max) + ftype;
  img.style.width = 'auto';
  img.style.height = '99vh';
  return img
}

img1 = getImage('a',1,7,'.jpg');
var div = document.getElementById("a-layer");
div.appendChild(img1);

img2 = getImage('b',1,8,'.png');
var div = document.getElementById("b-layer");
div.appendChild(img2);

img3 = getImage('c',1,9,'.png');
var div = document.getElementById("c-layer");
div.appendChild(img3);

img4 = getImage('d',1,8,'.png');
var div = document.getElementById("d-layer");
div.appendChild(img4);

img5 = getImage('e',1,8,'.png');
var div = document.getElementById("e-layer");
div.appendChild(img5);

img6 = getImage('f',1,8,'.png');
var div = document.getElementById("f-layer");
div.appendChild(img6);
