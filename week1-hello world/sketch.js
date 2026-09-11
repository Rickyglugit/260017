let crewmate;

function preload() {
  crewmate = loadImage('among_us_crewmate.png');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(0,0,0)
  textSize(15)
  text("1 Ricky Biezen",50,50);

  text("2 vlag",50,100);
  strokeWeight(0)
  fill(255,0,0);
rect( 50, 150, 75,25);

fill(255,255,255,);
rect(50,175,75,25);

fill(0,92,255);
rect(50,200,75,25);

fill(0,0,0);
textSize(15);
text("3 checkboard",50,275);
strokeWeight(10);
rect(50,300,75,75);
strokeWeight(0);
fill(255,255,255);
rect(75,325,25,25);
rect(50,300,25,25);
rect(100,300,25,25);
rect(50,350,25,25);
rect(100,350,25,25);

fill(0,0,0);
textSize(15);
text("4 transparant huis",50,425);
strokeWeight(5)
fill(255,255,255);
rect(50,475,50,50);
triangle(50,475,100,475,75,450);

fill(0,0,0);
textSize(15);
text("5 verkeerslicht",200,50);
strokeWeight(0);
fill(152,157,166);
rect(200,75,40,100);
rect(215,160,10,50);

fill(255,0,26);
circle(220,100,20,20);

fill(255,175,0);
circle(220,125,20,20);

fill(0,255,0);
circle(220,150,20,20)

fill(0,0,0);
textSize(15);
text("6 dobbelsteen",200,275);
fill(255,255,255);
strokeWeight(5);
rect(200,300,50,50,10);
fill(0,0,0);
circle(225,325,5,5);
circle(210,310,5,5);
circle(240,340,5,5);

fill(0,0,0);
textSize(15);
text("7 mario",450,50);
strokeWeight(0);
fill(255,0,0);
rect(450,65,100,10);
rect(440,75,140,10);
fill(143,117,0);
rect(440,85,50,10);
fill(245,231,169);
rect(480,85,60,10);
fill(0,0,0);
rect(520,85,30,10);
fill(143, 117, 0);
rect(420,95,20,10);
fill(245, 231, 169);
rect(440,95,20,10);
fill(143, 117, 0);
rect(460,95,20,10);
fill(245, 231, 169);
rect(480,95,40,10);
fill(0,0,0);
rect(520,95,30,10);
fill(245, 231, 169); 
rect(550,95,30,10);
fill(143, 117, 0); 
rect(420,105,20,10);
fill(245, 231, 169);
rect(440,105,20,10);
fill(143, 117, 0);
rect(460,105,20,10);
fill(245, 231, 169);
rect(480,105,40,10);
fill(143, 117, 0);
rect(480,85,20,10);
fill(143, 117, 0);
rect(480,105,20,10);
fill(245, 231, 169);
rect(520,105,40,10);
fill(0,0,0);
rect(550,105,20,10);
fill(245, 231, 169);
rect(570,105,30,10);
fill(143, 117, 0);
rect(420,115,40,10);
fill(245, 231, 169);
rect(460,115,60,10);
fill(0,0,0);
rect(520,115,60,10);
fill(245, 231, 169);
rect(460,125,110,10);
fill(255,0,0);
rect(440,135,40,10);
fill(0,0,255);
rect(480,135,20,10);
fill(255,0,0);
rect(500,135,40,10);
fill(255,0,0);
rect(420,145,60,10);
fill(0,0,255);
rect(480,145,20,10);
fill(255,0,0);
rect(500,145,40,10);
fill(0,0,255);
rect(540,145,20,10);
fill(255,0,0);
rect(560,145,40,10);
// bovenste rect mogelijk veranderen mario rechter schouder
fill(255,0,0);
rect(400,155,80,10);
fill(0,0,255);
rect(480,155,80,10);
fill(255,0,0);
rect(560,155,60,10);
fill(245, 231, 169);
rect(400,165,40,10);
fill(255,0,0);
rect(440,165,20,10);
fill(0,0,255);
rect(460,165,20,10);
fill(251, 255, 0);
rect(480,165,20,10);
fill(0,0,255);
rect(500,165,40,10);
fill(251, 255, 0);
rect(540,165,20,10);
fill(255,0,0);
rect(560,165,20,10);
fill(245, 231, 169);
rect(580,165,40,10);
fill(245, 231, 169);
rect(400,175,60,10);
fill(0,0,255);
rect(460,175,120,10);
fill(245, 231, 169);
rect(580,175,40,10);
fill(245, 231, 169);
rect(400,185,40,10);
fill(0,0,255);
rect(440,185,140,10);
fill(245, 231, 169);
rect(580,185,40,10);
fill(0,0,0);
text("8 crewmate",400,275,);
image(crewmate, 400, 300, 100, 100)

}
