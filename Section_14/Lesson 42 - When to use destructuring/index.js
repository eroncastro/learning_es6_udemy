function signup({ username, password, email, dateOfBirth, city }) {
  console.log(username);
  console.log(password);
  console.log(email);
  console.log(dateOfBirth);
  console.log(city);
}

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
}

signup(user);
