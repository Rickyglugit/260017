let timer = 0

let answerbutton1color = 'white'
let answerbutton2color = 'white'
let answerbutton3color = 'white'
let answerbutton4color = 'white'
let questionpanelcolor = 'white'

let questionturn = 0

let vraagtekenplaatje;
let italiaansevlag;
let sierreleonevlag;
let shift;
let canadavlag;
let romeinserijk;
let code

let vragen = [];

function setup() {
  createCanvas(1255, 550);

  vragen = [
    {
      vraagTekst: "Hoeveel minuten zit er in een uur?",
      antwoorden: ["60 minuten", "60 seconden", "67 minuten C", "3599 seconden"],
      goedeAntwoord: 1,
      plaatje: vraagtekenplaatje
    },
    {
      vraagTekst: "Bij welk land behoort deze vlag?",
      antwoorden: ["Italië", "Mexico", "Ierland", "Rusland"],
      goedeAntwoord: 2,
      plaatje: italiaansevlag
    },
    {
      vraagTekst: "Bij welk land behoord deze vlag?",
      antwoorden: ["Nederland", "Sierre leone", "Ijsland ", "Japan "],
      goedeAntwoord: 1,
      plaatje: sierreleonevlag
    },
    {
      vraagTekst: "Hoeveel inwoners heeft Nederland?",
      antwoorden: ["67mil", "18 mil", "21 mil", "5 mil"],
      goedeAntwoord: 1,
      plaatje: vraagtekenplaatje
    },
    {
      vraagTekst: "Welke knop wordt hier ingedrukt?",
      antwoorden: ["ctrl", "spatie", "Alt", "Shift"],
      goedeAntwoord: 1,
      plaatje: shift
    },
    {
      vraagTekst: "welk land behoort tot deze vlag?",
      antwoorden: ["America", "Canada", "Mexico", "Yemen"],
      goedeAntwoord: 1,
      plaatje: canadavlag
    },
    {
      vraagTekst: "wie is  nu de premier van Nederland(2026)?",
      antwoorden: ["Rob Jetten", "Jesse Klaver", "Mark rutte", "Dick schoof"],
      goedeAntwoord: 1,
      plaatje: vraagtekenplaatje
    },
    {
      vraagTekst: "wat betekent 'wie geht's' in het Nederlands?",
      antwoorden: ["Hoe gaat het?", "Waar ben je?", "Wie ben je?", "Waar is de trein?"],
      goedeAntwoord: 1,
      plaatje: vraagtekenplaatje
    },
    {
      vraagTekst: "wie was de eerste leider van het romeinserijk?",
      antwoorden: ["Octavius", "Julius caesar", "Napoleon", "Didius"],
      goedeAntwoord: 1,
      plaatje: romeinserijk
    },
    {
      vraagTekst: "welke vorm maak je met de code 'rect'?",
      antwoorden: ["vierkant", "Rechthoek", "Balk", "driehoek"],
      goedeAntwoord: 1,
      plaatje: code
    },
  ]
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
  questionpanel(20, 20);
  // de timer die aangeeft hoeveel seconden je hebt per vraag
  fill(0, 0, 0);
  textSize(40);
  text(timer, 1100, 250);

  let huidigeVraag = vragen[questionturn];
  text(huidigeVraag.vraagTekst, 30, 100);
  text(huidigeVraag.antwoorden[0],170,390);
  text(huidigeVraag.antwoorden[1],820,390);
  text(huidigeVraag.antwoorden[2],170,490);
  text(huidigeVraag.antwoorden[3],820,490);
  image(huidigeVraag.plaatje, 850, 50, 200, 200);


//hover effect over de buttons
  if (mouseX > 20 && mouseX < 20 + 600 && mouseY > 430 && mouseY < 430 + 100) {
    answerbutton1color = 'gray'
  }
  else { 
    answerbutton1color = 'white'
  }
  if (mouseX > 635 && mouseX < 635 + 600 && mouseY > 430 && mouseY < 430 + 100) {
    answerbutton2color = 'gray'
  }
  else {
    answerbutton2color = 'white'
  }
  if(mouseX > 20 && mouseX < 20 + 600 && mouseY > 320 && mouseY < 320 + 100) {
     answerbutton3color = 'gray'
  }
  else {
    answerbutton3color = 'white'
  }
   if (mouseX > 635 && mouseX < 635 + 600 && mouseY > 320 && mouseY < 320 + 100){
     answerbutton4color = 'gray'
  }
  else {
    answerbutton4color = 'white'
   }
  // Stappenplan voor Ricky
  // 1. Vragen array vullen met JOUW vragen en antwoorden (en plaatjes)
  // 2. Zorgen dat als je op een antwoord klikt, dat hij dan door gaat naar de volgende vraag
  // (oftewel, questionturn veranderen.) Maak je nog geen zorgen om dat het antwoord goed moet zijn.
  // 3. Daadwerkelijk checken of de gebruiker op het goede antwoord klikt!
  // 4. Score bijhouden van hoeveel vragen je goed hebt!


}

function answerbutton(x, y) {
  rect(x, y, 600, 100, 10);
}
function questionpanel(x, y) {
  rect(x, y, 1215, 250, 10);
}
function mousePressed() {
  if (mouseButton == LEFT) {

    if (mouseX > 20 && mouseX < 20 + 600 && mouseY > 430 && mouseY < 430 + 100) {
      questionturn += 1;
    }
    else if (mouseX > 635 && mouseX < 635 + 600 && mouseY > 430 && mouseY < 430 + 100) {
      questionturn += 1;
    }
    else if (mouseX > 20 && mouseX < 20 + 600 && mouseY > 320 && mouseY < 320 + 100) {
      questionturn += 1;
    }
    else if (mouseX > 635 && mouseX < 635 + 600 && mouseY > 320 && mouseY < 320 + 100) {
      questionturn += 1;
    }
  }
}
function preload() {
  vraagtekenplaatje = loadImage('vraagteken.png');
  italiaansevlag = loadImage('italy.png');
  sierreleonevlag = loadImage('siere leone.png');
  shift = loadImage('toetsenbord.webp');
  canadavlag = loadImage('canada.webp');
  romeinserijk = loadImage('romeinsrijk.webp');
  code = loadImage('coding.webp')

}