function findWhere(array, criteria) {
  return array.find(function(elem) {
    var key = Object.keys(criteria)[0];
    return criteria[key] === elem[key];
  });
}