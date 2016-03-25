var r = new Rune({
container: "#canvas",
width: 975,
height: 1575,
debug: true
});

var allWeight = "normal";
var allDecoration = "none";
var black = 30;
var randRed = "#EB212E";
var randBlue = "#1C4A9D";
var randLightBlue = "#0E67B1";
var randOrange = "#F58B31";
var randYellow = "#FDD938";


//background
r.rect(0, 0, r.width, r.height).fill(randLightBlue)
	.stroke(false);

//DATE
// var dateSize = 15;
// var columns = 3;
// var rows = 10;

var dateSize = 25;
var columns = 3;
var rows = 15;

var xDist = r.width/columns; 
var yDist = r.height/rows; 

for(var x = 0; x < r.width; x+=xDist)
  {
    for(var y = 0-yDist; y < r.height+yDist*4; y+=yDist)
    {
        var theDate = r.text("MON NOV 23 2015", x + yDist, y)
		.fill(randBlue)
		.stroke(false)
		.fontSize(dateSize)
		.textAlign("center")
		.fontFamily("Futura")
		.fontWeight(allWeight)
		.textDecoration(allDecoration)
		.rotate(45, r.width/2, r.height/2);
    }
  }

//CONTEXT
var contextSize = 40;
var contextCol = 1;
var contextRow = 7;

var contextXDist = r.width/contextCol;
var contextYDist = r.height/contextRow;

for(var x = 0; x < r.width; x+=contextXDist)
  {
    for(var y = 0-contextYDist; y < r.height+contextYDist*2; y+=contextYDist)
    {
		var theContext = r.text("PAUL RAND BY WAY OF JOHN MAEDA", r.width/2, y)
			.fill(randRed)
			.stroke(false)
			.fontSize(contextSize)
			.textAlign("center")
			.fontFamily("Futura")
			.fontWeight(allWeight)
			.textDecoration(allDecoration)
			.rotate(315, r.width/2, r.height/2);
    }
  }

//TIL
var tilSize = 80;
var tilFont = "Bodoni LT Pro";
var tilColor = randOrange;
var startingX = tilSize;
var startingY = r.height/2-tilSize*3;
var allAlign = "left";

var theTIL01 = r.text("\"THIS IS ALL QUITE", startingX, startingY)
	.fill(tilColor)
	.stroke(false)
	.fontSize(tilSize)
	.textAlign(allAlign)
	.fontFamily(tilFont)
	.fontWeight("bold")
	.textDecoration(allDecoration);

var theTIL02 = r.text("BEAUTIFUL WORK...", startingX, startingY+tilSize)
	.fill(tilColor)
	.stroke(false)
	.fontSize(tilSize)
	.textAlign(allAlign)
	.fontFamily(tilFont)
	.fontWeight("bold")
	.textDecoration(allDecoration);

var theTIL03 = r.text("BUT HOW ARE YOU", startingX, startingY+tilSize*2)
	.fill(tilColor)
	.stroke(false)
	.fontSize(tilSize)
	.textAlign(allAlign)
	.fontFamily(tilFont)
	.fontWeight("bold")
	.textDecoration(allDecoration);

var theTIL04 = r.text("EVERY GOING TO", startingX, startingY+tilSize*3)
	.fill(tilColor)
	.stroke(false)
	.fontSize(tilSize)
	.textAlign(allAlign)
	.fontFamily(tilFont)
	.fontWeight("bold")
	.textDecoration(allDecoration);

var theTIL04 = r.text("MAKE ANY MONEY", startingX, startingY+tilSize*4)
	.fill(tilColor)
	.stroke(false)
	.fontSize(tilSize)
	.textAlign(allAlign)
	.fontFamily(tilFont)
	.fontWeight("bold")
	.textDecoration(allDecoration);

var theTILMoney = r.text("MONEY", startingX+449, startingY+tilSize*4)
	.fill(randYellow)
	.stroke(false)
	.fontSize(tilSize)
	.textAlign(allAlign)
	.fontFamily(tilFont)
	.fontWeight("bold")
	.textDecoration(allDecoration);

var theTIL04 = r.text("DOING THIS?\"", startingX, startingY+tilSize*5)
	.fill(tilColor)
	.stroke(false)
	.fontSize(tilSize)
	.textAlign(allAlign)
	.fontFamily(tilFont)
	.fontWeight("bold")
	.textDecoration(allDecoration);

r.draw();
