let input, button, greeting;

function setup() {
  // create canvas
  cnv = createCanvas(1000, 800, WEBGL);
  cnv.parent('sketch-holder');
  background(250);

  // input = createInput();
  // input.position(450, 600);

  // button = createButton('submit');
  // button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  var x = document.getElementById('Second');
  x.style.visibility = 'hidden';
  var y = document.getElementById('Third');
  y.style.visibility = 'hidden';
}

// function greet() {
//   var x = document.getElementById('Second');
//   if (x.style.visibility === 'hidden') {
//     x.style.visibility = 'visible';
//   } else {
//     x.style.visibility = 'hidden';
//   }
//   var y = document.getElementById('Third');
//   if (y.style.visibility === 'hidden') {
//     y.style.visibility = 'visible';
//   } else {
//     y.style.visibility = 'hidden';
//   }
// }
