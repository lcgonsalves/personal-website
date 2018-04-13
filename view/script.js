//Generate the initial fractal
var fractal = Trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    //You had this at 40, I set it to 85 to reduce total number of paths...for now
    cell_size: 85,
    seed: new Date() //the seed should be random every time you generate something
});

//Export the fractal to an SVG DOM
var fractalSvg = fractal.svg();

//Add it to the body - giggity...
document.body.appendChild(fractalSvg);

//Get the number of paths in the fractal
var PATH_NUMBER = $("svg").find("path").length;

console.log(`Total number of paths is: ${PATH_NUMBER}`);

//This is the crazy shit you want to do
var repaintColors = function() {
  for(var i=0;i<PATH_NUMBER;i++) {
    var currentPath = $("svg").find("path")[i];
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    $(currentPath).css({
      stroke:randomColor,
      fill:randomColor
    });
  }
}

//It's like a trip down drug lane.
window.setInterval(function() {
  repaintColors();
},1000);