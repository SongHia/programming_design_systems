var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  frameRate: 24,
  // height: 2000,
  debug: true
});


//groups
var shape1 = r.group(0,0);
// var shape2 = r.group(r.width/4, r.height/6);
var shape2= r.group(r.width/2,r.height/2);

//global setup
var xDist = r.width/10; //creates 24 colums
var yDist = r.height/10; //creates 48 rows


var minX = -10;
var maxX = 10;
var minY = -10;
var maxY = 10;
var radius = 2;


// make a polygon as a rectangle
var poly = r.polygon(r.width/3, r.height/4, false) //shape1 did something weird
  .lineTo(0, 0)
  .lineTo(300, 0)
  .lineTo(300, 300)
  .lineTo(0, 300)
  .fill(false)
  .stroke(0, 0, 0);

var poly2 = poly.toPolygon({ spacing:0.5 }) //25 //0.5
  // .move(400, 0, true);

for(var i = 0; i < poly2.vars.vectors.length; i++) {
  var color = Rune.random(155,255); //155-255 softer
  var vec = poly2.vars.vectors[i];
  vec.x += Rune.random(minX, maxX);
  vec.y += Rune.random(minY, maxY);

  r.circle(poly2.vars.x + vec.x, poly2.vars.y + vec.y, radius)
    .stroke(false)
    .fill(color);
}




r.draw();