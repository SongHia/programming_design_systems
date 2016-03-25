var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});


//group
var shape1 = r.group(0,0);

////////////////////ITERATION 1////////////////////
var p = r.polygon(0, 0, shape1)
  .stroke(false)
  .fill(30, 30, 30);

for(var i = 0; i < 2000; i++) {
	// var color = Rune.random(0,155);
  // p.lineTo(Math.random() * 400, Math.random() * 400);
  p.lineTo(Math.random() * r.width, Math.random() * r.height)
  	// .fill(color);
}

r.draw();