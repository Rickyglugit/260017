// size om de grootte van de vorm aan te passen
let size = 0
// array voor de random kleuren
let kleuren = []
// x y posities voor de cirkel
let xPosities = []
let yPosities = []
// xy posities voor de vierkant
let rectXPos = []
let rectYpos = []

function setup() {
  createCanvas(800, 600);
  // door framerate houden de vormen een redelijke snelhijd aan
  frameRate(20);
  strokeWeight(0);


  // Kleuren array vullen (met push) met random kleuren
  for (let i = 0; i < 100; i++) {
    //per keer dat je reset zijn de kleuren en posities anders
    kleuren.push([random(0, 255), random(0, 255), random(0, 255)]);
    xPosities.push(random(100, 700));
    yPosities.push(random(100, 500));
    rectXPos.push(random(100, 600));
    rectYpos.push(random(100, 400));
  }
}
function draw() {
  background(220);
  for (let i = 0; i < 100; i++) {
    rect(rectXPos[i], rectYpos[i], size);
    circle(xPosities[i], yPosities[i], size);
    rect(rectXPos, rectYpos, 50, 50);
    fill(kleuren[i]);
    if (i == 100){
      kleuren = random(0,255)
    }
// zorgt ervoor dat de vormen van klein naar groot gaan en weer terug
  }
  size = size + 1;
  if (size == 50) {
    size = size - 100;
  }
}


