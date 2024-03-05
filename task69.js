const isPalindrome = (str) => {
    const clearStr = str.replace(/[^a-zA-Z\s]/g, "").replace(/\s/g,"").toLowerCase();
    let start = 0;
    let end = clearStr.length - 1;

    while (start < end) {
        if (clearStr[start] !== clearStr[end]) {
            return false
        }
        start++
        end--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))