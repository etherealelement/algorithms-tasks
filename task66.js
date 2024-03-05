const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;
  let windowStart = 0;
  let windowEnd = s1.length - 1;

  for (let i = 0; i < s2.length; i++) {
      while(windowEnd < s2.length) {
          if (s1 === s2.slice(windowStart, windowEnd + 1)) return true
          windowEnd++
      }
      windowStart++
      windowEnd = windowStart + s1.length - 1
  }
return false;
}

console.log(checkInclusion("ab", "eidbaooo"))