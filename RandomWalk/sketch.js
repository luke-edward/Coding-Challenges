var x;
var y;

function setup() {
  createCanvas(1000, 700);
  x = 500;
  y = 350;
  background(51);
}
function draw() {
  var random1 = random(0,255);
  var random2 = random(0,255);
  var random3 = random(0,255);
  stroke(random1, random2, random3);
  strokeWeight(7);
  point(x, y);

  var r = floor(random(4));

  switch (r) {
    case 0:
      x = x + 9;
      if (x > 1800){
        x -= 18;
      }
      break;
    case 1:
      x = x - 9;
      if (x < 0){
        x += 18;
      }
      break;
    case 2:
      y = y + 9;
      if (y > 700){
        y -= 18;
      }
      break;
    case 3:
      y = y - 9;
      if (y < 0){
        y += 18;
      }
      break;
  }


}
