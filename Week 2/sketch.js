let circlelight1 = 'red'
let circlelight2 = 'black'
let circlelight3 = 'black'
let trafficlight = 0
function setup() {
  createCanvas(800, 600);
  frameRate(80);
  

}

function draw() {
  background(220);
  strokeWeight(0);
  fill(180, 255, 252);
  rect(0, 0, 800, 600);

  fill(115, 115, 99);
  rect(0, 500, 800, 100);

  // streepjes op de weg
  fill(235, 235, 235);
  rect(-25, 530, 100, 20, 20);

  rect(150, 530, 100, 20, 20);

  rect(325, 530, 100, 20, 20);

  rect(500, 530, 110, 20, 20);

  rect(675, 530, 100, 20, 20);

  // land schappen
  fill(66, 64, 64);
  rect(0, 500, 800, 5);

  fill(43, 214, 44);
  rect(0, 495, 800, 5);

  fill(21, 122, 22);
  rect(0, 490, 800, 5);

  // bergen
  strokeWeight(1);
  fill(57, 64, 57);
  triangle(100, 490, 250, 200, 330, 490);
  fill(173, 173, 173)
  triangle(0, 490, 100, 300, 150, 490);

  triangle(600, 490, 400, 100, 250, 490);

  // stoplichten
  strokeWeight(0)
  fill(163, 163, 163);
  rect(650, 450, 10, 50);

  rect(630, 300, 50, 150);
//lichten van stoplicht
  fill(circlelight1);
  circle(655, 325, 40, 40);

  fill(circlelight2);
  circle(655, 370, 40, 40);

  fill(circlelight3);
  circle(655, 415, 40, 40);

  // eerste wolk
  fill(230, 230, 230,);
  circle(600 -frameCount, 200, 50, 50);
  circle(630 -frameCount, 200, 65, 65);
  circle(660 -frameCount, 210, 50, 50);

  fill(255, 255, 255);
  circle(600 -frameCount, 210, 50, 50);
  circle(630 -frameCount, 210, 65, 65);
  circle(660 -frameCount, 220, 50, 50);
  
  //tweede wolk
  fill(230, 230, 230,);
  circle(300 -frameCount, 200, 50, 50);
  circle(330 -frameCount, 200, 65, 65);
  circle(360 -frameCount, 210, 50, 50);

  fill(255, 255, 255);
  circle(300 -frameCount, 210, 50, 50);
  circle(330 -frameCount, 210, 65, 65);
  circle(360 -frameCount, 220, 50, 50);
  //derde wolk
  fill(230, 230, 230,);
  circle(100 -frameCount, 150, 50, 50);
  circle(130 -frameCount, 150, 65, 65);
  circle(160-frameCount, 160, 50, 50);

  fill(255, 255, 255);
  circle(100-frameCount, 160, 50, 50);
  circle(130-frameCount, 160, 65, 65);
  circle(160-frameCount, 170, 50, 50);
  if(frameCount == -200){
  frameCount = 850
  }
  // de zon
  fill(255, 170, 0);
  circle(frameCount, 50, 100, 100);

  fill(255, 255, 0);
  circle(frameCount, 50, 75, 75);
  if(frameCount == 850){
  frameCount = -50
  }


   //boom1
  fill(115, 75, 12);
  rect(50, 410, 20, 85);
  fill(0, 170, 0);
  circle(60, 390, 55, 55);
  fill(0, 130, 0);
  circle(60, 390, 55, 55);
  fill(0, 100, 0);
  circle(60, 390, 55, 55);
  fill(0, 90, 0);
  circle(60, 390, 55, 55);
  
  //boom2
  fill(115, 75, 12);
  rect(150, 410, 20, 85);
  fill(0, 170, 0);
  circle(160, 390, 55, 55);
  fill(0, 130, 0);
  circle(160, 390, 55, 55);
  fill(0, 100, 0);
  circle(160, 390, 55, 55);
  fill(0, 90, 0);
  circle(160, 390, 55, 55);
  
  //boom3
  fill(115, 75, 12);
  rect(250, 410, 20, 85);
  fill(0, 170, 0);
  circle(260, 390, 55, 55);
  fill(0, 130, 0);
  circle(260, 390, 55, 55);
  fill(0, 100, 0);
  circle(260, 390, 55, 55);
  fill(0, 90, 0);
  circle(260, 390, 55, 55);
  
  //boom4!!! verplaatsen later
  fill(115, 75, 12);
  rect(350, 510, 20, 85);
  fill(0, 170, 0);
  circle(360, 490, 55, 55);
  fill(0, 130, 0);
  circle(360, 490, 55, 55);
  fill(0, 100, 0);
  circle(360, 490, 55, 55);
  fill(0, 90, 0);
  circle(360, 490, 55, 55);
  
  //boom5
  fill(115, 75, 12);
  rect(450, 410, 20, 85);
  fill(0, 170, 0);
  circle(460, 390, 55, 55);
  fill(0, 130, 0);
  circle(460, 390, 55, 55);
  fill(0, 100, 0);
  circle(460, 390, 55, 55);
  fill(0, 90, 0);
  circle(460, 390, 55, 55);
  
  // auto 1
  fill(205, 0, 0);
  rect(200, 440, 100, 60);
  rect(300, 470, 30, 30);
  fill(60, 60, 60);
  circle(230, 500, 35, 35);
  circle(300, 500, 35, 35);


  tekenBoom(100, 410);

  tekenBoom(200, 410);
  auto(300, 100);

}
function keyPressed(){
  if (keyCode ==ENTER){
     trafficlight = trafficlight + 1
  
  if (trafficlight >2){
    trafficlight = 0
  }
  if (trafficlight ==0){
    circlelight1 = 'red'
    circlelight2 = 'black'
    circlelight3 = 'black'
  }
  else if(trafficlight ==1){
    circlelight1 = 'black'
    circlelight2 = 'orange'
    circlelight3 = 'black'
  
  }
  else if (trafficlight ==2){
    circlelight1 = 'black'
    circlelight2 = 'orange'
    circlelight3 = 'green'
  }
}
}
function tekenBoom(xPos, yPos) {
  fill(115, 75, 12);
  rect(xPos, yPos, 20, 85);
  fill(0, 170, 0);
  circle(xPos + 10, yPos - 20, 55, 55);
  fill(0, 130, 0);
  circle(xPos + 10, yPos - 20, 55, 55);
  fill(0, 100, 0);
  circle(xPos + 10, yPos - 20, 55, 55);
  fill(0, 90, 0);
  circle(xPos + 10, yPos - 20, 55, 55);
}
function auto(xPos1, yPos1) {
  fill(205, 0, 0);
  rect(xPos1 + 100, yPos1 + 340, 100, 60);
  rect(xPos1 + 200, yPos1 + 370, 30, 30);
  fill(60, 60, 60);
  circle(xPos1 + 130, yPos1 + 400, 35, 35);
  circle(xPos1 + 200, yPos1 + 400, 35, 35);
}
