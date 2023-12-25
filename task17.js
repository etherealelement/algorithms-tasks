const arrayStringsAreEqual  = (word1, word2) => {
  const arrStr1 = word1.join("");
  const arrStr2 = word2.join("");

  let startStr1 = 0;
  let startStr2 = 0;


  while(startStr1 < arrStr1.length || startStr2 < arrStr2.length ) {
    if (arrStr1[startStr1] !== arrStr2[startStr2]) {
      return false;
    }
    startStr1++;
    startStr2++;
  }


  return true
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));