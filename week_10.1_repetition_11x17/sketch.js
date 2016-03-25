var r = new Rune({
  container: "#canvas",
  width: 975,
  height: 1575,
  debug: true
});

//colors
var blanchedAlmond = "#f1e5cb";
var forestGreen = "#619479";
var salmon = "#e07664";
var lightSlateGrey = "#7788a4";
var cadetBlue = "#70adb6";
var burntSienna = "#993F1A";
var napalmOrange = "#FE541D";
var alphaMin = 0.7;
var alphaMax = 1;

//color array for random
var allColors = [forestGreen, salmon, lightSlateGrey, cadetBlue, burntSienna, napalmOrange];
var colorLength = allColors.length;

//draw background
r.rect(0, 0, r.width, r.height).fill(blanchedAlmond)
  .stroke(false);

//weird stuff with scaling
var columns = 10;
var rows = 16;
var xDist = r.width/columns; 
var yDist = r.height/rows; 

//sizing
var width = 50; //40
var height = width*2.0;
// var width = xDist;
// var height = yDist;


//movement
var ranMin = 0;
var ranMax = 2;

var stage1 = r.group(width, width);

for(var x = 0; x < r.width; x+=xDist)
  {
    for(var y = 0; y < r.height; y+=yDist)
    {
      var color = allColors[Math.floor(Rune.random(0,colorLength))];
      var alpha = Rune.random(alphaMin,alphaMax);

      var segment1 = r.ellipse(x, y, width, height, stage1)
        .rotate(45, x, y)
        .fill(color, alpha)
        .stroke(false);

      var segment2 = r.ellipse(x, y, width, height, stage1)
        .rotate(130, x, y)
        .fill(color, alpha)
        .stroke(false);

      //random movement
      var moveX1 = Rune.random(ranMin,ranMax);
      var moveY1 = Rune.random(ranMin,ranMax);
      segment1.move(moveX1,moveY1,true);

      var moveX2 = Rune.random(ranMin,ranMax);
      var moveY2 = Rune.random(ranMin,ranMax);
      segment2.move(moveX2,moveY2,true);
    }
  }

r.draw();
