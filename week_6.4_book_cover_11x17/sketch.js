var r = new Rune({
  container: "#canvas",
  width: 975,
  height: 1575,
  debug: false
});


//to do
//increase the size of so it goes
//increase the font size

//////// GLOBAL VARIABLES ////////
var blue = "#19E5FF";
var yellow = "#FFE100";
var magenta = "#CC1474";
var black = 0;

var numBombs = 7;
var numCopy = 500; //so it goes

var bombColor = blue;
var copyColor = magenta;

//bomb size
// var minBomb = 7;
// var maxBomb = 50;
var minBomb = 15;
var maxBomb = 75;

var textColor = blue;
var titleSize = 130;
var copySize = titleSize/2;



var margin = 100;

var line1 = r.height*.75;
// var line2 = line1 + r.height*.10;
var line2 = line1 + titleSize;

// var line3 = line2 + r.height*.1;
var line3 = line2 + titleSize*1.5;

//////// GRID SYSTEM ////////
var background = r.rect(0,0,r.width,r.height)
  .fill(yellow)
  .stroke(false);

var grid1 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 3,
  rows: 3
});

var grid2 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 3,
  rows: 4
})

//////// FUNCTIONS////////
mainText();
backgroundText();
bombs();


//////// MAIN TEXT ////////

function mainText(){
  var title1 = r.text("SLAUGHTERHOUSE", r.width/2, line1)
    .fill(textColor)
    .stroke(false)
    .fontSize(titleSize)
    .textAlign("center")
    .fontFamily("Impact")
    .fontWeight("bold");

  var title2 = r.text("FIVE", r.width/2, line2)
    .fill(textColor)
    .stroke(false)
    .fontSize(titleSize)
    .textAlign("center")
    .fontFamily("Impact")
    .fontWeight("bold");
    // .letterSpacing(50);

  var author = r.text("VONNEGUT", r.width/2, line3)
    .fill(textColor)
    .stroke(false)
    .fontSize(titleSize)
    .textAlign("center")
    .fontFamily("Sentinel");
}

//////// BACKGROUND COPY ////////
function backgroundText(){
  for(var i = 0; i < numCopy; i++)
  {

    var xCopy = Rune.random(0, grid1.vars.moduleWidth);
    var yCopy = Rune.random(0, grid1.vars.moduleHeight);

    //for 'correct' spacing
    // var xCopy = Rune.random(copySize, grid1.vars.moduleWidth-copySize);
    // var yCopy = Rune.random(copySize, grid1.vars.moduleHeight-copySize);

    // we use .ceil because numbers start at 1 //
    var randomCol = Math.ceil(Rune.random(grid1.vars.columns));
    var randomRow = Math.ceil(Rune.random(grid1.vars.rows-1));

    var copy = r.text("so it goes", xCopy, yCopy)
    .fill(copyColor)
    .stroke(false)
    .fontSize(copySize)
    .textAlign("center")
    .fontFamily("Sentinel");

    grid1.add(copy, randomCol, randomRow);
    // grid1.rotate(45, r.width/2, r.height/2);
  }
}

//////// BACKGROUND BOMBS ////////
function bombs(){
  for(var i = 0; i < numBombs; i++)
  {
    var b1 = Rune.random(minBomb, maxBomb); //every bomb is different
    var b2 = b1/4;
    var sizeWidth = b1;
    var sizeHeight = sizeWidth*3;

    var bombStage = (0, 0);
    var randomCol = Math.ceil(Rune.random(grid2.vars.columns-1));
    var randomRow = Math.ceil(Rune.random(grid2.vars.rows-1)); //was -2
    var xBomb = Rune.random(0, grid2.vars.moduleWidth-sizeWidth*2);
    var yBomb = Rune.random(0, grid2.vars.moduleHeight-sizeHeight*2);

    var bomb1 = r.triangle(b1+xBomb, b2+yBomb, b1*2+xBomb, b1*2+yBomb, b1*3+xBomb, b2+yBomb, bombStage) //650
      .fill(bombColor)
      .stroke(false);

    var bomb2 = r.ellipse(b1*2+xBomb, b1*2+yBomb, sizeWidth, sizeHeight, bombStage)
      .fill(bombColor)
      .stroke(false);

    grid2.add(bomb1, randomCol, randomRow);
    grid2.add(bomb2, randomCol, randomRow);
    grid2.rotate(45, r.width/2, r.height/2);
  }
}

r.draw();