function getMessage() {
  const year = new Date().getFullYear();

  // ES5 string interpolation
  let msg = "The year is " + year;

  // Template strings are written between back-ticks (``)

  // ES6 string interpolation inside template strings.
  let newMsg = `The year is ${year}`;
}

console.log(getMessage());
