// const is a keyword to declare variables where we expect the value
// we assign to it to never change.
// Conversely, let is a keyword to declare variable which value
// we expect to change over time.

// ES5
var name = 'Jane';
var title = 'Software Engineer';
var hourlyWage = 40;

// ES6
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

title = 'Senior Software Engineer';
hourlyWage = 45;
