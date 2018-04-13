var color = [2, 185 ,115];
var forward = true; 

window.setInterval(function() {
var pattern = Trianglify({
	height: window.innerHeight,
	width: window.innerWidth,
	cell_size: 40,
  seed: 123,
  x_colors: ['#000000', rgbToHex(color[0], color[1], color[2]), '#FFFFFF']
});

document.body.appendChild(pattern.canvas());

pickColor();

}, 10);

// Methods: converting RGB to HEX
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) 
               + componentToHex(g) 
               + componentToHex(b);}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;}

// Method: algorithm for choosng color
function pickColor(){
  if(forward){
    if(color[2] < color[1])
      color[2] += 5;
    else
      color[1] -= 5;

  } else {
    if(color[1] < color[2])
      color[1] += 5;
    else
      color[2] -= 5;
  }

  // check whether fringe values have been met
  if (color[1] == 115) forward = false;
  if (color[2] == 115) forward = true;}