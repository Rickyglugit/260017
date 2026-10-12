
let questionpanelcolor = 'white'

let questionturn = 0

let nextquestion;

// de fotos
let vraagtekenplaatje;
let italiaansevlag;
let sierreleonevlag;
let shift;
let canadavlag;
let romeinserijk;
let code

let vragen = [];
let answer1Button;
let answer2Button;
let answer3Button;
let answer4Button;

function setup() {
  createCanvas(1255, 550);
  // de antwoord knoppen
  answer1Button = createButton("Antwoord 1");
  answer1Button.position(27, 437);
  answer1Button.size(600, 100,);
  answer1Button.mousePressed(buttonAnswer1Pressed);
  answer1Button.style("background-color", "");

  answer2Button = createButton("Antwoord 2");
  answer2Button.position(27, 327);
  answer2Button.size(600, 100);
  answer2Button.mousePressed(buttonAnswer2Pressed);
  answer2Button.style("background-color", "");

  answer3Button = createButton("Antwoord 3");
  answer3Button.position(645, 327)
  answer3Button.size(600, 100);
  answer3Button.mousePressed(buttonAnswer3Pressed);
  answer3Button.style("background-color", "");

  answer4Button = createButton("Antwoord 4");
  answer4Button.position(645, 437);
  answer4Button.size(600, 100);
  answer4Button.mousePressed(buttonAnswer4Pressed);
  answer4Button.style("background-color", "");

  // de volgende vraag knop
  nextquestion = createButton("volgende vraag")
  nextquestion.position(-500, -500);
  nextquestion.size(100, 50);
  nextquestion.mousePressed(nextquestionbutton);

  // de vragen in een data object
  vragen = [
    {
      vraagTekst: "Hoeveel minuten zit er in een uur?",
      antwoorden: ["60 minuten", "60 seconden", "67 minuten ", "3599 seconden"],
      goedeAntwoord: 0,
      plaatje: vraagtekenplaatje
    },
    {
      vraagTekst: "Bij welk land behoort deze vlag?",
      antwoorden: ["Italië", "Mexico", "Ierland", "Rusland"],
      goedeAntwoord: 0,
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
      antwoorden: ["Ctrl", "Spatie", "Alt", "Shift"],
      goedeAntwoord: 3,
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
      antwoorden: ["Rob Jetten", "Jesse Klaver", "Mark Rutte", "Dick Schoof"],
      goedeAntwoord: 0,
      plaatje: vraagtekenplaatje
    },
    {
      vraagTekst: "wat betekent 'wie geht's' in het Nederlands?",
      antwoorden: ["Hoe gaat het?", "Waar ben je?", "Wie ben je?", "Waar is de trein?"],
      goedeAntwoord: 0,
      plaatje: vraagtekenplaatje
    },
    {
      vraagTekst: "wie was de eerste leider van het romeinser rijk?",
      antwoorden: ["Napoleon", "Julius Caesar", "Octavius", "Didius"],
      goedeAntwoord: 2,
      plaatje: romeinserijk
    },
    {
      vraagTekst: "welke vorm maak je met de code 'rect'?",
      antwoorden: ["Ellips", "Driehoek", "Balk", "Rechthoek"],
      goedeAntwoord: 3,
      plaatje: code

    },
    // deze 'vraag' is er zodat de restart functie werkt
    {
      vraagTekst: "",
      antwoorden: ["X", "X", "X", "Restart?"],
      goedeAntwoord: 3,

    },

  ]
}

function draw() {
  background(220);

  //de plek waar de vragen te zien zijn
  fill(questionpanelcolor);
  questionpanel(20, 20);
  // kleur en hoe groot de tekst van de vragen zijn
  fill(0, 0, 0);
  textSize(40);

  // de huidige vraag is de vraag die nu in de draw wordt gezien
  // en questionturn is de vraaag die nu aan de beurt is
  let huidigeVraag = vragen[questionturn];
  text(huidigeVraag.vraagTekst, 30, 100);

  // de tekst die op de antwoorden knoppen te zien zijn
  answer1Button.html(huidigeVraag.antwoorden[0]);
  answer2Button.html(huidigeVraag.antwoorden[1]);
  answer3Button.html(huidigeVraag.antwoorden[2]);
  answer4Button.html(huidigeVraag.antwoorden[3]);

  //geeft aan welke foto op de draw fuctie te zien is
  image(huidigeVraag.plaatje, 850, 50, 200, 200);

  // Stappenplan voor Ricky
  // 3. Daadwerkelijk checken of de gebruiker op het goede antwoord klikt!
  // 4. Score bijhouden van hoeveel vragen je goed hebt!


}
// de functie waar de vragen op te zien zijn
function questionpanel(x, y) {
  rect(x, y, 1215, 250, 10);
}

function preload() {
  // zorgt dat de foto in de code staat
  vraagtekenplaatje = loadImage('vraagteken.png');
  italiaansevlag = loadImage('italy.png');
  sierreleonevlag = loadImage('siere leone.png');
  shift = loadImage('toetsenbord.webp');
  canadavlag = loadImage('canada.webp');
  romeinserijk = loadImage('romeinsrijk.webp');
  code = loadImage('coding.webp')

}
// nextquestionbutton functie zorgt ervoor dat als je op de knop klikt dat het
//daadwerkelijk naar de volgende vraag gaat
function nextquestionbutton() {
  questionturn = questionturn + 1;
  nextquestion.hide();
  // zorgt ervoor dat de nextquestion knop veranderd in een start knop die weer naar vraag 1 gaat
  if (questionturn == 9) {
    nextquestion.html("restart?");
  }
  else {
    nextquestion.html("volgende vraag")
  }
  if (questionturn == 10) {
    questionturn = 0
  }

}
function buttonAnswer1Pressed() {

  // Lees de huidige vraag (data object)
  let huidigeVraag = vragen[questionturn];

  // Als het goede antwoord 0 is, dan hoort dat bij deze knop, en wordt ie groen.
  // zo niet? is die rood
  if (huidigeVraag.goedeAntwoord == 0) {
    answer1Button.style("background-color", "green");
    nextquestion.show();
    nextquestion.position(500, 150);
  }
  else {
    answer1Button.style("background-color", "red");
  }

}
function buttonAnswer2Pressed() {

// Lees de huidige vraag (data object)
  let huidigeVraag = vragen[questionturn];

 // Als het goede antwoord 0 is, dan hoort dat bij deze knop, en wordt ie groen.
  // zo niet? is die rood
  if (huidigeVraag.goedeAntwoord == 1) {
    answer2Button.style("background-color", "green");
    nextquestion.show();
    nextquestion.position(500, 150);
  }
  else {
    answer2Button.style("background-color", "red");
  }

}
function buttonAnswer3Pressed() {
  // Lees de huidige vraag (data object)

  let huidigeVraag = vragen[questionturn];

 // Als het goede antwoord 0 is, dan hoort dat bij deze knop, en wordt ie groen.
  // zo niet? is die rood
  if (huidigeVraag.goedeAntwoord == 2) {
    answer3Button.style("background-color", "green");
    nextquestion.show();
    nextquestion.position(500, 150);
  }
  else {
    answer3Button.style("background-color", "red");
  }

}
function buttonAnswer4Pressed() {

  // Lees de huidige vraag (data object)
  let huidigeVraag = vragen[questionturn];

 // Als het goede antwoord 0 is, dan hoort dat bij deze knop, en wordt ie groen.
  // zo niet? is die rood
  if (huidigeVraag.goedeAntwoord == 3) {
    answer4Button.style("background-color", "green");
    nextquestion.show();
    nextquestion.position(500, 150);
  }
  else {
    answer4Button.style("background-color", "red");
  }

}