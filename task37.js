var SingleNumber = function (nums ) {
  const map = {};
  
  nums.forEach(num => {
    if (map[num]) {
      map[num]++
    } else {
      map[num] = 1;
    }
  });

  return Number(Object.entries(map).filter(item => item[1] === 1)[0][0])

}

console.log(SingleNumber([4,1,2,1,2]))