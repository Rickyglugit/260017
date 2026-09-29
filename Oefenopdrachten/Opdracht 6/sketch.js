let colors = ['red','green','blue','purple','yellow']

function setup() {
  createCanvas(380, 350);
}

function draw() {
  background(220);
  for( let i = 0; i < colors.length; i++){
    fill(colors[i]);
    text("red",100,30+i*20);
  }
}
