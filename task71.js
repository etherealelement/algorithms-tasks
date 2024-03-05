const isLongestSubstring = (s = "babad") => {
    if (s.length <= 0) return "";
    const palindromeCollection = [];
    let windowStart = 0;
    let windowEnd = 1;

    while (windowEnd < s.length) {
        let currentSetSize = windowEnd - windowStart + 1;
        if (isPalindrome(s.slice(windowStart, windowEnd +1))) {
            palindromeCollection.push([s.slice(windowStart, windowEnd +1)])
            windowEnd++;
        } else {
            windowStart++;
        }

    }

    function isPalindrome(str) {
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
    return palindromeCollection;
}

console.log(isLongestSubstring())