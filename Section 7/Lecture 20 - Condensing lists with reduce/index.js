var numbers = [10, 20, 30];

var sum = 0;

// ES5 way of calculating the sum of an array of numbers
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

// ES6 way of calculating the sum of an array of numbers
var reduceSum = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log(reduceSum);
