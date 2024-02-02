/*
Примеры:
- Казак // true
- Madam, I'm Adam // true
- А в Енисее - синева // true
- О, духи, от уборки микробу-то и худо // true
- Не палиндром // false
*/

const isPalindrome = () => {
  const str = "nopalinrome "
  const clearString = str.replace(/[^а-яА-Яa-zA-Z]+/g, '').toLowerCase();

  let start = 0;
  let end = clearString.length;

  while(start < end) {
    if(clearString[start] !== clearString[end - 1]) {
      return false
    }
    start++;
    end--;
  }
return true;
}

console.log(isPalindrome());