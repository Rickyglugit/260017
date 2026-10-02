// size om de grootte van de vorm aan te passen
let size = 0
// array voor de random kleuren
let kleuren = []

let xPosities = []
let yPosities = []
function setup() {
  createCanvas(800, 600);
  frameRate(20);
  strokeWeight(0)


  // Kleuren array vullen (met push) met random kleuren
  for (let i = 0; i < 100; i++) {
    kleuren.push([random(0, 255), random(0, 255), random(0, 255)])
    xPosities.push(random(100, 700))
    yPosities.push(random(100, 500))
  }
}
function draw() {
  background(220);
  for (let i = 0; i < 100; i++) {
    circle(xPosities[i], yPosities[i], size);
    fill(kleuren[i])
  }
  size = size + 1;
  if (size == 50) {
    size = size - 1
  }
}
function mousepressed(){

}
