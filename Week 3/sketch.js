let vakje1 = 0; // Eigenaar. 0 = niemand, 1 = player 1, 2 = player 2
let vakje2 = 0;
let vakje3 = 0;
let vakje4 = 0;
let vakje5 = 0;
let vakje6 = 0;
let vakje7 = 0;
let vakje8 = 0;
let vakje9 = 0;

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

  smallrectangle(425, 70, vakje1);
  smallrectangle(563, 70, vakje2);
  smallrectangle(700, 70, vakje3);
  //tweede rij
  smallrectangle(425, 215, vakje4);
  smallrectangle(563, 215, vakje5);
  smallrectangle(700, 215, vakje6);
  // derde rij
  smallrectangle(425, 360, vakje7);
  smallrectangle(563, 360, vakje8);
  smallrectangle(700, 360, vakje9);

}
function smallrectangle(xPos, yPos, eigenaar) {
  strokeWeight(3)

  // Als de eigenaar 0 is (dus niemand), maak dan grijs
  // als de eigenaar 1 is (dus speler 1), maak dan rood
  // als de eigenaar 2 is (dus speler 2), maak dan blauw
  if (eigenaar == 0) {
    fill(200, 200, 200);
  }
  else if (eigenaar == 1) {
    fill(255, 0, 0);
  }
  else if (eigenaar == 2) {
    fill(0, 0, 255);
  }
  rect(xPos, yPos, 125, 125, 10);
}
function mousePressed() {

}

