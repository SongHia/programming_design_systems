var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});

//groups
var shape1 = r.group(0, 0); //layer background

//global setup
var xDist = r.width/75; // glaciers 
var yDist = r.height/7.5; // water lines

var background = r.rect(0, 0, r.width, r.height, shape1)
  .fill(0);

// draws water lines
for (var y = 0; y < r.height; y+= yDist)
  {
    var x1 = Rune.random(0,r.width);
    var x2 = Rune.random(0,r.width);
    r.line(x1,y,x2,y)
      .stroke(255);
  }

//draws glaciers
for (var x = 0; x < r.width; x+= xDist)
  {
    var y = Rune.random(50,r.height); //random y position
    // var side = Rune.random(50,150); //100
    var side = Rune.random(5,125); //100
    var base = side/2;

    r.polygon(x, y) 
      .lineTo(base, -base) //top
      .lineTo(side, side) //right corner
      .lineTo(0, side) //left corner
      .fill(255)
      .stroke(false);

    // r.polygon(x, y) 
    //   .lineTo(50, -50) //top
    //   .lineTo(100, 100) //right corner
    //   .lineTo(0, 100) //left corner
    //   .fill(255)
    //   .stroke(false);
  }

r.draw();


