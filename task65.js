const getMaxSetSize = (arr = [0,1,1,1,1,0,1,1,1,1,1,1,0]) =>  {
    let maxSetSize = 0;
    let windowStart = 0;
    let windowEnd =0;

    while (windowEnd < arr.length) {
        if (arr[windowEnd] === 0) {
            maxSetSize = Math.max(maxSetSize, windowEnd - windowStart)
            windowStart = windowEnd + 1;
        }
        windowEnd++;

    }
    return maxSetSize
}

console.log(getMaxSetSize())