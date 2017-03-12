function unique(array) {
  return array.reduce(function(uniqueArray, number) {
    var numberIsNotInUniqueArray = uniqueArray.some(function(uniqueArraynumber) {
      return uniqueArraynumber !== number;
    });

    if (numberIsNotInUniqueArray) { uniqueArray.push(number); }

    return uniqueArray;
  }, [])
}