function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  fill(100,100,100);
  rect(50,50,50,150);

  for(let i = 0; i < 3; i++){
    circle(30,40+(i*40),40);
}

}
