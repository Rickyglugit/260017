let textstats = ["gezondheid", "energie", "geluk", "honger"];
let colorstats = ["#3cff00", "#f6ff00", "#fe0dea", "#ee1313"];
let statsWaardes = [100, 100, 100, 100];

let steakfoto;
let sponsefoto;
let maanfoto;
let roombackground;
let hongerPerSeconde = 10;


function setup() {
  createCanvas(1255, 550);


}

function draw() {
  background(220);
  image(roombackground, 0, 0, 1255, 550);

  statsWaardes[3] = statsWaardes[3] - hongerPerSeconde * deltaTime * 0.001;

  // Als honger onder de 0 komt, zet terug naar 0. Dus honger wordt nooit lager dan 0.
  if (statsWaardes[3] < 0) {
    statsWaardes[3] = 0;
  }
  console.log(statsWaardes[3]);


  // de 4 for loops zijn de statistieken
  for (let statIndex = 0; statIndex < 4; statIndex++) {

    let statWaarde = statsWaardes[statIndex];

    stroke(0);
    strokeWeight(2);

    // Blokken per statistiek
    for (let blokIndex = 0; blokIndex < 4; blokIndex++) {

      if (statWaarde > 25 * blokIndex) {// waarde is hoog genoeg voor dit blok
        fill(colorstats[statIndex]); // Pak de kleur van de stat
      }
      else {
        fill('black');
      }
      if(statsWaardes[3] > 0){
        
      }

      rect(1050 + 50 * blokIndex, 50 + 50 * statIndex, 50, 30);
    }
    // Teken de tekst (label van de stat) OVER de blokken heen
    fill(255);
    textSize(20);
    text(textstats[statIndex], 1110, 70 + 50 * statIndex);
  }

  strokeWeight(1)

  //het zwarte platform waar de knoppen in komen
  fill(0, 0, 0);
  circle(600, 920, 1000);
  fill(230, 230, 230);
  circle(600, 920, 975);

  icon(0, 0, 'red');
  icon(145, -25, 'green');
  icon(290, 0, 'yellow');

  image(steakfoto, 437, 485, 25, 25);
  image(sponsefoto, 583, 465, 25, 25);
  image(maanfoto, 725, 485, 30, 30);


  strokeWeight(2)
  balloonpet(100, -125, 205, 239, 250);
  balloonmouth()

}
function icon(x, y, color) {
  fill(247, 247, 247);
  circle(450 + x, 500 + y, 70);
  fill(color);
  circle(450 + x, 500 + y, 50);
  fill(247, 247, 247);
  circle(450 + x, 500 + y, 40);

}
function preload() {
  steakfoto = loadImage('steak.png');
  sponsefoto = loadImage('spons.png');
  maanfoto = loadImage('maan.png');
  roombackground = loadImage('room.png');

}
function balloonpet(x, y, v1, v2, v3) {
  fill(v1, v2, v3)
  circle(500 + x, 300 + y, 150, 150);
  rect(490 + x, 370 + y, 20, 10);
  fill(175, 133, 0);
  rect(495 + x, 380 + y, 10, 70);

  push();
  translate(570, 150);
  rotate((PI / 6));
  rectMode(CENTER)
  fill('black');
  //rect(500,200,40,10,50);
  rect(0, 0, 35, 5, 50);
  pop();

  push();
  translate(630, 150);
  rotate(-(PI / 6));
  rectMode(CENTER)
  fill('black');
  //rect(500,200,40,10,50);
  rect(0, 0, 35, 5, 50);
  pop();
}
function balloonmouth() {


}
