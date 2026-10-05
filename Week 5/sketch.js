let timer = 0

let answerbutton1color = 'white'
let answerbutton2color = 'white'
let answerbutton3color = 'white'
let answerbutton4color = 'white'
let questionpanelcolor = 'white'

 let questionturn = 0

function setup() {
  createCanvas(1255, 550);
}

function draw() {
  background(220);

  //knopje links onder
  fill(answerbutton1color);
  answerbutton(20, 430);
  //knopje rechts onder
  fill(answerbutton2color);
  answerbutton(635, 430);
  //knopje links boven
  fill(answerbutton3color);
  answerbutton(20, 320);
  //knopje rechts boven
  fill(answerbutton4color);
  answerbutton(635, 320);

//de plek waar de vragen te zien zijn
fill(questionpanelcolor);
questionpanel(20,20);
// de timer die aangeeft hoeveel seconden je hebt per vraag
fill(0,0,0);
textSize(40);
text(timer,1100,250);

if (questionturn == 1){
  text("hoeveel minuten zit er in een uur?",200,100);
}

}

function answerbutton(x, y) {
  rect(x, y, 600, 100, 10);
}
function questionpanel(x, y) {
  rect(x, y ,1215,250,10);
}
function mousepressed(){
  if (mouseButton == LEFT){

   if (mouseX > 20 && mouseX < 20 + 600 && mouseY > 430 && mouseY < 430 + 100){
    questionturn =1;
   }
   else if (mouseX > 635 && mouseX < 635 + 600 && mouseY > 430 && mouseY < 430 + 100){

   }
   else if (mouseX > 20 && mouseX < 20 + 600 && mouseY > 320 && mouseY < 320 + 100){

   }
   else if (mouseX > 635 && mouseX < 635 + 600 && mouseY > 320 && mouseY < 320 + 100){

   }
  }
}