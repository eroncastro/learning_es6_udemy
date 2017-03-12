var names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

console.log(names.every(function(name) {
  return name.length > 4;
}));

console.log(names.some(function(name) {
  return name.length > 4;
}));
