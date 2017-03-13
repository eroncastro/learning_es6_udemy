// spread operator ... -> it has to be applied to an array
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

// Array concatenation
// defaultColors.concat(userFavoriteColors);

const colors = ['green', 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors];

console.log(colors);

function validateShoppingList(...items) {
  if (items.indexOf('milk') <  0) {
    return ['milk', ...items];
  }

  return items;
}

console.log(validateShoppingList('oranges', 'bread', 'eggs'));
