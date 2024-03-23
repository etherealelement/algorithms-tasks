var groupAnagrams = function(strs) {
  const anagrams = new Map();  

  strs.forEach((str) => {
      const sortedStr = str.split('').sort().join('');
      if (anagrams.has(sortedStr)) {
        anagrams.set(sortedStr, [...anagrams.get(sortedStr), str]);
      } else {
        anagrams.set(sortedStr, [str]);
      }
  })


  return Array.from(anagrams.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));