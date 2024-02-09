var MajorityElement = function (nums ) {
  const map = {};

  nums.forEach(num => {
    if(map[num]) {
      map[num]++
    } else {
      map[num] = 1;
    }
  })

  return Number(Object.entries(map).sort((a,b) => b[1] - a[1])[0][0])

}

console.log(MajorityElement([2,2,1,1,1,2,2]));