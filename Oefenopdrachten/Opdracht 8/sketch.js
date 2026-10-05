let totaal = berekening(10, 5);
let totaal2 = berekening1(20, 10);
let totaal3 = berekening2(60, 7);
let totaal4 = berekening3(100, 33);
function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  tekenhuis(20, 300);
  tekenhuis(170, 300);
  tekenhuis(350, 300);
  cirkel(50);
  rechthoek(60, 50);
  text(totaal, 196, 290);
  text(totaal2, 46, 290);
  text(totaal3, 375, 290)
  text(totaal4,250,250)
}

function tekenhuis(x, y) {
  rect(x, y, 80, 90);
  triangle(x, y, x + 38, y - 50, x + 80, y);
  rect(x + 10, y + 50, 20, 40);
  rect(x + 50, y + 25, 20, 20);
  rect(x + 50, y + 33, 20, 5);
  rect(x + 57, y + 25, 5, 20);
  lijn(200, 50);
  tekst(350, 30, 20);


}

function cirkel(straal) {
  circle(50, 40, straal);
}

function rechthoek(breedte, hoogte) {
  rect(80, 15, breedte, hoogte);
}

function lijn(x, y) {
  line(x, y, 300, 50);
}

function tekst(x, y, grootte) {
  textSize(grootte)
  text("hello world!", x, y)
}
function berekening(getal, andergetal) {
  return getal + andergetal
}
function berekening1(getal, andergetal) {
  return getal / andergetal
}
function berekening2(getal, andergetal) {
  return getal * andergetal
}
function berekening3(getal, andergetal) {
  return getal - andergetal
}