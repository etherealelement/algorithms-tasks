var LongestPalindromicSubstring = function (s ) {
   const strs = [];
   
   for (let i = 0; i < s.length; i++) {
     for (let j = i + 1; j < s.length; j++) {
          console.log(s.slice(i, j));
          if (isPalindrome(s.slice(i, j))) {
            strs.push(s.slice(i, j));
          }
     }
   }  

   function isPalindrome(str) {
    return str === str.split('').reverse().join('');
   }

   return strs.sort((a, b) => b.length - a.length)[0];
}

console.log(LongestPalindromicSubstring("babad"));
