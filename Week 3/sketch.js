let platformkleur = fill()
let kleinevakkleur = fill()

function setup() {
  createCanvas(1300, 550);
}

function draw() {
  background(220);
  // het platform voor de vakjes
  fill(100,100,100);
  strokeWeight(3);
  rect(400, 50, 450, 450, 10);
  // de 9 vlakjes
  fill(200,200,200);
  rect(425,75,125,125,10);
  smallrectangle(20,20);
}
function smallrectangle(){
  strokeWeight(3)
  fill(200,200,200);
  rect(425,75,125,125,10);
}