var TwoSum = function (nums , target ) {
  const indexes = [];

  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) indexes.push(i,j)
    }
  }
  return indexes
};

console.log(TwoSum([2,7,11,15], 9));