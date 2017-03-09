// ES5 classic for loop for logging array elements

var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Rewriting for loop using ES6 forEach helper

colors.forEach(function(color) {
  console.log(color);
});
