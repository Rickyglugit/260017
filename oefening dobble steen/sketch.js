let randomnumber = 6;
let timer= 0
let timerActive= false

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  // dobbel steen
  fill(0,0,0);
rect(300,200,200,200,10);
fill(255,255,255);



if (randomnumber ==1 ){
  fill('white');
  circle(400,300,30,30);
}

if (randomnumber ==2 ){
circle(335,225,30,30);
circle(470,375,30,30);
}

if (randomnumber ==3 ){
circle(335,225,30,30);
circle(400,300,30,30);
circle(470,375,30,30);
}

if (randomnumber ==4){
circle(335,225,30,30);
circle(335,375,30,30);
circle(470,225,30,30);
circle(470,375,30,30);
}

if (randomnumber ==5 ){
  circle(335,225,30,30);
circle(335,375,30,30);
circle(470,225,30,30);
circle(470,375,30,30);
circle(400,300,30,30);
}

if (randomnumber ==6 ){
circle(335,225,30,30);
circle(335,300,30,30);
circle(335,375,30,30);
circle(470,225,30,30);
circle(470,300,30,30);
circle(470,375,30,30);

}
}



function keyPressed(){ 
  if(keyCode ===32)
  {randomnumber = round(random(1,6))
}
}
 

