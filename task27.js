const anagram = (strA, strB) => {
   let startS1 = 0;
   let startS2 = 0;

  while(startS1 < strA.length && startS2 < strB.length) {
    if(strA[startS1] !== strB[startS2]) {
      return false
    }
    startS1++;
    startS2++;
  }
  return true
}

console.log(anagram('finder', 'Friend')) // true
console.log(anagram('hello', 'bye')) // false