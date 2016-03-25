var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: false
});

var grid1 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 3,
  rows: 3
});

//for top and bottom bars
var barWidth = 150;
var barHeight = 25;
var x1 = 325;
var y1 = 150;

//for zero
var circleWidth = 75;
var circleHeight = circleWidth*1.5;

//for crossbar
var rotateX = 450;
var rotateY = 180;
var rotation = 120;

drawFrame();

drawTopBar();
drawZero();
drawCrossBar();
drawBottomBar();

function drawFrame(){
var box = r.rect(250, y1-40, 300, 300)
    .fill(false)
    .stroke(0)
    .strokeWidth(20);
}

function drawTopBar(){
  var topBar = r.rect(x1, y1+10, barWidth, barHeight)
    .fill(0)
    .stroke(false);
}

function drawZero(){
  var zero = r.ellipse(barWidth/2 + x1, y1 + 87, circleWidth, circleHeight)
    .fill(0)
    .stroke(false);

  var innerZero = r.ellipse(barWidth/2 + x1, y1 + 87, circleWidth-40, circleHeight-40)
    .fill(255)
    .stroke(false);
}

function drawCrossBar(){
  var crossBar = r.rect(rotateX, rotateY, barWidth, barHeight)
    .fill(0)
    .stroke(false)
    .rotate(rotation,rotateX, rotateY);
}

function drawBottomBar(){
var bottomBar = r.rect(x1, y1 + 150-10, barWidth, barHeight)
  .fill(0)
  .stroke(false);
}

//for type
var midPoint = r.group(r.width/2, r.height/2-30);
var type = r.text("ZERO CO.", 0,0, midPoint)
  .fill(0)
  .stroke(false)
  .fontSize(60)
  .textAlign("center")
  .fontFamily("Coo Hew")
  .fontWeight("bold");

r.draw();