let getal1 = 10;
let getal2 = 20;
let Ypositie= 80;
let Ymargen = 50;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  Ypositie = 80
  background(220);
  text("100",20,20);
  text("Hello world!",20,60);
let getal3 = getal1+getal2;
  text("optellen "+ getal3,20,Ypositie  );
  // 20+10=30
let getal4 = getal2-getal1;
Ypositie = Ypositie + Ymargen;
  text("aftrekken "+ getal4,20,Ypositie  );
  //20-10=10
let getal5 = getal2 * getal1
Ypositie = Ypositie + Ymargen;
  text("vermenigvuldigen:"+ getal5,20,Ypositie  );
  //20x100=200
let getal6 = getal2 / getal1
Ypositie = Ypositie + Ymargen;
  text("delen: "+getal6,20,Ypositie );
  //20:10=2
}
