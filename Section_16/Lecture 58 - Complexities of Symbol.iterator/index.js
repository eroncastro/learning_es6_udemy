// Symbol Iterators is a tool that teaches objects
// how to respond to for ... of loops.

// [Symbol.iterator] -> key interpolation

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () { // key of Symbol.iterator defines the default iterator for this object.
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];

for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names);
