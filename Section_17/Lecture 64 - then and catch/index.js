let promise = new Promise((resolve, reject) => {
  reject();
});

promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('I was also ran!'))
  .catch(() => console.log('uh oh!!'))
