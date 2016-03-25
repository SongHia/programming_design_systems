var r = new Rune({
container: "#canvas",
width: 975,
height: 1575,
debug: true
});

var allWeight = "normal";
var allDecoration = "none";

var black = 30;
var randYellow = "#FDD938";
var randGreen = "#31AA4C";
var randBlue = "#6F79B3";
var randRed = "#EB212E";

//background
r.rect(0, 0, r.width, r.height).fill(randBlue) //black looks good too
	.stroke(false);

//date
// var allSize = 10;
// var columns = 6;
// var rows = 10;

var dateSize = 20;
var columns = 4;
var rows = 10;

var xDist = r.width/columns; 
var yDist = r.height/rows; 
var xBuffer = xDist*3;
var yBuffer = yDist*2;

for(var x = 0-xBuffer; x < r.width+xBuffer; x+=xDist)
  {
    for(var y = 0; y < r.height+yBuffer; y+=yDist)
    {
     var theDate = r.text("THURS OCT 16 2015", x, y)
		.fill(randYellow)
		.stroke(false)
		.fontSize(dateSize)
		.textAlign("left")
		.fontFamily("Futura LT Pro")
		.fontWeight(allWeight)
		.textDecoration(allDecoration)
		.rotate(45, r.width/2, r.height/2);
    }
  }

//context
var contextSize = 25;
var contextCol = 1;
var contextRow = 30;
var contextXDist = r.width/contextCol;
var contextYDist = r.height/contextRow;
var contextSpacing = 2;

for(var x = 0; x < r.width; x+=contextXDist)
  {
    for(var y = 0-contextSize; y <= r.height + contextSize; y+=contextYDist)
    {

		var theContext = r.text("DISCUSSING PARTICIPATORY PERFORMANCE WITH TAEYOON CHOI", r.width/2, y)
			.fill(randGreen)
			.stroke(false)
			.fontSize(contextSize)
			.textAlign("center")
			.fontFamily("Futura LT Pro")
			.fontWeight(allWeight)
			.textDecoration(allDecoration)
		  	.letterSpacing(contextSpacing);
    }
  }

var redContext = r.text("DISCUSSING PARTICIPATORY PERFORMANCE WITH TAEYOON CHOI", r.width/2, contextYDist*19-contextSize)
			.fill(randRed)
			.stroke(false)
			.fontSize(contextSize)
			.textAlign("center")
			.fontFamily("Futura LT Pro")
			.fontWeight(allWeight)
			.textDecoration(allDecoration)
		  	.letterSpacing(contextSpacing);

//til
var tilSize = 65;
var tilColor = randYellow;
var tilStroke = randYellow;

var startingX = r.width/2;
var startingY = r.height/2;

var theTIL01 = r.text("AS LONG AS THE SPIRIT IS CLEAR,", startingX, startingY)
	.fill(tilColor)
	.stroke(tilStroke)
	.fontSize(tilSize)
	.textAlign("center")
	.fontFamily("Futura")
	.fontWeight("bold")
	.textDecoration(allDecoration)
	.rotate(45, r.width/2, r.height/2);

var theTIL02 = r.text("THE OUTCOME CAN TAKE ANY FORM", startingX, startingY+tilSize)
	.fill(tilColor)
	.stroke(tilStroke)
	.fontSize(tilSize)
	.textAlign("center")
	.fontFamily("Futura")
	.fontWeight("bold")
	.textDecoration(allDecoration)
	.rotate(45, r.width/2, r.height/2);

r.draw();
