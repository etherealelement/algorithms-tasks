var chunk = function(arr, size) {
  const result = [];
  if (arr.length === 0) return result;

  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) {
      result.push([arr[i]]);
    } else {
      result[result.length - 1].push(arr[i]);
    }
  }
  return result;
}

console.log(chunk([1,2,3,4,5], 2));