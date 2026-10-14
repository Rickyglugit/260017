 let moonphoto;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(moonphoto,50,50,50,50);
}
function preload(){
moonphoto = loadImage('maan.png');
}