let textstats = ["gezondheid", "energie", "geluk", "honger"];

function setup() {
  createCanvas(1255, 550);

}

function draw() {
  background(220);

  for (let i = 0; i < 4; i++) {

    fill(0, 255, 0);
    rect(1050 + 50 * i, 50, 50, 30, 1);
    for (let i = 0; i < 4; i++) {
      fill(255, 255, 0);
      rect(1050 + 50 * i, 100, 50, 30);
    }
    for (let i = 0; i < 4; i++) {
      fill(255, 0, 255);
      rect(1050 + 50 * i, 150, 50, 30);
    } for (let i = 0; i < 4; i++) {
      fill(255, 0, 0);
      rect(1050 + 50 * i, 200, 50, 30);
    }
  }
  for (let i = 0; i < textstats.length; i++) {
    fill(255);
    textSize(20);
    text(textstats[i], 1110, 70 + 50 * i);
  }
  //het zwarte platform waar de knoppen in komen
  fill(0, 0, 0);
  circle(600, 950, 1000);
  fill(230, 230, 230);
  circle(600, 950, 975);

  icon(50,50,'green');

}
function icon(x, y, fill) {
  fill(255, 255, 255);
  circle(x, y, 100);
  fill( fill)
  circle(x, y,80);
  fill(255,255,255)
  circle(x, y, 60);

}