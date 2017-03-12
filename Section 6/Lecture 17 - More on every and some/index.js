var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

// ES5 for determining if all computers can run a program
// and if only some computers can run a program
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (allComputersCanRunProgram && computer.ram < 16) {
    allComputersCanRunProgram = false;
  }

  if (!onlySomeComputersCanRunProgram && computer.ram >= 16) {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

// ES5 for determining if all computers can run a program
// and if only some computers can run a program
console.log(computers.every(function(computer) {
  return computer.ram >= 16;
}));

console.log(computers.some(function(computer) {
  return computer.ram >= 16;
}));
