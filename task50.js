const countSymbols = (str = 'AAAABBCCCDDD') => {
  const map = {};
  const strToArr = str.split(""); 

  strToArr.forEach(item => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  })

  return Object.entries(map).flat().join("")

}


console.log(countSymbols()); // ‘A4B2C3D3’


