var r = new Rune({
  container: "#canvas",
  width: 975,
  height: 1575,
  debug: true
});

var chunk = r.group(10,10); //offset by 10 for random movement

// var xDist = r.width/6; //creates 6 colums
// var yDist = r.height/12; //creates 12 rows

//4 years
//2 years = 365 * 2 = 730 days = 146 chunks exactly
var xDist = r.width/6; //colums 6 /9
var yDist = r.height/12; //rows 12 /18


// var xDist = r.width/24; //creates 24 colums
// var yDist = r.height/48; //creates 48 rows

// var color = 0; //color for each line

for(var x = 0; x < r.width; x+=xDist)
  {
    for(var y = 0; y < r.height; y+=yDist)
    {
      // for consistent width + height:
      // var lineWidth = 5;
      // var lineHeight = 25;

      //range values og
      // var ranWidthMin = 1;
      // var ranWidthMax = 5;

      var ranWidthMin = 2;
      var ranWidthMax = ranWidthMin*5;

      //not sure og
      // var ranHeightMin = 20;
      // var ranHeightMax = 25;

      var ranHeightMin = ranWidthMin*20;
      var ranHeightMax = ranWidthMax*5;

      //randomized width and height
      var width1 = Rune.random(ranWidthMin,ranWidthMax );
      var height1 = Rune.random(ranHeightMin,ranHeightMax);
      var width2 = Rune.random(ranWidthMin,ranWidthMax );
      var height2 = Rune.random(ranHeightMin,ranHeightMax);
      var width3 = Rune.random(ranWidthMin,ranWidthMax );
      var height3 = Rune.random(ranHeightMin,ranHeightMax);
      var width4 = Rune.random(ranWidthMin,ranWidthMax );
      var height4 = Rune.random(ranHeightMin,ranHeightMax);
      
      // var thickness = Rune.random(1,5);
       var thickness = Rune.random(ranWidthMin, ranWidthMax);

      // var color = Rune.random(0,155); //random color for each line

      var color = Rune.random(0,50); //random color for each line

      //draws 5 day chunk
      var line1 = r.rect(x, y, width1, height1,chunk)
        .fill(color)
        .stroke(false);

      // var line2 = r.rect(x+10, y, width2, height2,chunk)
      //   .fill(color)
      //   .stroke(false);

      // var line3 = r.rect(x+20, y, width3, height3,chunk)
      //   .fill(color)
      //   .stroke(false);
      // var line4 = r.rect(x+30, y, width4, height4,chunk)
      //   .stroke(false)
      //   .fill(color);
      
      var line2 = r.rect(x+ranWidthMax, y, width2, height2,chunk)
        .fill(color)
        .stroke(false);

      var line3 = r.rect(x+ranWidthMax*2, y, width3, height3,chunk)
        .fill(color)
        .stroke(false);

      var line4 = r.rect(x+ranWidthMax*3, y, width4, height4,chunk)
        .stroke(false)
        .fill(color);

      // var line5 = r.line(x+35, y, x, y+25, chunk)
      //   .strokeWidth(thickness)
      //   .fill(color);

      var line5 = r.line(x+ranWidthMax*4, y, x, y+ranHeightMax, chunk) //x,y, width, height
        .strokeWidth(thickness)
        .fill(color);

      //moves each line in the chunk randomly
      // var moveX = Rune.random(-10,10);
      // var moveY = Rune.random(-10,10);

      var moveX = Rune.random(-ranWidthMax,ranWidthMax);
      var moveY = Rune.random(-ranWidthMax,ranWidthMax);


      line1.move(moveX, moveY, true);
      line2.move(moveX, moveY, true);
      line3.move(moveX, moveY, true);
      line4.move(moveX, moveY, true);
      line5.move(moveX, moveY, true);
    }
  }

r.draw();