let textstats = ["gezondheid", "energie", "geluk", "honger"];
let steakfoto;
let sponsefoto;
let maanfoto;
let placeholderbackground

function setup() {
  createCanvas(1255, 550);

}

function draw() {
  background(220);
  image(placeholderbackground,0,0,1255,550);

// de 4 for loops zijn de statistieken
  for (let i = 0; i < 4; i++) {

    fill(0, 255, 0);
    rect(1050 + 50 * i, 50, 50, 30, 1);
    for (let i = 0; i < 4; i++) {
      fill(255, 255, 0);
      rect(1050 + 50 * i, 100, 50, 30);
    }
    for (let i = 0; i < 4; i++) {
      fill(255, 0, 255);
      rect(1050 + 50 * i, 150, 50, 30);
    } for (let i = 0; i < 4; i++) {
      fill(255, 0, 0);
      rect(1050 + 50 * i, 200, 50, 30);
    }
  }
  // deze for loop is voor de teksen op de statistieken
  for (let i = 0; i < textstats.length; i++) {
    fill(255);
    textSize(20);
    text(textstats[i], 1110, 70 + 50 * i);
  }
  //het zwarte platform waar de knoppen in komen
  fill(0, 0, 0);
  circle(600, 920, 1000);
  fill(230, 230, 230);
  circle(600, 920, 975);

  icon(0,0,'red');
  icon(145,-25,'green');
  icon(290,0,'yellow');

image(steakfoto,437,485,25,25);
image(sponsefoto,583,465,25,25);
image(maanfoto,725,485,30,30);

}
function icon(x, y, color) {
  fill(247, 247, 247);
  circle(450 + x,500 + y,70 );
  fill(color);
  circle(450 + x,500 + y,50);
  fill(247,247,247);
  circle(450 + x,500 + y,40);

}
function preload(){
steakfoto = loadImage('steak.png');
sponsefoto = loadImage('spons.png');
maanfoto = loadImage('maan.png');
placeholderbackground = loadImage('placeholder.webp')
}