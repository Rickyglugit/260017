let score = 95


function setup() {
  createCanvas(400, 200);
  score = random(0,100)
}

function draw() {
  background(220);
  
  fill(0,0,0);
  if(score>= 90){
    text("uitstekend",20,20); 
    console.log("scoren is gelijk of groter dan 90")
  }
  else if(score>= 70 && score < 89){ 
    text("goed gedaan",20,20);
    console.log("scoren is 70 tot en met 89")
  }
  else if(score>= 50 && score < 69){
    text("voldoende",20,20);
    console.log("scoren is 50 tot en met 69")
  }
  else {
    fill(200,0,0);
    text("onvoldoende",20,20);
  }
  
  
}
