function setup() {
  createCanvas(1255, 550);
}

function draw() {
  background(220);

  //knopje links onder
  answerbutton(20, 430);
  //knopje rechts onder
  answerbutton(635, 430);
  //knopje links boven
  answerbutton(20, 320);
  //knopje rechts boven
  answerbutton(635, 320);

//de plek waar de vragen te zien zijn
questionpanel(20,20);

}

function answerbutton(x, y) {
  rect(x, y, 600, 100, 10);
}
function questionpanel(x, y) {
  rect(x, y ,1215,250,10);
}