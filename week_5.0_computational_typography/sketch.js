var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 1040,
  debug: true
});

var width = 100;
var height = width;

var c_letter = r.group(width*2, 300);
var o_letter = r.group(width*5, 400);
var i_letter = r.group(width*7, 150);
var l_letter = r.group(width*8.5, 150);


function drawC(){
	var radius = 50; //200 //size of circle
	var numShapes = 30; //30 //number of shapes
	var angle = 180 / numShapes; //determine path around circle
	var group = r.group(r.width / 2, r.height / 2); //center circle

	for(var i = 0; i < numShapes; i++)
	{
	  //x,y coordinates of starting point shapes
	    var x = Math.cos(Rune.radians(i * angle)) * radius;
	    var y = Math.sin(Rune.radians(i * angle)) * radius;
	    r.ellipse(x,y,width,height, c_letter) //circles of circles
	    .rotate(i * angle, 0, 0, true)
	    .fill(false)
	    .stroke(0)
	    .rotate(95,0,100); //rotation iteration
	}
}

function drawO(){
	var radius = 50; //200 //size of circle
	var numShapes = 50; //30 //number of shapes
	var angle = 360 / numShapes; //determine path around circle
	var group = r.group(r.width / 2, r.height / 2); //center circle

	for(var i = 0; i < numShapes; i++)
	{
	  //x,y coordinates of starting point shapes
	    var x = Math.cos(Rune.radians(i * angle)) * radius;
	    var y = Math.sin(Rune.radians(i * angle)) * radius;
	    r.ellipse(x,y,width,height, o_letter) //circles of circles
	    .rotate(i * angle, 0, 0, true)
	    .fill(false)
	    .stroke(0); //rotation iteration
	}
}

function drawI(){
	for (var y=120; y <150; y+=width/20){
			r.ellipse(0,y,width,height,i_letter)
				.fill(false)
				.stroke(0);
			}
	for (var y=200; y <300; y+=width/20){
			r.ellipse(0,y,width,height,i_letter)
				.fill(false)
				.stroke(0);
			}
}

function drawL(){
	for (var y=0; y <300; y+=width/20){
		r.ellipse(0,y,width,height,l_letter)
			.fill(false)
			.stroke(0);
		}
}


drawC();
drawO();
drawI();
drawL();
r.draw();