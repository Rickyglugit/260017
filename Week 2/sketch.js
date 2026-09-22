let circlelight1 = 'red'
let circlelight2 = 'black'
let circlelight3 = 'black'
let trafficlight = 0

let sunspeed = 1;
let sunposition=-50;

let cloudspeed1= 3;
let cloudposition1= 600;

let cloudspeed2 =2
let cloudposition2 = 300

let cloudspeed3 =1
let cloudposition3 = 100

let carposition1 = 150
let carspeed1 = 2

let carposition2 = 300
let carspeed2 = 3

let carposition3 = 200
let carspeed3 = 4

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
  circle(cloudposition1, 200, 50);
  circle(cloudposition1 + 30, 200, 65);
  circle(cloudposition1+ 60, 210, 50);

  fill(255, 255, 255);
  circle(cloudposition1, 210, 50);
  circle(cloudposition1 +30, 210, 65);
  circle(cloudposition1 +60, 220, 50);
  cloudposition1 = cloudposition1 - cloudspeed1

  if (cloudposition1 < -100) {
    cloudposition1 = 850
  }

  //tweede wolk
  fill(230, 230, 230,);
  circle(cloudposition2, 200, 50, 50);
  circle(cloudposition2 +30, 200, 65, 65);
  circle(cloudposition2+60, 210, 50, 50);

  fill(255, 255, 255);
  circle(cloudposition2, 210, 50, 50);
  circle(cloudposition2 +30, 210, 65, 65);
  circle(cloudposition2 +60, 220, 50, 50);
 cloudposition2 = cloudposition2 - cloudspeed2

  if (cloudposition2 < -100){
    cloudposition2 = 850
  }

  //derde wolk
  fill(230, 230, 230,);
  circle(cloudposition3, 150, 50, 50);
  circle(cloudposition3 +30, 150, 65, 65);
  circle(cloudposition3 +60, 160, 50, 50);
 
  fill(255, 255, 255);
  circle(cloudposition3, 160, 50, 50);
  circle(cloudposition3+ 30, 160, 65, 65);
  circle(cloudposition3+ 60, 170, 50, 50);
  cloudposition3 = cloudposition3 - cloudspeed3
  //reset naar rechts
if(cloudposition3 <-100){
  cloudposition3 = 850
}


  // de zon
  fill(255, 170, 0);
  circle(sunposition, 50, 100, 100);

  fill(255, 255, 0);
  circle(sunposition, 50, 75, 75);
  sunposition = sunposition + sunspeed;
  // reset naar links
  if (sunposition > 850) {
    sunposition = -50
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

  tekenBoom(100, 410);

  tekenBoom(200, 410);

  auto1(carposition2, 100);
  carposition2 = carposition2 + carspeed2
  if(carposition2 > 850){
    carposition2 = -200
  }
  auto2(carposition3, 150);
  carposition3 = carposition3 + carspeed3
if (carposition3> 850){
  carposition3 = -300
}
  // auto 0
  fill(205, 0, 0);
  rect(carposition1, 440, 100, 60);
  rect(carposition1+100, 470, 30, 30);
  fill(60, 60, 60);
  circle(carposition1+30, 500, 35, 35);
  circle(carposition1+100, 500, 35, 35);
 carposition1 = carposition1 + carspeed1
if(carposition1>850){
  carposition1 = -150
}
  tekenBoom(300, 510);
}
function keyPressed() {
  if (keyCode == ENTER) {
    trafficlight = trafficlight + 1

    if (trafficlight > 2) {
      trafficlight = 0
    }
    if (trafficlight == 0) {
      circlelight1 = 'red'
      circlelight2 = 'black'
      circlelight3 = 'black'
      carspeed1 = 0
      carspeed2 = 0
      carspeed3 = 0
    }
    else if (trafficlight == 1) {
      circlelight1 = 'black'
      circlelight2 = 'black'
      circlelight3 = 'green'
      carspeed1 = 2
      carspeed2 = 3
      carspeed3 = 4

    }
    else if (trafficlight == 2) {
      circlelight1 = 'black'
      circlelight2 = 'orange'
      circlelight3 = 'black'
      carspeed1 = 1
      carspeed2 = 2
      carspeed3 = 3
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
function auto1(xPos1, yPos1) {
  fill(200, 200, 0);
  rect(xPos1 + 100, yPos1 + 340, 100, 60);
  rect(xPos1 + 200, yPos1 + 370, 30, 30);
  fill(60, 60, 60);
  circle(xPos1 + 130, yPos1 + 400, 35, 35);
  circle(xPos1 + 200, yPos1 + 400, 35, 35);
}
function auto2(xpos2, yPos2) {
  fill(0, 0, 200);
  rect(xpos2 + 100, yPos2 + 340, 100, 60);
  rect(xpos2 + 200, yPos2 + 370, 30, 30);
  fill(60, 60, 60);
  circle(xpos2 + 130, yPos2 + 400, 35, 35);
  circle(xpos2 + 200, yPos2 + 400, 35, 35);
}