var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

// Using reduce to make an array of colors names
var colorNames = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, [])

console.log(colorNames);
