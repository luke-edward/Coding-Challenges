var snack;
var scl = 20;

var food;

function setup() {
  createCanvas(windowWidth, windowHeight);
  snack = new Snake();
  frameRate(15);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  snack.total++;
}

function draw() {
  background(51);

  if (snack.eat(food)) {
    pickLocation();
  }
  snack.death();
  snack.update();
  snack.show();


  fill(0, 0, 255);
  rect(food.x, food.y, scl, scl);
}





function keyPressed() {
  if (keyCode === UP_ARROW) {
    snack.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snack.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snack.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snack.dir(-1, 0);
  }
}
