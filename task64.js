const lengthOfLongestSubstring = (str = "abcabcbb") => {
    let maxLength = 0;
    let windowStart = 0;
    let windowEnd = 0;

    while(windowEnd < str.length) {
        let currentSetSize = windowEnd - windowStart + 1;
        if (isUnique(str.slice(windowStart, windowEnd + 1))) {
            maxLength = Math.max(maxLength, currentSetSize);
            windowEnd++;
        } else {
            windowStart++;
        }
    }


    function isUnique(char) {
        return char.length === new Set(char).size
    }
    return maxLength
};

console.log(lengthOfLongestSubstring())