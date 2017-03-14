// Generator is a function that can be entered and executed multiple times
// The asterisk indicates that a function is a generator in ES6.

function* numbers() {
  yield;
}

const gen = numbers();
console.log(gen.next());
console.log(gen.next());
