var join = function(arr1, arr2) {
  const res = arr1.concat(arr2);
  res.sort((a, b) => a.id - b.id);
  return res;
};

console.log(join([{"id": 1,"x": 1},{"id": 2,"x": 9}]));

