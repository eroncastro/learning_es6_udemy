// Methods are not separated with a comma, like what is done with objects.

class Car {
  constructor({ title }) {
    this.title = title;
  }

  honk() {
    return 'bee bee';
  }

  drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); // Car.constructor()
    this.color = options.color;
  }

  honk() {
    return `${super.honk()} beep`;
  }
}

const toyota = new Toyota({ title: 'Toyota', color: 'red' });
console.log(toyota);
console.log(toyota.honk());
