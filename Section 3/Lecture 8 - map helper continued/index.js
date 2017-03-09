var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];


// pluck operation
var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);