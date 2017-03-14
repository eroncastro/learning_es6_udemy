// ES5
var expense = {
  type: 'Business',
  amount: '$45 USD'
};

var type = expense.type;
var amount = expense.amount;

// ES6
// I want to declare a const type and I want to reference expense.type
const { type } = expense;

// I want to declare a const amount and I want to reference expense.amount
const { amount } = expense;

// In a single line
const { type, amount } = expense;

// If we try to destructure a property that is not defined on the reference object,
// It will be undefined.
