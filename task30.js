var ValidPalindrome = function (s) {
   const clearStr = s.split(/[^\w]/).join('').toLowerCase();

   let start = 0;
   let end = clearStr.length - 1;

   while(start < end) {
     if (clearStr[start] !== clearStr[end]) {
       return false;
     }
     start++;
     end--;
   }
return true;

}

console.log(ValidPalindrome("A man, a plan, a canal: Panamas"))