var numbers = [1, 2, 3];
var doubleNumbers = [];

// ES5 approach

for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

console.log(doubleNumbers);

// ES6 approach
var doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled);