function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
//opdracht 1
  fill(0, 0, 0);
  text("1", 20, 20);

  for (let i = 0; i < 10; i++) {
    fill(255,255,255);
    rect(i * 50, 50, 50, 50);

  }

}
