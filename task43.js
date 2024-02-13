const countSymbols = ( str = 'AAAABBCCCDDD' ) => {
  const map = {};
  const res = []


  str.split("").forEach(item => {
    if (map[item]) {
      map[item]++ 
    }else {
      map[item] = 1;
    }
  })

  for (const key in map) {
    res.push(key, map[key])
  }

  return res.join("")
}

console.log(countSymbols());