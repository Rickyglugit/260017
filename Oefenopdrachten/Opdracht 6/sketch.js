let randomcolor = []


function setup() {
  for (let i = 0; i < 5; i++) {
    randomcolor.push([random(0, 255), random(0, 255), random(0, 255)])
  }
  createCanvas(380, 450);
}

function draw() {
  let colors = ['red', 'green', 'blue', 'purple', 'yellow'];
  let numbers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
  let nummercomb1 = [3, 55, 93, 20, 102, 6];
  let nummercomb2 = [14, 22, 80, 5];
  let woord = 'Overheidsfinancieringstekort';
  let alfcolors = ['red', 'green', 'blue', 'purple', 'yellow']


  background(220);
  // opdracht 1
  fill(0, 0, 0);
  text("1", 20, 15);
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 20, 30 + i * 20)
  }
  //opdracht 2 
  fill(0, 0, 0);
  text("2", 20, 135);
  colors.shift();
  colors.push('red');
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 20, 145 + i * 20);
  }
  //opdracht 3
  fill(0, 0, 0);
  text("3", 20, 235);
  colors.splice(1, 2);
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    text(colors[i], 20, 245 + i * 20);
  }
  //opdracht 4
  fill(0, 0, 0);
  text("4", 20, 300);
  let positie = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 300) {
      text(numbers[i], 20, 320 + positie * 10);
      positie = positie + 1;
    }
  }
  //opdracht 5
  fill(0, 0, 0);
  text("5", 100, 15);
  let antwoord = 0
  for (let i = 0; i < nummercomb1.length; i++) {
    antwoord = antwoord + nummercomb1[i];

    if (i < nummercomb2.length) {
      antwoord = antwoord + nummercomb2[i];
    }
  }
  text(antwoord, 110, 40);

  //opdracht6
  fill(0, 0, 0);
  text("6", 100, 65);
  let eCounter = 0;
  for (let i = 0; i < woord.length; i++) {
    if (woord[i] == "e") {
      eCounter = eCounter + 1;
    }
  }
  text(eCounter, 110, 80);

  //opdracht7
  fill(0, 0, 0);
  text("7", 100, 95);
  alfcolors = alfcolors.sort()
  for (let i = 0; i < alfcolors.length; i++) {
    fill(alfcolors[i])
    text(alfcolors[i], 100, 115 + i * 20);
  }
  //opdracht8
  fill(0, 0, 0);
  text("8", 100, 215);
  fill(255, 255, 255);
  for (let i = 0; i < 5; i++) {
    fill(randomcolor[i]);
    rect(80 + i * 20, 250, 20, 20);
  }
 fill(0, 0, 0);
  text("9", 250, 15);
} 