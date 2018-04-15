//Generate the initial fractal
var fractal = Trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    x_colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
    //You had this at 40, I set it to 85 to reduce total number of paths...for now
    cell_size: 100,
    seed: new Date() //the seed should be random every time you generate something
});

//Export the fractal to an SVG DOM
var fractalSvg = fractal.svg();

//Add it to the body - giggity...
document.body.appendChild(fractalSvg);

//Get the number of paths in the fractal
var PATH_NUMBER = $("svg").find("path").length;

console.log(`Total number of paths is: ${PATH_NUMBER}`);

// color value
var c = ["#549f91", "#498c92", "#497692", "#496892", "#425d7c"]; //[255, 80, 50];
var index = 0;
var increasing = true;

//This is the crazy shit you want to do
var repaintColors = function() {
  for(var i=0;i<PATH_NUMBER;i++) {
    var currentPath = $("svg").find("path")[i];
    var newColor = gradientMaker();
    $(currentPath).css({
      stroke:newColor,
      fill:newColor
    });
  }
}

//It's like a trip down drug lane.
window.setInterval(function() {
  repaintColors();
}, 4000);

// Helpers
var componentToHex = function(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

var rgbToHex = function(r, g, b) {
    return "#" + componentToHex(r) 
    + componentToHex(g) 
    + componentToHex(b);
}

/* moves a single RGB value back and forth, creating
   a gradient given a initial color value */
var gradientMaker = function() {
  /*
  if (c[1] == 0) increasing = true;
  else if (c[1] == 255) increasing = false;

  if (increasing)
    c[1]++;
  else
    c[1]--;

  return rgbToHex(c[0], c[1], c[2]);
  */
  if (index == 0) increasing = true;
  if (index == (c.length - 1)) increasing = false;

  var newColor = c[index];

  if (increasing)
    index++;
  else
    index--;

  return newColor;
}

repaintColors();