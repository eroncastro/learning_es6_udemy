const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
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
  const testingTeam = testingTeamIterator(team.testingTeam);
  yield* testingTeam; // yield* handles the subsequent values yielded by a generator
}

function* testingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];

for (let name of teamIterator(engineeringTeam)) {
  names.push(name);
}
console.log(names);
