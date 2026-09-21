/// variabl opdr2
let teller = 1
// vari opdr 3
let trafficlight = 0;
let circlelight1 = 'red';
let circlelight2 = 'black';
let circlelight3 = 'black';
// variablen opdr 4
let achtball = 0;
let eightballXPositie = 500;
let eightballYPosition = 200;

function setup() {
  createCanvas(800, 575);
}

function draw() {
  background(220);
  fill(0, 0, 0);
  textSize(10)
  text("1Houd B in om een blokje te laten verschijnen.", 20, 20);
  text("2 Druk op spatie om het getal op 0 te zetten", 20, 120);
  text("3 Druk op enter om van rood -> groen -> oranje te gaan", 20, 240);
  text("4 Beweeg de eightball met WASD of de pijltjestoetsen", 360, 20);
 // opdracht 2
  //teller
  teller += 1
  if (keyIsDown(32)) {
    teller = 0
 
  }

  if (teller == 500) {
    teller = 0
  }
 // opdracht 1
  //kubus
  fill(255, 255, 255);
  if (keyIsDown(66)) {
    rect(20, 50, 60, 60);
  }
 //opdracht 3
  //stoplicht
  fill(0, 0, 0);
  text(teller, 20, 150);
  fill(150, 150, 150);
  rect(30, 300, 50, 200);
  rect(45, 500, 20, 70);
  //lichten
  fill(circlelight1);
  circle(55, 325, 30, 20);
  fill(circlelight2);
  circle(55, 390, 30, 20);
  fill(circlelight3);
  circle(55, 460, 30, 20);

  //opdracht4
  // 8 ball
  fill(0,0,0);
  circle(eightballXPositie,eightballYPosition,120);
  fill(255,255,255);
  circle(eightballXPositie,eightballYPosition,90)
  fill(0,0,0);
  textSize(40)
  text("8",eightballXPositie-10,eightballYPosition+10);

}

function keyPressed(){
  //console.log(keyCode);

  // We drukken op enter
  if(keyCode == ENTER){
    trafficlight = trafficlight + 1;

    if(trafficlight > 2){
      trafficlight = 0;
    }


    if (trafficlight == 0){
      circlelight1 = "red";
      circlelight2 = "black";
      circlelight3 = "black";
    }
    if(trafficlight ==1){
       circlelight1 = "black"
      circlelight2 = "orange"
      circlelight3 = "black"
    }
      
    if(trafficlight ==2){
       circlelight1 = "black"
      circlelight2 = "black"
      circlelight3 = "green"
    }
     
    console.log(trafficlight);

  }

  // We drukken op A, dus we gaan naar links
  if (keyCode == 65){
    eightballXPositie = eightballXPositie - 10;
    console.log(eightballXPositie);
  }
  else if(keyCode == 68){
    eightballXPositie = eightballXPositie + 10;
  }
  else if (keyCode == 87){
    eightballYPosition = eightballYPosition - 10;
  }
  else if(keyCode == 83){
    eightballYPosition = eightballYPosition + 10;
  }
}