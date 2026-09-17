let teller = 1

function setup() {
  createCanvas(800, 575);
}

function draw() {
  background(220);
  fill(0, 0, 0);
  text("1Houd B in om een blokje te laten verschijnen.", 20, 20);
  text("2 Druk op spatie om het getal op 0 te zetten", 20, 120);
  text("3 Druk op enter om van rood -> groen -> oranje te gaan", 20, 240);
  text("4 Beweeg de eightball met WASD of de pijltjestoetsen", 360, 20);

  //teller
  teller += 1
  if (keyIsDown(32)) {
    teller = 0

  }

  if (teller == 500) {
    teller = 0
  }

  //kubus
  fill(255, 255, 255);
  if (keyIsDown(66)) {
    rect(20, 50, 60, 60);
  }

  //stoplicht
  fill(0, 0, 0);
  text(teller, 20, 150);
  fill(150, 150, 150);
  rect(30, 300, 50, 200);
  rect(45, 500, 20, 70);
  //lichten
  fill(150, 0, 0);
  circle(55, 325, 30, 20);
  fill(150, 150, 0)
  circle(55, 390, 30, 20);
}

