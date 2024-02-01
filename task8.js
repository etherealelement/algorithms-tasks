const numbersArray = [2,2,3,3,4,4,5];

const findUnique = (data = []) => {
  const hashMap = {};
  data.forEach(num => {
    if (hashMap[num]) {
      hashMap[num]++
    } else {
      hashMap[num] = 1;
    }
  })
  
  for (const key in hashMap) {
    if (hashMap[key] === 1) {
      return key
    }
  }
}

console.log(findUnique(numbersArray));