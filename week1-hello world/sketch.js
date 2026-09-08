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
circle(217,50,30,30);


}
