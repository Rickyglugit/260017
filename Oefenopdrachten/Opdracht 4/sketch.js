let teller = 0

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  text("1Houd B in om een blokje te laten verschijnen.",20,20);
  
  text("2 Druk op spatie om het getal op 0 te zetten",20,120);

  text("3 Druk op enter om van rood -> groen -> oranje te gaan",20,240);

  text("4 Beweeg de eightball met WASD of de pijltjestoetsen",360,20);

  teller += 1;

  if (keyIsDown(66)){
    rect(20,50,60,60);
}
text(""+teller,20,150);
}

