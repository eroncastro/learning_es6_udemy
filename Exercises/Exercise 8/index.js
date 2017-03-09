function reject(array, iteratorFunction) {
  return array.filter(function(element) {
    return !iteratorFunction(element);
  })
}