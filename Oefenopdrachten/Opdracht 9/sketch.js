let cirkels = []

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 100; i++) {
    let cirkel = {
      xPositie: random(50, 600),
      yPositie: random(50, 600),
      radius: random(10, 50),
      kleur: random(['red', 'blue', 'yellow', 'green', 'gray']),
      snelheidX: random(1, 5),
      snelheidY: random(1, 5)
    }

    cirkels.push(cirkel);
  }
}

function draw() {
  background(220);
  for (let i = 0; i < cirkels.length; i++) {
    let huidigecirkel = cirkels[i];

    // Tekenen van de cirkel
    fill(huidigecirkel.kleur);
    circle(huidigecirkel.xPositie, huidigecirkel.yPositie, huidigecirkel.radius);

    // Positie van de cirkel veranderen: oftewel BEWEGEN
    huidigecirkel.xPositie = huidigecirkel.xPositie + huidigecirkel.snelheidX;
    huidigecirkel.yPositie = huidigecirkel.yPositie + huidigecirkel.snelheidY;

    // Als de xPositie van de cirkel kleiner is dan 0, dan gaat ie links uit het scherm.
    // Dus we moeten de snelheid omdraaien
    if (huidigecirkel.xPositie < 0) {
      huidigecirkel.snelheidX *= -1.0;
    }

    // Als de xPositie van de cirkel groter is dan width, dan gaat ie rechts het scherm uit
    // dus moeten we ook de snelheid omdraaien
    if (huidigecirkel.xPositie > width) {
      huidigecirkel.snelheidX *= -1.0;
    }
    // Als de y positie van de cirkel kleiner is dan 0, dan is ie aan de bovenkant uit het scherm
    if (huidigecirkel.yPositie < 0){
      huidigecirkel.snelheidY *= -1.0;
    }
    if (huidigecirkel.yPositie > height) {
      huidigecirkel.snelheidY *= -1.0;
    }
  }
}

function mousePressed(){
  if (mouseButton == "left"){
    for (let i = 0; i < cirkels.length; i++) {
      let huidigeCirkel = cirkels[i];
      let afstand = dist(mouseX, mouseY, huidigeCirkel.xPositie, huidigeCirkel.yPositie);

      // Als de afstand tussen de muis en het midden van de cirkel kleiner is dan de radius
      // dan hebben we in de cirkel geklikt.
      if (afstand < huidigeCirkel.radius){
        huidigeCirkel.kleur = "red";
      }

    }
  }
}
