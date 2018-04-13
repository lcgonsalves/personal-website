/*
### EXAMPLE CODE FOR VUE.JS ###
var myModel = {
  name: "Ashley",
  age: 24,
  friends: [
    { name: "Bob", age: 21 },
    { name: "Jane", age: 20 },
    { name: "Anna", age: 29 }
  ],
  search: ""
};

var myViewModel = new Vue({
  el: '#my_view',
  data: myModel
});
*/

var pattern = Trianglify({
  height: window.innerHeight,
  width: window.innerWidth,
  cell_size: 40});

document.body.appendChild(pattern.canvas());