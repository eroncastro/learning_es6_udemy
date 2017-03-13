function count(targetString) {
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;

  return targetString.split('').reduce(
    function(number, char) {
      if (characters.includes(char)) return number + 1;
    }, number)
}

console.log(count('aeiobzxceiaipbiox'));
