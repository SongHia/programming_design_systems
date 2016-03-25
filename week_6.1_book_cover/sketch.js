var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: false
});


//////// GLOBAL VARIABLES ////////
var blue = "#19E5FF";
var yellow = "#FFE100";
var magenta = "#CC1474";
var black = 0;

var numBombs = 7;
var numCopy = 2200;

var bombColor = blue;
var copyColor = magenta;

var minBomb = 7;
var maxBomb = 40;

var textColor = blue;
var titleSize = 110;
var copySize = 20;

var background = r.rect(0,0,r.width,r.height)
  .fill(yellow)
  .stroke(false);

var margin = 100;

// var bombMargin = 200;

var line1 = r.height*.77;
var line2 = line1 + r.height*.10;
var line3 = line2 + r.height*.1;


//////// GRID SYSTEM ////////
var grid1 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 3,
  rows: 3
});

// var grid2 = r.grid({
//   x: 100,
//   y: 100,
//   gutter: 25,
//   width: r.width - margin*2,
//   height: r.height - margin*2,
//   columns: 5,
//   rows: 5
// });

var grid3 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 3,
  rows: 3
})


//////// MAIN TEXT ////////
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

var author = r.text("VONNEGUT", r.width/2, line3)
  .fill(textColor)
  .stroke(false)
  .fontSize(titleSize*.75)
  .textAlign("center")
  .fontFamily("Sentinel");


//////// BACKGROUND COPY ////////
  for(var i = 0; i < numCopy; i++)
  {
    var xCopy = Rune.random(grid1.vars.moduleWidth);
    var yCopy = Rune.random(grid1.vars.moduleHeight);

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
  }


//////// BACKGROUND BOMBS ////////
  for(var i = 0; i < numBombs; i++)
  {
    var b1 = Rune.random(minBomb, maxBomb); //every bomb is different
    var b2 = b1/4;
    var sizeWidth = b1;
    var sizeHeight = sizeWidth*3;

  //works for random
  // var bombStage = r.group(Rune.random(0,r.width-bombMargin),Rune.random(0,r.height-bombMargin));

  var bombStage = r.group(Rune.random(0, r.width*.9), Rune.random(0, r.height*.25));

  r.triangle(b1, b2, b1*2, b1*2, b1*3, b2, bombStage) //650
    .fill(bombColor)
    .stroke(false);

  r.ellipse(b1*2, b1*2, sizeWidth, sizeHeight, bombStage)
    .fill(bombColor)
    .stroke(false);

  bombStage.rotate(45, r.width/2, r.height/2);
  }

r.draw();