const romanToInt = (s) => {
  const romanIntMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const el = s[i]
    
    if(i < s.length - 1 && romanIntMap[el] < romanIntMap[s[i + 1]]) {
      res -= romanToInt[el];
    } else {
      res += romanIntMap[el]
    }
  }
return res;
}

console.log(romanToInt("VV"))