let fishX, fishY

function setup() {
  createCanvas(400, 400);
  fishX = 5;
  fishY = 5;
  foodX = random(50,350)
  foodY = random(50,350)
  
}

function draw() {
  background(220);
  fish(fishX, fishY);
  fishFood(foodX,foodY);
  
  
  function fish(x, y){
  push();
  translate(x, y);
  noStroke();
  fill('yellow');
  triangle(210, 200, 235, 180, 235, 220);
  ellipse(200,200,50,25);
  fill('black');
  ellipse(185,200,5);
  pop();
}
function fishFood(foodX,foodY){
  push();
  translate(foodX,foodY)
  fill('brown')
  ellipse(100,200,5);
  pop();
}   
    
}

  function keyPressed(){
  if (keyCode == UP_ARROW){
    fishY -= 15;
  }
  if (keyCode == DOWN_ARROW) {
    fishY += 15;
  } 
  if (keyCode == RIGHT_ARROW) {
    fishX += 15; 
  }
  if (keyCode == LEFT_ARROW) {
    fishX -= 15;
  }
  }
