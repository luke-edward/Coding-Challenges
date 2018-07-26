var yoff = 0.0;

function setup() {
  createCanvas(1000, 700);
}

function draw() {
  background(0);
  var not = 0;
  var myArray = [255,0]
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  if (rand === 255){
    not = 0;
  } else {
    not = 255;
  }
  translate(width / 2, height / 2);

  var radius = 250;

  beginShape();
  fill(rand, 0 , not);
  var xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.001) {
    var offset = map(noise(xoff, yoff), 0, 1, -25, 25);
    var r = radius + offset;
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
    //ellipse(x, y, 4, 4);
  }
  endShape();

  yoff += 0.01;
}
