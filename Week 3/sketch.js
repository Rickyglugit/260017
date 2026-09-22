let smallrectanglekleur1 = 'white + black'
let smallrectanglekleur2
let smallrectanglekleur3
let smallrectanglekleur4
let smallrectanglekleur5
let smallrectanglekleur6
let smallrectanglekleur7
let smallrectanglekleur8
let smallrectanglekleur9


function setup() {
  createCanvas(1300, 550);
}

function draw() {
  background(220);
  // het platform voor de vakjes
  fill(100, 100, 100);
  strokeWeight(3);
  
  rect(400, 50, 450, 450, 10);
  // de 9 vlakjes
    //eerste rij
  fill(200, 200, 200);
  smallrectangle(425, 70);
  smallrectangle(563, 70);
  smallrectangle(700, 70);
  //tweede rij
  smallrectangle(425, 215);
  smallrectangle(563, 215);
  smallrectangle(700, 215);
  // derde rij
  smallrectangle(425, 360);
  smallrectangle(563, 360);
  smallrectangle(700, 360);
  
}
function smallrectangle(xPos, yPos,) {
  strokeWeight(3)
  fill(200, 200, 200);
  rect(xPos, yPos, 125, 125, 10);
}
function mousePressed(){
  
}