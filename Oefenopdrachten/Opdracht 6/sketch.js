
function setup() {
  createCanvas(380, 450);
}

function draw() {
  let colors = ['red', 'green', 'blue', 'purple', 'yellow']
  let numbers =[]

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
}