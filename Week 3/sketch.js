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

let gameOver = false;



function setup() {
  createCanvas(1300, 550);
}

function draw() {
  background(220);
  // zorgt ervoor dat achtergrond kleur aantoont wie aan de beurt is
  fill(180, 180, 180);
  rect(0, 0, 1300, 550);
  if (beurt == 1) {
    beurtachtergrond(255, 0, 0, 50);
  }
  if (beurt == 2) {
    beurtachtergrond(0, 0, 255, 25);
  }
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

  //player 1 win screen
  
  // eerste rij horizontaal
  if (vakje1 == 1 && vakje2 == 1 && vakje3 == 1) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
    // tweede rij horizontaal
  }
  if (vakje4 == 1 && vakje5 == 1 && vakje6 == 1) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
    // derde rij horizontaal
  }
  if (vakje7 == 1 && vakje8 == 1 && vakje9 == 1) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
    //eerste rij verticaal
  }
  if (vakje1 == 1 && vakje4 == 1 && vakje7 == 1) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
    //tweede rij verticaal
  }
  if (vakje2 == 1 && vakje5 == 1 && vakje8 == 1) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
    //derde rij verticaal
  }
  if (vakje3 == 1 && vakje6 == 1 && vakje9 == 1) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
    // eerste rij diagonaal
  }
  if (vakje1 == 1 && vakje5 == 1 && vakje9 == 1) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);
    // tweede rij diagonaal
  }
  if (vakje3 == 1 && vakje5 == 1 && vakje7 == 1) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(200, 0, 0);
    textSize(150)
    text("Player 1 wins", 200, 250);
    fill(255, 0, 0, 127);
    rect(0, 0, 1300, 550);

    //player 2 win screen
    //eerste rij horizontaal
  }
  if (vakje1 == 2 && vakje2 == 2 && vakje3 == 2) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(0, 0, 200);
    textSize(150)
    text("Player 2 wins", 200, 250);
    fill(0, 0, 255, 127);
    rect(0, 0, 1300, 550);
    //tweede rij horizontaal
  }
  if (vakje4 == 2 && vakje5 == 2 && vakje6 == 2) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(0, 0, 200);
    textSize(150)
    text("Player 2 wins", 200, 250);
    fill(0, 0, 255, 127);
    rect(0, 0, 1300, 550);
    //derde rij horizontaal
  }
  if (vakje7 == 2 && vakje8 == 2 && vakje9 == 2) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(0, 0, 200);
    textSize(150)
    text("Player 2 wins", 200, 250);
    fill(0, 0, 255, 127);
    rect(0, 0, 1300, 550);
    //eerste rij verticaal
  }
  if (vakje1 == 2 && vakje4 == 2 && vakje7 == 2) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(0, 0, 200);
    textSize(150)
    text("Player 2 wins", 200, 250);
    fill(0, 0, 255, 127);
    rect(0, 0, 1300, 550);
    //tweede rij verticaal
  }
  if (vakje2 == 2 && vakje5 == 2 && vakje8 == 2) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(0, 0, 200);
    textSize(150)
    text("Player 2 wins", 200, 250);
    fill(0, 0, 255, 127);
    rect(0, 0, 1300, 550);
    //derde rij verticaal
  }
  if (vakje3 == 2 && vakje6 == 2 && vakje9 == 2) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(0, 0, 200);
    textSize(150)
    text("Player 2 wins", 200, 250);
    fill(0, 0, 255, 127);
    rect(0, 0, 1300, 550);
    //eerste rij diagonaal
  }
  if (vakje1 == 2 && vakje5 == 2 && vakje9 == 2) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(0, 0, 200);
    textSize(150)
    text("Player 2 wins", 200, 250);
    fill(0, 0, 255, 127);
    rect(0, 0, 1300, 550);
    //tweede rij diagonaal
  }

  if (vakje3 == 2 && vakje5 == 2 && vakje9 == 2) {
    gameOver = true;
    line(30, 30, 30, 30);
    fill(0, 0, 200);
    textSize(150)
    text("Player 2 wins", 200, 250);
    fill(0, 0, 255, 127);
    rect(0, 0, 1300, 550);
  }
  // zorgt voor gelijk spel
  if (vakje1 != 0 && vakje2 != 0 && vakje3 != 0 && vakje4 != 0 && vakje5 != 0 && vakje6 != 0
    && vakje7 != 0 && vakje8 != 0 && vakje9 != 0) {
    gameOver = true;
    fill(0, 0, 0)
    textSize(150)
    text("Draw", 450, 300);
    fill(100, 100, 100, 127);
    rect(0, 0, 1300, 550);
    beurtachtergrond(50, 50, 50, 75);
  }
// het restart knopje verschijnt op positie  dat alles weer naar start punt gaat
  if (gameOver == true) {
    restartbutton(500, 350);
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
  // het small rectangle zelf
  rect(xPos, yPos, 125, 125, 10);
}


function mousePressed() {
//zorgt dat je op de 9 vakjes kan klikken zonder dat dat gebeurt op heel de canvas
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
// zorgt dat je op het start knopje kan klikken
    if (gameOver == true) {
      if (mouseX > 500 && mouseX < 500 + 230 && mouseY > 350 && mouseY < 350 + 70) {
        resetGame();
      }
    }
  }

}

function wisselBeurtNaarVolgendeSpeler() {
  // geeft beide spelers beurten
  if (beurt == 1) {
    beurt = 2;
  }
  else if (beurt == 2) {
    beurt = 1;
  }
}

function restartbutton(xPos, yPos,) {
  // het start knopje zelf
  fill(0, 150, 0);
  rect(xPos, yPos, 230, 70, 10);
  fill(0, 255, 0);
  rect(xPos + 5, yPos + 15, 220, 45, 10);
  fill(255, 255, 255);
  textSize(40);
  text("Restart?", xPos + 50, yPos + 50);
}

function resetGame() {
  // zet alles weer up de start positie
  vakje1 = 0;
  vakje2 = 0;
  vakje3 = 0;
  vakje4 = 0;
  vakje5 = 0;
  vakje6 = 0;
  vakje7 = 0;
  vakje8 = 0;
  vakje9 = 0;

  beurt = 1;

  gameOver = false;
}
function beurtachtergrond(v1, v2, v3, alpha,) {
  // zorgt voor een transparenten achtergrond om ste beurt voor speler 1 en speler 2
  background(v1, v2, v3, alpha);
}

