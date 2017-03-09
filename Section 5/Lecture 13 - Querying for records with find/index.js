var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

var user;

// ES5 approach for finding element inside an array using for loop
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break;
  }
}

console.log(user);

// ES6 approach for finding element inside an array using find
var user2 = users.find(function(user) {
  return user.name === 'Alex';
});

console.log(user2);
