const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, name2, name3 ] = companies;

console.log(name);
console.log(name2);
console.log(name3);

const [ name4, ...rest ] = companies;
console.log(name4);
console.log(rest);