function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  //  go into the store with cash
  const stuffFromStore = yield 'cash';

  // walking to laundry place
  const cleanClothes = yield 'laundry';

  // walking back home
  return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();
console.log(gen.next()); // leaving our house
console.log(gen.next('clothes'));
console.log(gen.next('groceries')); // leaving the store with groceries
