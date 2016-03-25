var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1040,
  debug: true
});

var chunk = r.group(10,10); //offset by 10 for random movement
var xDist = r.width/24; //creates 24 colums
var yDist = r.height/48; //creates 48 rows

// var color = 0; //color for each line

for(var x = 0; x < r.width; x+=xDist)
  {
    for(var y = 0; y < r.height; y+=yDist)
    {
      // for consistent width + height:
      // var lineWidth = 5;
      // var lineHeight = 25;

      //range values
      var ranWidthMin = 1;
      var ranWidthMax = 5;
      var ranHeightMin = 20;
      var ranHeightMax = 25;
      var moveMin = -10;
      var moveMax = 10;

      //randomized width and height
      var width1 = Rune.random(ranWidthMin,ranWidthMax );
      var height1 = Rune.random(ranHeightMin,ranHeightMax);
      var width2 = Rune.random(ranWidthMin,ranWidthMax );
      var height2 = Rune.random(ranHeightMin,ranHeightMax);
      var width3 = Rune.random(ranWidthMin,ranWidthMax );
      var height3 = Rune.random(ranHeightMin,ranHeightMax);
      var width4 = Rune.random(ranWidthMin,ranWidthMax );
      var height4 = Rune.random(ranHeightMin,ranHeightMax);
      var thickness = Rune.random(1,5);

      // var color = Rune.random(0); //solid color for each line
      var color = Rune.random(0,155); //random greyscale for each line

      //draws 5 day chunk
      var line1 = r.rect(x, y, width1, height1,chunk)
        .fill(color)
        .stroke(false);
      var line2 = r.rect(x+5, y, width2, height2,chunk)
        .fill(color)
        .stroke(false);
      var line3 = r.rect(x+10, y, width3, height3,chunk)
        .fill(color)
        .stroke(false);
      var line4 = r.rect(x+15, y, width4, height4,chunk)
        .stroke(false)
        .fill(color);
      var line5 = r.line(x+15, y, x, y+25, chunk)
        .strokeWidth(thickness)
        .fill(color);

      //moves each line in the chunk randomly
      var moveX = Rune.random(moveMin, moveMax);
      var moveY = Rune.random(moveMin, moveMax);
      line1.move(moveX, moveY, true);
      line2.move(moveX, moveY, true);
      line3.move(moveX, moveY, true);
      line4.move(moveX, moveY, true);
      line5.move(moveX, moveY, true);
    }
  }

r.draw();