const restoreString = (s, indices) => {
  const diffArr = [];
  let res = "";
  let start1 = 0;
  let start2 = 0;

  while (start1 < s.length && start2 < indices.length) {
    diffArr.push([s[start1], indices[start2]]);
    start1++;
    start2++;
  }

  diffArr.sort((a,b) => a[1] - b[1])

  for (let i = 0; i < diffArr.length; i++) {
    const element = diffArr[i][0];
    res += element
  }

  return res

}

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));