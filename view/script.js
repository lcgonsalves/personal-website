// load up fractal in the background as soon as possible
$(document).ready(function() {
  var curSeed = new Date();

  //Generate the initial fractal
  var fractal = Trianglify({
    height: screen.height,
    width: screen.width,
    x_colors: ["#232598", "#b7b4db", "#544b8d"],
    cell_size: 65,
    seed: curSeed //the seed should be random every time you generate something
  });

  //Export the fractal to an SVG DOM
  var fractalSvg = fractal.svg();

  //Add it to the body
  document.body.appendChild(fractalSvg);
});