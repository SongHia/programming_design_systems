var r = new Rune({
container: "#canvas",
width: 975,
height: 1575,
debug: true
});

//background
r.rect(0, 0, r.width, r.height).fill(30);

var allAlign = "center";
var allFont = "Futura";
var allWeight = "normal";
var allDecoration = "none";
var yellow = "#FFE100";
var magenta = "#CC1474";
var black = 30;


//date
// var dateSize = 10;
// var columns = 8;
// var rows = 140;

var dateSize = 20;
var columns = 3;
var rows = 70;

// var dateSize = 35;
// var columns = 1;
// var rows = 40;

var xDist = r.width/columns; 
var yDist = r.height/rows; 
var xBuffer = 0;
var yBuffer = dateSize*15;

for(var x = 0-xBuffer; x <= r.width+xBuffer; x+=xDist)
  {
    for(var y = 0-yBuffer; y <= r.height+yBuffer; y+=yDist)
    {
     var theDate = r.text("THURS NOV 5 2015", x, y)
    .fill(magenta)
    .stroke(false)
    .fontSize(dateSize)
    .textAlign("center")
    .fontFamily(allFont)
    .fontWeight(allWeight)
    .textDecoration(allDecoration)
    .rotate(30, r.width/2, r.height/2);
    }
  }

//context
//works with size 40
// var contextCol = 10;
// var contextRow = 30; //contextCol*2+9;

var contextSize = 70;
var contextCol = 5;
var contextRow = contextCol*4;


var contextXDist = r.width/contextCol;
var contextYDist = r.height/contextRow;

for(var x = 0; x <= r.width + contextSize; x+=contextXDist)
  {
    for(var y = contextSize; y <= r.height+contextSize; y+=contextYDist)
    {
    var theContext = r.text("TNO", x, y)
      .fill(magenta)
      .stroke(false)
      .fontSize(contextSize)
      .textAlign("center")
      .fontFamily(allFont)
      .fontWeight(allWeight)
      .textDecoration(allDecoration);
    }
  }

//til
var tilFont = "Futura";
var tilColor = yellow;

var startingX = r.width/2;
var startingY = r.height/2;

var tilSize = 140; //allSize*14;
var theTIL01 = r.text("PARTY NOW", startingX, startingY)
  .fill(tilColor)
  .stroke(false)
  .fontSize(tilSize)
  .textAlign(allAlign)
  .fontFamily(tilFont)
  .fontWeight("bold")
  .textDecoration(allDecoration);

var theTIL02 = r.text("STUDY LATER", startingX, startingY+tilSize)
  .fill(tilColor)
  .stroke(false)
  .fontSize(tilSize)
  .textAlign(allAlign)
  .fontFamily(tilFont)
  .fontWeight("bold")
  .textDecoration(allDecoration);

r.draw();