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
  engineer: 'Dave'
};

function* teamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  yield* team.testingTeam;
}

const names = [];

for (let name of teamIterator(engineeringTeam)) {
  names.push(name);
}
console.log(names);
