var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});

///////////////ITERATION 2 - PATTERN OF SHAPE CIRCLES////////////////////

var radius = 200; //200 //size of circle
var numRects = 60; //30 //number of shapes
var angle = 360 / numRects; //determine path around circle
var group = r.group(r.width / 2, r.height / 2); //center circle

for(var i = 0; i < numRects; i++)
{
  // var color = Rune.random(0,155); //random greyscale
  //x,y coordinates of starting point shapes
  var x = Math.cos(Rune.radians(i * angle)) * radius;
  var y = Math.sin(Rune.radians(i * angle)) * radius;
  // r.rect(x, y, 50, 10, group) //draw rectangle
    r.triangle(x,y,100,0,100,100,group) //sharp
      .fill(0)
    // r.triangle(x,y,0,100,100,100,group) //opposite sharp
    // r.circle(x,y,5,group) //circles of circles
    .rotate(i * angle, 0, 0, true); //rotation iteration
}



r.draw();