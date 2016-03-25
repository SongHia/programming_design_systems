var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});


var horizon = 225;

//groups
var shape1 = r.group(0, 0); //layer background
var shape2 = r.group(0, horizon); //layer water lines

//global setup
var xDist = r.width/7; //10 rows
var yDist = r.height/10; //10 columns

// var background = r.rect(0, 0, r.width, r.height/3, shape1)
//   .fill(0);

var background = r.rect(0, 0, r.width, r.height, shape1)
  .fill(0);

// var waterLine1 = r.rect(r.width/8, 30, r.width*.75, 5, shape2)
//   .fill(255);

// var waterLine2 = r.rect(r.width/4, 50, r.width/2, 3, shape2)
//   .fill(255);

// var waterLine3 = r.rect(r.width/3, 100, r.width/3, 2, shape2)
//   .fill(255);

// r.polygon(0, 0)
//   .lineTo(50, 0) //top
//   .lineTo(100, 100) //right corner
//   .lineTo(0, 100); //left corner

for (var y = 0; y < r.height; y+= yDist)
  {
    var x1 = Rune.random(0,r.width);
    var x2 = Rune.random(0,r.width);
    r.line(x1,y,x2,y)
      .stroke(255);
  }

for (var x = 0; x < r.width; x+= xDist)
  {
    var y = Rune.random(50,r.height); //110 min 150 max
    r.polygon(x, y) 
      .lineTo(50, -50) //top
      .lineTo(100, 100) //right corner
      .lineTo(0, 100) //left corner
      .fill(255)
      .stroke(false);
  }


// r.polygon(100, 110) 
//   .lineTo(50, -50) //top
//   .lineTo(100, 100) //right corner
//   .lineTo(0, 100) //left corner
//   .fill(255)
//   .stroke(false);

//   r.polygon(200, 110) 
//   .lineTo(50, -50) //top
//   .lineTo(100, 100) //right corner
//   .lineTo(0, 100) //left corner
//   .fill(255)
//   .stroke(false);


r.draw();


// r.polygon(0, 0, shape2)
//   .lineTo(0,100)
//   .lineTo(100,200)
//   .lineTo(0,0);


// random polygon example
// var p = r.polygon(0, 0, shape1)
//   .stroke(false)
//   .fill(30, 30, 30);

// for(var i = 0; i < 40; i++) {
//   p.lineTo(Math.random() * 400, Math.random() * 400);
// }


////////////////////BASIC SIN COS////////////////////
// draw a circle
// r.circle(0, 0, 50, shape1);

// // now find the x,y of the new point that is 300px and 45 degrees away from the center point
// // notice how we need to convert our degrees to radians with the radians() function
// var x = Math.cos(Rune.radians(45)) * 300;
// var y = Math.sin(Rune.radians(45)) * 300;

// // draw a circle at that x and y
// r.circle(x, y, 50);



////////////////////BASIC POLYGONS////////////////////
// var radius = 100;
// var points = [3, 4, 6, 12, 24, 40, 2, 8];

// for(var i = 0; i < points.length; i++) {

//   var shape = r.polygon(r.width/2, 125 + (i * 200));
//   var spacing = 360/points[i];

//   for(var j = 0; j < points[i]; j++) {
//     var x = Math.cos(Rune.radians(j * spacing)) * radius;
//     var y = Math.sin(Rune.radians(j * spacing)) * radius;
//     shape.lineTo(x, y);
//   }

// }

///////////////Rotating Shapes Around Circle////////////////////
// var radius = 100; //200 //size of circle
// var numRects = 30; //30 //number of shapes
// var angle = 360 / numRects; //determine path around circle
// var group = r.group(r.width / 2, r.height / 2); //center circle

// for(var i = 0; i < numRects; i++)
// {
//   //x,y coordinates of starting point shapes
//   var x = Math.cos(Rune.radians(i * angle)) * radius;
//   var y = Math.sin(Rune.radians(i * angle)) * radius;
//   // r.rect(x, y, 50, 10, group) //draw rectangle
//     r.triangle(x,y,100,0,100,100,group) //sharp
//     // r.triangle(x,y,0,100,100,100,group) //opposite sharp
//     // r.circle(x,y,5,group) //circles of circles
//     .rotate(i * angle, 0, 0, true); //rotation iteration
// }

// r.draw();


///////////////ITERATION 2 - PATTERN OF SHAPE CIRCLES////////////////////

// var radius = 200; //200 //size of circle
// var numRects = 60; //30 //number of shapes
// var angle = 360 / numRects; //determine path around circle
// var group = r.group(r.width / 2, r.height / 2); //center circle

// for(var i = 0; i < numRects; i++)
// {
//   // var color = Rune.random(0,155); //random greyscale
//   //x,y coordinates of starting point shapes
//   var x = Math.cos(Rune.radians(i * angle)) * radius;
//   var y = Math.sin(Rune.radians(i * angle)) * radius;
//   // r.rect(x, y, 50, 10, group) //draw rectangle
//     r.triangle(x,y,100,0,100,100,group) //sharp
//       .fill(0)
//     // r.triangle(x,y,0,100,100,100,group) //opposite sharp
//     // r.circle(x,y,5,group) //circles of circles
//     .rotate(i * angle, 0, 0, true); //rotation iteration
// }

///////////////PATH QUAD BEZIER////////////////////
//simple path object drawn using quad curves with a single control point.////////


// var wave = r.path(250, 140)
//   .curveTo(50, -100, 100, 0)
//   .curveTo(150, 100, 200, 0)
//   .curveTo(250, -100, 300, 0)
//   .lineTo(300, 200)
//   .lineTo(0, 200)
//   .closePath();

// var wave = r.path(250, 140)
//   .curveTo(0, 0, 50, -100, 100, 0)
//   .curveTo(100, 0, 150, 100, 200, 0)
//   .curveTo(200, 0, 250, -100, 300, 0)
//   .lineTo(300, 200)
//   .lineTo(0, 200)
//   .closePath();



