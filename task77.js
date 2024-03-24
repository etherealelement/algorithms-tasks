var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    const sortNums = nums.sort((a,b) => a - b);
    let counter = 1;
    let max = 1;

    for (let i = 0; i < sortNums.length; i++) {
        if (sortNums[i] - sortNums[i - 1] === 1) {
            counter++
            max = Math.max(max, counter)
        } else if (sortNums[i] === sortNums[i - 1]) continue
        else {
            counter = 1
        }

    }

    return max;
};

console.log(longestConsecutive([100,4,200,1,3,2]));