let vakje1 = 0; // Eigenaar. 0 = niemand, 1 = player 1, 2 = player 2
let vakje2 = 0;
let vakje3 = 0;
let vakje4 = 0;
let vakje5 = 0;
let vakje6 = 0;
let vakje7 = 0;
let vakje8 = 0;
let vakje9 = 0;

let beurt = 1;



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

  if (vakje1 == 1 && vakje2 == 1 && vakje3 == 1) {
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
  }
  if (vakje4 == 1 && vakje5 == 1 && vakje6 == 1) {
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
  }
   if (vakje7 == 1 && vakje8 == 1 && vakje9 == 1) {
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
  }
   if (vakje1 == 1 && vakje4 == 1 && vakje7 == 1) {
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
  }
   if (vakje2 == 1 && vakje5 == 1 && vakje8 == 1) {
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
  }
   if (vakje3 == 1 && vakje6 == 1 && vakje9 == 1) {
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
  }
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

  if (mouseButton == LEFT) {

    // eerste rij
    if (mouseX > 425 && mouseX < 425 + 125 && mouseY > 70 && mouseY < 70 + 125 && vakje1 == 0) {
      vakje1 = beurt;
      wisselBeurtNaarVolgendeSpeler();
    }

    else if (mouseX > 563 && mouseX < 563 + 125 && mouseY > 70 && mouseY < 70 + 125 && vakje2 == 0) {
      vakje2 = beurt
      wisselBeurtNaarVolgendeSpeler();
    }
    else if (mouseX > 700 && mouseX < 700 + 125 && mouseY > 70 && mouseY < 70 + 125 && vakje3 == 0) {
      vakje3 = beurt
      wisselBeurtNaarVolgendeSpeler();
    }
    // tweede rij
    else if (mouseX > 425 && mouseX < 425 + 125 && mouseY > 215 && mouseY < 215 + 125 && vakje4 == 0) {
      vakje4 = beurt
      wisselBeurtNaarVolgendeSpeler();
    }
    else if (mouseX > 563 && mouseX < 563 + 125 && mouseY > 215 && mouseY < 215 + 125 && vakje5 == 0) {
      vakje5 = beurt
      wisselBeurtNaarVolgendeSpeler();
    }
    else if (mouseX > 700 && mouseX < 700 + 125 && mouseY > 215 && mouseY < 215 + 125 && vakje6 == 0) {
      vakje6 = beurt
      wisselBeurtNaarVolgendeSpeler();
      //derde rij
    }
    else if (mouseX > 425 && mouseX < 425 + 125 && mouseY > 360 && mouseY < 360 + 125 && vakje7 == 0) {
      vakje7 = beurt
      wisselBeurtNaarVolgendeSpeler();
    }
    else if (mouseX > 563 && mouseX < 563 + 125 && mouseY > 360 && mouseY < 360 + 125 && vakje8 == 0) {
      vakje8 = beurt
      wisselBeurtNaarVolgendeSpeler();
    }
    else if (mouseX > 700 && mouseX < 700 + 125 && mouseY > 360 && mouseY < 360 + 125 && vakje9 == 0) {
      vakje9 = beurt
      wisselBeurtNaarVolgendeSpeler();
    }
  }

}

function wisselBeurtNaarVolgendeSpeler() {
  if (beurt == 1) {
    beurt = 2;
  }
  else if (beurt == 2) {
    beurt = 1;
  }
}

