

function setup() {
  createCanvas(800, 400);
}
function draw() {
  background(220);
  strokeWeight(1);
  //opdracht 1
  fill('black');
  text("1", 20, 20);
  fill('white');
  for (let i = 0; i < 10; i++) {
    rect(0 + (i * 50), 30, 50, 50);
    if (i == 5) {
      fill("blue");
    }
    else {
      fill("white");
    }
  }
  //opdracht 2
  fill('black');
  text("2", 20, 120);
  for (let r = 0; r < 5; r++) {
    fill(r * 75);
    rect(20, 130 + (r * 50), 50, 50);
  }
  //opdracht3
  let xoffset = 0;
  fill('black');
  text("3", 100, 120);
  for (let b = 0; b < 4; b++) {
    fill(0, 20 + (b * 75), 0);
    rect(xoffset + 120, 130, 50 + b * 25, 50);
    xoffset = xoffset + 25 * (b + 1);
  }
  //opdracht4
  fill('black');
  text("4", 120, 220);
  let aantalVierkantjes = 4;
  for (let l = 0; l < aantalVierkantjes; l++) {

    let blauwWaarde = 255 - l * (255 / (aantalVierkantjes - 1));
    fill(0, 0, blauwWaarde);
    rect(xoffset + -120, 230, 25 + l * 25, 50 + l * 50);
    xoffset = xoffset + 25 * (l + 1);
  }
  //opdracht5
  fill('black');
  text("5", 550, 20);
  fill('white')
  for (let c = 0; c < 6; c++) {
    circle(530 + c * 60, 50, 40);
    strokeWeight(2 + c * 2)
  }
  //opdracht 6
  strokeWeight(1)
  fill('black');
  text("6", 450, 100);
  fill('white');
  for (let s = 0; s < 10; s++) {
    if (s % 2 == 0) {
      fill('red');
    }
    else {
      fill('white');
    }
    circle(525, 200, 200 - s * 20);
  }
  //opdracht7
  fill(0, 0, 0);
  text("7", 600, 100);
  fill('grey');
  for (let g = 0; g < 21; g++) {
    if (g % 2 == 1) {
      fill('white');
    }
    else {
      fill('grey');
    }

    // Standaard breedte bij het steeds langer worden
    let breedte = 30 + g * 10;

    // Als we over de helft zijn, dan moet ie kleiner worden
    if (g > 11){
      breedte = 140 - (g - 11) * 10;
    }

    rect(650, 100 + g * 10, breedte , 10);

  }

}