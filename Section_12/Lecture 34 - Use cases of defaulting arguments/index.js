function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999999;
}

function createAdminuser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

let user = new User(generateId());
createAdminuser(user);
console.log(user);