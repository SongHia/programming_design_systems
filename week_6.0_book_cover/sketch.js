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

var textColor = black;
var titleSize = 100;

var background = r.rect(0,0,r.width,r.height)
  .fill(yellow)
  .stroke(false);

var margin = 100;

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

var grid3 = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 3,
  rows: 3
})

var bombMargin = 200;
var bombStage = r.group(bombMargin,bombMargin);

for(var i = 0; i < 5; i++)
{
  var b1 = Rune.random(10,70); //every bomb is different
  var b2 = b1/4;
  var sizeWidth = b1;
  var sizeHeight = sizeWidth*3;
  var color = black;
//   // var color = new Rune.Color('hsv', Rune.random(20, 30), 100, 100, 1.0);

//works for random
var bombStage = r.group(Rune.random(0,r.width-bombMargin),Rune.random(0,r.height-bombMargin));

//for grid not quite working because it needs to apply to the vars and then be added to the grid below
// var bombStage = r.group(Rune.random(0,grid1.vars.moduleWidth),Rune.random(0,grid1.vars.moduleHeight));

  // var x = Rune.random(sizeWidth,  grid1.vars.moduleWidth - sizeWidth);
  // var y = Rune.random(sizeHeight,  grid1.vars.moduleHeight - sizeHeight);

r.triangle(b1, b2, b1*2, b1*2, b1*3, b2, bombStage) //650
  .fill(black)
  .stroke(false);

r.ellipse(b1*2, b1*2, sizeWidth, sizeHeight, bombStage)
  .fill(color)
  .stroke(false);



//   // we use .ceil because numbers start at 1 //
//   var randomCol = Math.ceil(Rune.random(grid1.vars.columns));
//   var randomRow = Math.ceil(Rune.random(grid1.vars.rows-1));
//   // grid3.add(bomb, randomCol, randomRow);
// bombStage.rotate(45, r.width/2, r.height/2);
}


r.draw();