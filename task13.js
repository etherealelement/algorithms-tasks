const countSumbols = (str = "") => {
  const res = {};
  const strToArr = str.split("");
  let resultString = ''

  strToArr.forEach(item => {
    if (res[item]) {
      res[item]++
    } else {
      res[item] = 1;
    }
  })

  for (const key in res) {
    resultString += `${key + res[key]}`
  }

  return resultString;
}
console.log(countSumbols('AAAABBCCCDDD'));