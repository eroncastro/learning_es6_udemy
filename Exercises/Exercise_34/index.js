const numbers = [1, 2, 3];

function double([ number, ...rest ]) {
  if (!number) {
    return [];
  }

  return [2 * number, ...double(rest)];
}