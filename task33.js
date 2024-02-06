var LongestSubstringWithoutRepeatingCharacters = function (s) {
  let maxLength = 0;
  let substring = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if(substring.includes(char)) {
      const index = substring.indexOf(char);
      substring = substring.slice(index + 1);
    }

    substring += char;
    maxLength = Math.max(maxLength, substring.length);
  }

  return maxLength;

};

console.log(LongestSubstringWithoutRepeatingCharacters("abcabcbb"));