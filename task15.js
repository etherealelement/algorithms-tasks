const commonChars = (words) => {
  const hashMap = {};
  const res = []


  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    
    for (let j = 0; j < element.length; j++) {
      const el = element[j];

      if (hashMap[el]) {
        hashMap[el]++
      } else {
        hashMap[el] = 1
      }
    }    

  }

  for (const iterator in hashMap) {
    if (hashMap[iterator] === 3) {
      res.push(iterator)
    } else if (hashMap[iterator] > 3) {
      res.push(iterator.repeat(hashMap[iterator] / 2))
    }
  }


  return res

}

console.log(commonChars(["cool","lock","cook"]));