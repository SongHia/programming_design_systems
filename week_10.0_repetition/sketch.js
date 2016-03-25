var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: true
});

// draw background
r.rect(0, 0, r.width, r.height).fill(30);

//line var
var lineStrokeColor = 255; //255 white
var lineStrokeWidth = 3;
// var fillColor = 155;
var fillColor = false;
// var linesGap = 15;
var linesGap = r.height/10;
var startX = 100;
var startY = 50;
var segmentIterations = 20;
var segmentXDist = 30;
// var randomMax = 50;
var randomMax = linesGap;

//modulo var
var moduloHeight = randomMax;

//sin var
var sinHeight = randomMax;

var perlinMax = randomMax;



// Random --------------------------------------- 
function randomLine(){
  for(var y = 0; y < r.height-(startY + randomMax); y+= linesGap){
    drawRandomLines(y);
  }
}

function drawRandomLines(y){
      var randomPath = r.path(startX, startY + y).fill(fillColor);
      for(var i = 0; i < segmentIterations; i++) {
        var x = i * segmentXDist;
        var y = Rune.random(randomMax);
        randomPath.lineTo(x, y)
          .stroke(lineStrokeColor)
          .strokeWidth(lineStrokeWidth);
    }
}


// Modulo ---------------------------------------
function moduloLine(){
  for(var y = 0; y < r.height-(startY + moduloHeight); y+= linesGap){
    drawModuloLines(y);
  }
}

function drawModuloLines(y){
  var moduloPath = r.path(startX, startY + y).fill(fillColor)
  for(var i = 0; i < segmentIterations; i++) {
    var x = i * segmentXDist;
    var y = (i % 2) * moduloHeight;
    moduloPath.lineTo(x, y)
      .stroke(lineStrokeColor)
      .strokeWidth(lineStrokeWidth);
  }
}


//DUNNO
// Sin ---------------------------------------
 
  // var sinPath = r.path(startX, startY).fill(fillColor)
  // for(var i = 0; i < 20; i+=1) {
  //   // var x = i * 30;
  //   // var y = Math.sin(i / 2) * 25;
  //   var x = i * 10;
  //   var y = Math.sin(i / 2) * 25;
  //   sinPath.lineTo(x, y)
  //     .stroke(lineStrokeColor)
  //     .strokeWidth(lineStrokeWidth);
  //   console.log("x: " + x + " y: " + y);
  // }

// // Perlin
// // ---------------------------------------

function perlinLine(){
  for(var y = 0; y < r.height-(startY + moduloHeight); y+= linesGap){
    drawPerlinLines(y);
  }
}

function drawPerlinLines(y){
  var noise = new Rune.Noise();
  // noise.noiseSeed(2);
  var noiseSeed = noise.noiseSeed(Math.ceil(Rune.random(0,5)));
  // noise.noiseDetail(100);

  var perlinPath = r.path(startX, startY + y).fill(fillColor)
  // for(var i = 0; i < 100; i++) {
    // var x = i * 5;
    // var y = noise.get(i * 0.1) * 200;
  for(var i = 0; i < 120; i++) {
    var x = i * 5;
    var y = noise.get(i * 0.1) * 200;

    //gets rid of the initial jump
    if(i == 0){
      perlinPath.moveTo(x,y);
    }

    perlinPath.lineTo(x, y)
      .stroke(lineStrokeColor)
      .strokeWidth(lineStrokeWidth);
  }
}



//// main functions ////
// randomLine();
// moduloLine();
perlinLine();


r.draw();
