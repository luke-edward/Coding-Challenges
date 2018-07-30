function setup() {
  createCanvas(600, 600);
}

function draw() {

  background(0);
  stroke(255,0,0);
  noFill();
  drawCircle(300, 300, 300);
  noLoop();
}

function drawCircle(x, y, d) {
  ellipse(x, y, d);
  if (d > 5) {
    let newD = d * .5;
    drawCircle(x + newD, y, newD);
    stroke(0,255,0);
    drawCircle(x - newD, y, newD);
    /*stroke(0,0,255);
    drawCircle(x, y + d * 0.5, d * 0.5);
    */stroke(255,0,255)
    drawCircle(x, y - d * 0.5, d * 0.5);
  }
}
