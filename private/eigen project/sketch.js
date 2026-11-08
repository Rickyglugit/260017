let flowercounter1 = 0
let flowercounter2 = 0
let flowercounter3 = 0
let happybirthdayfoto;

function setup() {
  createCanvas(1200, 700);
}

function draw() {
  strokeWeight(0)
  background(218);
  //stengel
  fill(0, 150, 0);
  rect(300, 350+200, 20, 150);
  // donker groen blad kant
  fill(0, 180, 0);
  rect(290, 460+200, 10, 20);
  rect(280, 450+200, 10, 20);
  rect(260, 440+200, 20, 20);
  rect(250, 430+200, 10, 20);
  rect(240, 420+200, 10, 20);
  rect(230, 410+200, 10, 20);
  rect(220, 400+200, 10, 20);
  rect(210, 390+200, 10, 10);
  rect(200, 380+200, 10, 10);
  // licht groen blad kant
  fill(0, 220, 0);
  rect(200, 370+200, 30, 10);
  rect(210, 380+200, 30, 10);
  rect(220, 390+200, 30, 10);
  rect(230, 400+200, 30, 10);
  rect(240, 410+200, 30, 10);
  rect(250, 420+200, 30, 10);
  rect(260, 430+200, 30, 10);
  rect(280, 440+200, 20, 10);
  rect(290, 450+200, 10, 10);

  // 2de donker groen blad kant
  fill(0, 180, 0);
  rect(320, 460+200, 10, 20);
  rect(280 + 50, 450+200, 10, 20);
  rect(260 + 80, 440+200, 20, 20);
  rect(250 + 110, 430+200, 10, 20);
  rect(240 + 130, 420+200, 10, 20);
  rect(230 + 150, 410+200, 10, 20);
  rect(220 + 170, 400+200, 10, 20);
  rect(210 + 190, 390+200, 10, 10);
  rect(200 + 210, 380+200, 10, 10);
  // 2de licht groen blad kant
  fill(0, 220, 0);
  rect(200 + 190, 370+200, 30, 10);
  rect(210 + 170, 380+200, 30, 10);
  rect(220 + 150, 390+200, 30, 10);
  rect(230 + 130, 400+200, 30, 10);
  rect(240 + 110, 410+200, 30, 10);
  rect(250 + 90, 420+200, 30, 10);
  rect(260 + 70, 430+200, 30, 10);
  rect(280 + 40, 440+200, 20, 10);
  rect(290 + 30, 450+200, 10, 10);

  //outer layer bloem
  outerfill(194, 194, 0);
  rect(285, 340+200, 50, 10);
  rect(275, 330+200, 10, 10);
  rect(335, 330+200, 10, 10);
  rect(265, 320+200, 10, 10);
  rect(345, 320+200, 10, 10);
  rect(255, 280+200, 10, 40);
  rect(355, 280+200, 10, 40);
  rect(265, 270+200, 10, 10);
  rect(255, 240+200, 10, 30);
  rect(345, 270+200, 10, 10);
  rect(355, 240+200, 10, 30);
  rect(265, 230+200, 20, 10);
  rect(295, 230+200, 30, 10);
  rect(335, 230+200, 20, 10);
  rect(285, 240+200, 10, 20);
  rect(325, 240+200, 10, 20);
  rect(295, 260+200, 10, 20);
  rect(315, 260+200, 10, 20);
  rect(305, 280+200, 10, 30);
  rect(295, 310+200, 10, 30);

  // de light kleurige delen
  lightfill(255, 255, 175);
  rect(265, 240+200, 10, 30);
  rect(275, 240+200, 10, 10);
  rect(295, 240+200, 10, 10);
  rect(335, 240+200, 10, 10);


  // de donkere kant van de bloem
  darkfill(224, 224, 0);
  rect(345, 300+200, 10, 20);
  rect(335, 310+200, 10, 20);
  rect(325, 320+200, 10, 20);
  rect(305, 330+200, 20, 10);
  rect(285, 330+200, 10, 10);



  // de centrale kleur van de bloem
  centralfill(245, 245, 0);
  rect(305, 240+200, 20, 10);
  rect(295, 250+200, 30, 10);
  rect(305, 260+200, 10, 20);
  rect(275, 250+200, 10, 80);
  rect(265, 280+200, 10, 40);
  rect(285, 260+200, 10, 80);
  rect(295, 280+200, 10, 30);
  rect(345, 240+200, 10, 30);
  rect(335, 250+200, 10, 60);
  rect(345, 280+200, 10, 20);
  rect(325, 260+200, 10, 60);
  rect(315, 280+200, 10, 50);
  rect(305, 310+200, 10, 20);

  //something else
  darkfill(224, 224, 0);
  rect(285, 330+200, 10, 10);

flower2(290);
flower3(590);

if (flowercounter1 == 2 && flowercounter2 == 0 && flowercounter3 == 1){
   image(happybirthdayfoto, 320,-135,500,550);

}
else{
  fill(0);
noStroke();
textSize(40);
text("guess the flower combination (˵ •̀ ᴗ - ˵ )", 50, 40);
}

}

function flower2(x){
 //stengel
  fill(0, 150, 0);
  rect(300+x, 350+200, 20, 150);
  // donker groen blad kant
  fill(0, 180, 0);
  rect(290+x, 460+200, 10, 20);
  rect(280+x, 450+200, 10, 20);
  rect(260+x, 440+200, 20, 20);
  rect(250+x, 430+200, 10, 20);
  rect(240+x, 420+200, 10, 20);
  rect(230+x, 410+200, 10, 20);
  rect(220+x, 400+200, 10, 20);
  rect(210+x, 390+200, 10, 10);
  rect(200+x, 380+200, 10, 10);
  // licht groen blad kant
  fill(0, 220, 0);
  rect(200+x, 370+200, 30, 10);
  rect(210+x, 380+200, 30, 10);
  rect(220+x, 390+200, 30, 10);
  rect(230+x, 400+200, 30, 10);
  rect(240+x, 410+200, 30, 10);
  rect(250+x, 420+200, 30, 10);
  rect(260+x, 430+200, 30, 10);
  rect(280+x, 440+200, 20, 10);
  rect(290+x, 450+200, 10, 10);

  // 2de donker groen blad kant
  fill(0, 180, 0);
  rect(320+x, 460+200, 10, 20);
  rect(280 + 50+x, 450+200, 10, 20);
  rect(260 + 80+x, 440+200, 20, 20);
  rect(250 + 110+x, 430+200, 10, 20);
  rect(240 + 130+x, 420+200, 10, 20);
  rect(230 + 150+x, 410+200, 10, 20);
  rect(220 + 170+x, 400+200, 10, 20);
  rect(210 + 190+x, 390+200, 10, 10);
  rect(200 + 210+x, 380+200, 10, 10);
  // 2de licht groen blad kant
  fill(0, 220, 0);
  rect(200 + 190+x, 370+200, 30, 10);
  rect(210 + 170+x, 380+200, 30, 10);
  rect(220 + 150+x, 390+200, 30, 10);
  rect(230 + 130+x, 400+200, 30, 10);
  rect(240 + 110+x, 410+200, 30, 10);
  rect(250 + 90+x, 420+200, 30, 10);
  rect(260 + 70+x, 430+200, 30, 10);
  rect(280 + 40+x, 440+200, 20, 10);
  rect(290 + 30+x, 450+200, 10, 10);

  //outer layer bloem
  outerfill2(194, 194, 0);
  rect(285+x, 340+200, 50, 10);
  rect(275+x, 330+200, 10, 10);
  rect(335+x, 330+200, 10, 10);
  rect(265+x, 320+200, 10, 10);
  rect(345+x, 320+200, 10, 10);
  rect(255+x, 280+200, 10, 40);
  rect(355+x, 280+200, 10, 40);
  rect(265+x, 270+200, 10, 10);
  rect(255+x, 240+200, 10, 30);
  rect(345+x, 270+200, 10, 10);
  rect(355+x, 240+200, 10, 30);
  rect(265+x, 230+200, 20, 10);
  rect(295+x, 230+200, 30, 10);
  rect(335+x, 230+200, 20, 10);
  rect(285+x, 240+200, 10, 20);
  rect(325+x, 240+200, 10, 20);
  rect(295+x, 260+200, 10, 20);
  rect(315+x, 260+200, 10, 20);
  rect(305+x, 280+200, 10, 30);
  rect(295+x, 310+200, 10, 30);

  // de light kleurige delen
  lightfill2(255, 255, 175);
  rect(265+x, 240+200, 10, 30);
  rect(275+x, 240+200, 10, 10);
  rect(295+x, 240+200, 10, 10);
  rect(335+x, 240+200, 10, 10);


  // de donkere kant van de bloem
  darkfill2(224, 224, 0);
  rect(345+x, 300+200, 10, 20);
  rect(335+x, 310+200, 10, 20);
  rect(325+x, 320+200, 10, 20);
  rect(305+x, 330+200, 20, 10);
  rect(285+x, 330+200, 10, 10);



  // de centrale kleur van de bloem
  centralfill2(245, 245, 0);
  rect(305+x, 240+200, 20, 10);
  rect(295+x, 250+200, 30, 10);
  rect(305+x, 260+200, 10, 20);
  rect(275+x, 250+200, 10, 80);
  rect(265+x, 280+200, 10, 40);
  rect(285+x, 260+200, 10, 80);
  rect(295+x, 280+200, 10, 30);
  rect(345+x, 240+200, 10, 30);
  rect(335+x, 250+200, 10, 60);
  rect(345+x, 280+200, 10, 20);
  rect(325+x, 260+200, 10, 60);
  rect(315+x, 280+200, 10, 50);
  rect(305+x, 310+200, 10, 20);

  //something else
  darkfill2(224, 224, 0);
  rect(285+x, 330+200, 10, 10); 
}

function flower3(x){
 //stengel
  fill(0, 150, 0);
  rect(300+x, 350+200, 20, 150);
  // donker groen blad kant
  fill(0, 180, 0);
  rect(290+x, 460+200, 10, 20);
  rect(280+x, 450+200, 10, 20);
  rect(260+x, 440+200, 20, 20);
  rect(250+x,430+200, 10, 20);
  rect(240+x, 420+200, 10, 20);
  rect(230+x, 410+200, 10, 20);
  rect(220+x, 400+200, 10, 20);
  rect(210+x, 390+200, 10, 10);
  rect(200+x, 380+200, 10, 10);
  // licht groen blad kant
  fill(0, 220, 0);
  rect(200+x, 370+200, 30, 10);
  rect(210+x, 380+200, 30, 10);
  rect(220+x, 390+200, 30, 10);
  rect(230+x, 400+200, 30, 10);
  rect(240+x, 410+200, 30, 10);
  rect(250+x, 420+200, 30, 10);
  rect(260+x, 430+200, 30, 10);
  rect(280+x, 440+200, 20, 10);
  rect(290+x, 450+200, 10, 10);

  // 2de donker groen blad kant
  fill(0, 180, 0);
  rect(320+x, 460+200, 10, 20);
  rect(280 + 50+x, 450+200, 10, 20);
  rect(260 + 80+x, 440+200, 20, 20);
  rect(250 + 110+x, 430+200, 10, 20);
  rect(240 + 130+x, 420+200, 10, 20);
  rect(230 + 150+x, 410+200, 10, 20);
  rect(220 + 170+x, 400+200, 10, 20);
  rect(210 + 190+x, 390+200, 10, 10);
  rect(200 + 210+x, 380+200, 10, 10);
  // 2de licht groen blad kant
  fill(0, 220, 0);
  rect(200 + 190+x, 370+200, 30, 10);
  rect(210 + 170+x, 380+200, 30, 10);
  rect(220 + 150+x, 390+200, 30, 10);
  rect(230 + 130+x, 400+200, 30, 10);
  rect(240 + 110+x, 410+200, 30, 10);
  rect(250 + 90+x, 420+200, 30, 10);
  rect(260 + 70+x, 430+200, 30, 10);
  rect(280 + 40+x, 440+200, 20, 10);
  rect(290 + 30+x, 450+200, 10, 10);

  //outer layer bloem
  outerfill3(194, 194, 0);
  rect(285+x, 340+200, 50, 10);
  rect(275+x, 330+200, 10, 10);
  rect(335+x, 330+200, 10, 10);
  rect(265+x, 320+200, 10, 10);
  rect(345+x, 320+200, 10, 10);
  rect(255+x, 280+200, 10, 40);
  rect(355+x, 280+200, 10, 40);
  rect(265+x, 270+200, 10, 10);
  rect(255+x, 240+200, 10, 30);
  rect(345+x, 270+200, 10, 10);
  rect(355+x, 240+200, 10, 30);
  rect(265+x, 230+200, 20, 10);
  rect(295+x, 230+200, 30, 10);
  rect(335+x, 230+200, 20, 10);
  rect(285+x, 240+200, 10, 20);
  rect(325+x, 240+200, 10, 20);
  rect(295+x, 260+200, 10, 20);
  rect(315+x, 260+200, 10, 20);
  rect(305+x, 280+200, 10, 30);
  rect(295+x, 310+200, 10, 30);

  // de light kleurige delen
  lightfill3(255, 255, 175);
  rect(265+x, 240+200, 10, 30);
  rect(275+x, 240+200, 10, 10);
  rect(295+x, 240+200, 10, 10);
  rect(335+x, 240+200, 10, 10);


  // de donkere kant van de bloem
  darkfill3(224, 224, 0);
  rect(345+x, 300+200, 10, 20);
  rect(335+x, 310+200, 10, 20);
  rect(325+x, 320+200, 10, 20);
  rect(305+x, 330+200, 20, 10);
  rect(285+x, 330+200, 10, 10);



  // de centrale kleur van de bloem
  centralfill3(245, 245, 0);
  rect(305+x, 240+200, 20, 10);
  rect(295+x, 250+200, 30, 10);
  rect(305+x, 260+200, 10, 20);
  rect(275+x, 250+200, 10, 80);
  rect(265+x, 280+200, 10, 40);
  rect(285+x, 260+200, 10, 80);
  rect(295+x, 280+200, 10, 30);
  rect(345+x, 240+200, 10, 30);
  rect(335+x, 250+200, 10, 60);
  rect(345+x, 280+200, 10, 20);
  rect(325+x, 260+200, 10, 60);
  rect(315+x, 280+200, 10, 50);
  rect(305+x, 310+200, 10, 20);

  //something else
  darkfill3(224, 224, 0);
  rect(285+x, 330+200, 10, 10); 
}
function outerfill(v1, v2, v3, alpha) {
  fill(v1, v2, v3, alpha)
  if (flowercounter1 == 1) {
    fill(179, 0, 146);
  }
  else if (flowercounter1 == 2) {
    fill(0, 0, 194);
  }
  else{
    flowercounter1 = 0
  }
}

function lightfill(v1, v2, v3, alpha) {
  fill(v1, v2, v3, alpha);
  if (flowercounter1 == 1) {
    fill(255, 205, 246);
  }
  else if (flowercounter1 == 2) {
    fill(159, 159, 255);
  }
  else{
    flowercounter1 = 0
  }
}

function darkfill(v1, v2, v3, alpha) {
  fill(v1, v2, v3, alpha);
 if (flowercounter1 == 1) {
    fill(230, 0, 187);
  }
  else if (flowercounter1 == 2) {
    fill(0, 0, 222);
  }
  else{
    flowercounter1 = 0
  }
}

function centralfill(v1, v2, v3, alpha) {
  fill(v1, v2, v3, alpha);
  if (flowercounter1 == 1) {
    fill(255, 111, 229);
  }
  else if (flowercounter1 == 2) {
    fill(0, 0, 245);
  }
  else{
    flowercounter1 = 0
  }
}
function outerfill2(vv1, vv2, vv3, alpha) {
  fill(vv1, vv2, vv3, alpha)
  if (flowercounter2 == 1) {
    fill(179, 0, 146);
  }
  else if (flowercounter2 == 2) {
    fill(0, 0, 194);
  }
  else{
    flowercounter2 = 0
  }
}

function lightfill2(vv1, vv2, vv3, alpha) {
  fill(vv1, vv2, vv3, alpha);
  if (flowercounter2 == 1) {
    fill(255, 205, 246);
  }
  else if (flowercounter2 == 2) {
    fill(159, 159, 255);
  }
  else{
    flowercounter2 = 0
  }
}

function darkfill2(vv1, vv2, vv3, alpha) {
  fill(vv1, vv2, vv3, alpha);
 if (flowercounter2 == 1) {
    fill(230, 0, 187);
  }
  else if (flowercounter2 == 2) {
    fill(0, 0, 222);
  }
  else{
    flowercounter2 = 0
  }
}

function centralfill2(vv1, vv2, vv3, alpha) {
  fill(vv1, vv2, vv3, alpha);
  if (flowercounter2 == 1) {
    fill(255, 111, 229);
  }
  else if (flowercounter2 == 2) {
    fill(0, 0, 245);
  }
  else{
    flowercounter2 = 0
  }
}
function outerfill3(vv1, vv2, vv3, alpha) {
  fill(vv1, vv2, vv3, alpha)
  if (flowercounter3 == 1) {
    fill(179, 0, 146);
  }
  else if (flowercounter3 == 2) {
    fill(0, 0, 194);
  }
  else{
    flowercounter3 = 0
  }
}

function lightfill3(vv1, vv2, vv3, alpha) {
  fill(vv1, vv2, vv3, alpha);
  if (flowercounter3 == 1) {
    fill(255, 205, 246);
  }
  else if (flowercounter3 == 2) {
    fill(159, 159, 255);
  }
  else{
    flowercounter3 = 0
  }
}

function darkfill3(vv1, vv2, vv3, alpha) {
  fill(vv1, vv2, vv3, alpha);
 if (flowercounter3 == 1) {
    fill(230, 0, 187);
  }
  else if (flowercounter3 == 2) {
    fill(0, 0, 222);
  }
  else{
    flowercounter3 = 0
  }
}

function centralfill3(vv1, vv2, vv3, alpha) {
  fill(vv1, vv2, vv3, alpha);
  if (flowercounter3 == 1) {
    fill(255, 111, 229);
  }
  else if (flowercounter3 == 2) {
    fill(0, 0, 245);
  }
  else{
    flowercounter3 = 0
  }
}

function mousePressed() {
  if (mouseButton == LEFT) {
    //rect(250,230,120,120)
    if (mouseX > 250 && mouseX < 250 + 120 && mouseY > 430 && mouseY < 430 + 120) {
      flowercounter1 = flowercounter1 + 1   
    }
    //rect(540,230,120,120);
    if (mouseX > 540 && mouseX < 540 + 120 && mouseY > 430 && mouseY < 430 + 120){
      flowercounter2 = flowercounter2 + 1
    }
    //rect(830,230,120,120);
    if (mouseX > 830 && mouseX < 830 + 120 && mouseY > 430 && mouseY < 430 + 120){
      flowercounter3 = flowercounter3 + 1
    }
  }
 

}
function preload(){
  happybirthdayfoto = loadImage("something3.png");
}