let timer = 0

let answerbutton1color = 'white'
let answerbutton2color = 'white'
let answerbutton3color = 'white'
let answerbutton4color = 'white'
let questionpanelcolor = 'white'

 let questionturn = 10

 let vraagtekenplaatje;
 let italiaansevlag;
 let sierreleonevlag;
 let shift;
 let canadavlag;
 let romeinserijk;
 let code

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

// questionturn wisselt per vraag
if (questionturn == 0){
  text("hoeveel minuten zit er in een uur?",200,100);
  image(vraagtekenplaatje,850, 50, 200, 200);
}
else if(questionturn == 1){
  text("bij welk land behoort deze vlag?",200,100);
  image (italiaansevlag,850, 50, 200, 200)
}
else if(questionturn == 2){
  text("bij welk land behoord deze vlag?",200,100);
  image (sierreleonevlag,850, 50, 200, 200)
}
else if (questionturn == 3){
  text("hoeveel inwoners heeft Nederland?",200,100);
  image(vraagtekenplaatje,850, 50, 200, 200);
}
else if (questionturn == 4){
  text("welke knop wordt hier ingedrukt?",200,100);
  image(shift,850, 50, 200, 200);
}
else if (questionturn == 5){
  text("hoeveel seconden zitten er in een uur?",100,100);
  image(vraagtekenplaatje,850, 50, 200, 200);
}
else if (questionturn == 6){
  text("welk land behoort tot deze vlag?",200,100);
  image(canadavlag,850, 50, 200, 200);
}
else if (questionturn == 7){
  text("wie is  nu de premier van Nederland(2026)?",50,100);
  image(vraagtekenplaatje,850, 50, 200, 200);
}
else if (questionturn == 8){
  text("wat betekent 'wie geht's' in het Nederlands?",50,100);
  image(vraagtekenplaatje,850, 50, 200, 200);
}
else if (questionturn == 9){
  text("wie was de eerste leider van het romeinserijk?",30,100);
  image(romeinserijk,850, 50, 200, 200);
}
else if (questionturn == 10){
  text("welke vorm maak je met de code 'rect'?",30,100);
  image(code,850, 50, 200, 200);
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
    questionturn+1;
   }
   else if (mouseX > 635 && mouseX < 635 + 600 && mouseY > 430 && mouseY < 430 + 100){

   }
   else if (mouseX > 20 && mouseX < 20 + 600 && mouseY > 320 && mouseY < 320 + 100){

   }
   else if (mouseX > 635 && mouseX < 635 + 600 && mouseY > 320 && mouseY < 320 + 100){

   }
  }
}
function preload(){
vraagtekenplaatje = loadImage('vraagteken.png');
italiaansevlag = loadImage('italy.png');
sierreleonevlag = loadImage('siere leone.png');
shift = loadImage('toetsenbord.webp');
canadavlag = loadImage('canada.webp');
romeinserijk = loadImage('romeinsrijk.webp');
code = loadImage('coding.webp')

}