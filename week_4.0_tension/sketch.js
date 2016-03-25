var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

//weird stuff with scaling
var xDist = r.width/20; //columns
var yDist = r.height/20; //rows

var stage1 = r.group(0,0);

//yellow orange red green
var hueMin = 0;
var hueMax = 120;

for(var x = 0; x < r.width; x+=xDist)
  {
    for(var y = 0; y < r.height; y+=yDist)
    {
      //size of squares
      var size1 = xDist;
      var size2 = Rune.random(size1/4, size1/2); //size1/2;
      var size3 = Rune.random(size2/2, size2/2);//size2/2;

      //alpha level
      var alpha1 = 1;//Rune.random(0,1);
      var alpha2 = Rune.random(0.75,1);
      var alpha3 = Rune.random(0.25,1);

      //when using global variables 
      var hue1 = Rune.random(hueMin,hueMax);
      var hue2 = Rune.random(hueMin,hueMax);
      var hue3 = Rune.random(hueMin,hueMax);

      // toggle to change colors - constrained to violet and yellow
      // var hue1 = Rune.random(280,310);
      // var hue2 = Rune.random(310,340);
      // var hue3 = Rune.random(50,60);

      //saturation
      var sat1 = 100;//Rune.random(0,100);
      var sat2 = 100;//Rune.random(0,100);
      var sat3 = 100;//Rune.random(0,100);

      //brightness
      var bri1 = 100;//Rune.random(0,100);
      var bri2 = 100;//Rune.random(0,100);
      var bri3 = 100;//Rune.random(0,100);

      //set color
      var color1 = new Rune.Color('hsv', hue1, sat1, bri1, alpha1);
      var color2 = new Rune.Color('hsv', hue2, sat1, bri2, alpha2);
      var color3 = new Rune.Color('hsv', hue3, sat1, bri3, alpha3);

      //make the thing
      var block1 = r.rect(x,y,size1,size1,stage1)
        .fill(color1)
        .stroke(false);

      var block2 = r.rect(x,y,size2,size2,stage1)
        .fill(color2)
        .stroke(false);

      var block3 = r.rect(x,y,size3,size3,stage1)
        .fill(color3)
        .stroke(false);

      //move the thing
      var moveX2 = Rune.random(0,size2);
      var moveY2 = Rune.random(0,size2);
      block2.move(moveX2,moveY2,true);

      var moveX3 = moveX2 + Rune.random(0,size3); 
      var moveY3 = moveY2 + Rune.random(0,size3); 
      block3.move(moveX3,moveY3,true);
    }
  }

r.draw();
