let textstats = ["gezondheid", "energie", "vrolijkheid", "honger"];
let colorstats = ["#3cff00", "#f6ff00", "#fe0dea", "#ee1313"];
let statsWaardes = [100, 100, 100, 100];

let steakfoto;
let sponsefoto;
let maanfoto;
let roombackground;
let ballgame;
let aardbeifoto;
let spongebobfoto;
let sleepspeechbubblefoto;
let tennisballfoto;

let hongerPerSeconde = 0.6;
let gezondheidPerseconde = 0.8;
let vrolijkheidPerseconde = 1;
let energiePerseconden = 0.7;

let showFoodImage = false;
let foodImageX = 0;
let foodImageY = 0;
let foodFollowMouse = false;
let foodcounter = 0

let showSpongeImage = false;
let showSleepSpeechBubbleImage = false;

let showTennisBallImage = false;
let tennisImageX = [];
let tennisImageY = [];

let balloonPetX = 600;
let balloonPetY = 150;

function setup() {
  createCanvas(1255, 550);

  //loadedstatsJSON haalt de stats uit de local storage en onthoud het als je de website afsluit
  let loadedstatsJSON = getItem("stats")

  // loadedstats veranderd de loadedstatsJSON weer terug naar een data object?
  if (loadedstatsJSON != null) {

    let loadedstats = JSON.parse(loadedstatsJSON);

  // dit zorgt ervoor dat als de loadedstats.statwaardes niet gelijk staan aan 0  
  // datde statwaardes gelijk zijn aan de loadedstats.statWaardes
    if (loadedstats.statsWaardes != null) {
      statsWaardes = loadedstats.statsWaardes;
    }

  }

}

function draw() {
  background(220);
  image(roombackground, 0, 0, 1255, 550);
  // zorgt dat alle statwaardes naar beneden gaan
  statsWaardes[3] = statsWaardes[3] - hongerPerSeconde * deltaTime * 0.001;
  statsWaardes[2] = statsWaardes[2] - vrolijkheidPerseconde * deltaTime * 0.001;
  statsWaardes[1] = statsWaardes[1] - energiePerseconden * deltaTime * 0.001;
  // zorgt dat als de 3 statwaardes energie, honger en  geluk op 0 staan gaat gezondheid ook om laag
  if (statsWaardes[3] <= 0) {
    statsWaardes[0] = statsWaardes[0] - gezondheidPerseconde * deltaTime * 0.001;
  }
  if (statsWaardes[2] <= 0) {
    statsWaardes[0] = statsWaardes[0] - gezondheidPerseconde * deltaTime * 0.001;
  }
  if (statsWaardes[1] <= 0) {
    statsWaardes[0] = statsWaardes[0] - gezondheidPerseconde * deltaTime * 0.001;
  }
  // Als statwaardes onder de 0 komt, zet terug naar 0. Dus honger wordt nooit lager dan 0.
  if (statsWaardes[3] < 0) {
    statsWaardes[3] = 0;
  }
  if (statsWaardes[2] < 0) {
    statsWaardes[2] = 0;
  }
  if (statsWaardes[1] < 0) {
    statsWaardes[1] = 0;
  }
  if (statsWaardes[0] < 0) {
    statsWaardes[0] = 0;
  }


  // de 4 for loops zijn de statistieken
  for (let statIndex = 0; statIndex < 4; statIndex++) {

    let statWaarde = statsWaardes[statIndex];

    stroke(0);
    strokeWeight(2);

    // Blokken per statistiek
    for (let blokIndex = 0; blokIndex < 4; blokIndex++) {

      if (statWaarde > 25 * blokIndex) {// waarde is hoog genoeg voor dit blok
        fill(colorstats[statIndex]); // Pak de kleur van de stat
      }
      else {
        fill('black');
      }


      rect(1050 + 50 * blokIndex, 50 + 50 * statIndex, 50, 30);
    }
    // Teken de tekst (label van de stat) OVER de blokken heen
    fill(255);
    textSize(20);
    text(textstats[statIndex], 1110, 70 + 50 * statIndex);
  }

  strokeWeight(1)

  //het zwarte platform waar de knoppen in komen
  fill(0, 0, 0);
  circle(600, 920, 1000);
  fill(230, 230, 230);
  circle(600, 920, 975);
  // zijn de icoons in het menu voor tamagotchi
  icon(0, 10, 'red');
  icon(115, -25, 'lime');
  icon(215, -25, 'yellow');
  icon(330, 10, 'magenta');
  // fotos op de icoons
  image(steakfoto, 437, 495, 25, 25);
  image(sponsefoto, 553, 465, 25, 25);
  image(maanfoto, 650, 460, 30, 30);
  image(ballgame, 760, 490, 40, 40);

  // tamagotchi zelf
  strokeWeight(2)
  balloonpet(balloonPetX, balloonPetY, 205, 239, 250);
  balloonmouth()

  if (showFoodImage) {
    //als je op het voedsel klikt kun je het slepen
    if (foodFollowMouse) {
      foodImageX = mouseX - 25;
      foodImageY = mouseY - 25;
    }
    // zorgt ervoor dat zodra het voedsel in aanraking komt met de tamagotchi dat het voedsel verdwijnt
    let distanceToPet = dist(balloonPetX, balloonPetY, mouseX, mouseY);
    if (distanceToPet < 40) {
      showFoodImage = false;
      // de honger bar gaat weer om hoog als het voedsel verdwijnt
      statsWaardes[3] = statsWaardes[3] + 25
      statsWaardes[1] = statsWaardes[1] + 50
      foodcounter = foodcounter + 1
      if(foodcounter == 5){
        foodcounter = 0
        statsWaardes[0] = statsWaardes[0] - 25
      }
    }
    // foto van voedsel 
    image(aardbeifoto, foodImageX, foodImageY, 50, 50);
  }

  if (showSpongeImage) {
    image(spongebobfoto, mouseX - 35, mouseY - 55, 75, 125);
    let distanceToPet = dist(balloonPetX, balloonPetY, mouseX, mouseY);
    if (distanceToPet < 40) {
      statsWaardes[0] = statsWaardes[0] + 1
    }
    if (statsWaardes[0] > 100)
      showSpongeImage = false
  }
  if (showSleepSpeechBubbleImage) {
    image(sleepspeechbubblefoto, balloonPetX - 400, balloonPetY - 250, 550, 400);
    statsWaardes[1] = statsWaardes[1] + 1
    if (statsWaardes[1] > 100) {
      showSleepSpeechBubbleImage = false
    }
  }
  if (showTennisBallImage) {
    for (let index = 0; index < tennisImageX.length; index++) {
      image(tennisballfoto, tennisImageX[index], tennisImageY[index], 100, 100);
    }
  }


  if (tennisImageX.length > 0) {
    let targetX = tennisImageX[0]; // het x coordinaat van de eerste tennisbal
    let targetY = tennisImageY[0]; // het y coordinaat van de eerste tennisbal
    let richtingX = targetX - balloonPetX;
    let richtingY = targetY - balloonPetY;

    balloonPetX = balloonPetX + richtingX * 0.01;
    balloonPetY = balloonPetY + richtingY * 0.01;

    // Als de balloonpet de bal aanraakt (oftewel, dichtbij de targetX en targetY komt), verwijder dan de
    // eerste tennisbal uit de array
    // en doe de happiness omhoog
    let distanceToPet = dist(balloonPetX, balloonPetY, targetX, targetY);
    if (distanceToPet < 50) {
      statsWaardes[2] = statsWaardes[2] + 25;
      tennisImageX.shift();
      tennisImageY.shift();
      statsWaardes[1] = statsWaardes[1] - 25
    }
  }

  // stats variable is aangemaakt zodat je hem kan storen
  let stats = {
  };
  stats.statsWaardes = statsWaardes;
  // JSON stringify veranderd mijn data object in een string dat wordt opgeslagen in local storage
  storeItem("stats", JSON.stringify(stats));
}
function icon(x, y, color) {
  // layout van de knopjes
  fill(247, 247, 247);
  circle(450 + x, 500 + y, 70);
  fill(color);
  circle(450 + x, 500 + y, 50);
  fill(247, 247, 247);
  circle(450 + x, 500 + y, 40);

}
function preload() {
  steakfoto = loadImage('steak.png');
  sponsefoto = loadImage('spons.png');
  maanfoto = loadImage('maan.png');
  roombackground = loadImage('room.png');
  ballgame = loadImage('ball.png');
  aardbeifoto = loadImage('strawberry.png');
  spongebobfoto = loadImage('spongebob.png');
  sleepspeechbubblefoto = loadImage('sleepspeechbubble.png');
  tennisballfoto = loadImage('tennisball.png');


}
function balloonpet(x, y, v1, v2, v3) {
  fill(v1, v2, v3)
  // x 500, y = 300
  circle(x, y, 150, 150);
  rect(x - 10, 70 + y, 20, 10);
  fill(175, 133, 0);
  rect(x - 5, 80 + y, 10, 70);

  strokeWeight(5);
  line(x - 50, y, x - 10, y + 20);
  line(x + 50, y, x + 10, y + 20);

}
function balloonmouth() {
}
function mousePressed() {
  if (mouseButton == LEFT) {
    // dat zorgt ervoor dat je op het honger icoon knop kan klikken
    let distanceToMouse = dist(450, 510, mouseX, mouseY);
    if (distanceToMouse < 70) {
      // laat ook het voedsel zijn
      showFoodImage = true;
      // zorgt evoor dat  het voedsel een willekeurige positie heeft 
      foodImageX = random(0, 500);
      foodImageY = random(0, 500);
    }

    // zorgt ervoor dat het voedsel geslepen kan worden
    let distanceTofood = dist(foodImageX + 25, foodImageY + 25, mouseX, mouseY);
    if (distanceTofood < 40) {
      foodFollowMouse = true;
    }

    let distanceToMouse2 = dist(565, 475, mouseX, mouseY);
    if (distanceToMouse2 < 70) {
      showSpongeImage = true
    }
    let distanceToMouse3 = dist(665, 475, mouseX, mouseY);
    if (distanceToMouse3 < 70) {
      showSleepSpeechBubbleImage = true
    }

    let distanceToMouse4 = dist(780, 510, mouseX, mouseY);
    if (distanceToMouse4 < 70) {
      showTennisBallImage = true
      tennisImageX.push(random(0, 500));
      tennisImageY.push(random(0, 500));
    }
  }
}

function mouseReleased() {
  // volgt de muis niet meer
  foodFollowMouse = false;
}