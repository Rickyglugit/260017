let score = 95


function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  
  fill(0,0,0);
  if(score>= 90){
    text("uitstekend",20,20);
  }
  else if(score>= 70 && score < 89){ 
    text("goed gedaan",20,20);
  }
  else if(score>= 50 && score < 69){
    text("voldoende",20,20);
  }
  else 
  fill(200,0,0);
    text("onvoldoende",20,20);
  
  
}
