// You can only use black (0) and white (255). 
// You are only allowed to use triangle(), rect() and ellipse() once each, 
// and no other drawing functions are allowed (no beginShape or images). 
// Bring to class a design of an ice cream cone.


//triangle
//ellipse
//rectangle frame

//play with polygon vectors:
//http://printingcode.runemadsen.com/examples/form/polygon_vectors.html
//play with even spacing:
//http://printingcode.runemadsen.com/examples/form/spacing_even.html
//play with random:
//http://printingcode.runemadsen.com/examples/form/polygon_random.html

//create the object
var r = new Rune({
  container: "body",
  width: 800,
  height: 1040,
});

console.log("test");

//create the group
var cone = r.group(0,0);
var triX = Math.random(0,800)*800;
console.log("triX: " + triX);
var triY = Math.random(0,1040)*1040;
console.log("triY: " + triY);



r.triangle(triX-50,triY+75,triX,triY+275,triX+50,triY+75,cone)
	.fill(0)
	.stroke(false);

 //   r.triangle(x-50,y+75,x,y+275,x+50,y+75,cone)
	// .fill(255)
	// .stroke(false);


//ice cream grid
var iceCream = r.group(75, 85);
for(var x = 0; x < 7; x++)
  {
    for(var y = 0; y < 9; y++)
    {
      var circ = r.circle(x * 110, y * 110, 35, iceCream)
        .fill(0)
        .stroke(false);
    }
  }

r.draw();