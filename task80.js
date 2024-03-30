var threeSum = function (nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    const numsIsSumNull = [];
    const result = [];
    for (let i = 0; i < sortedNums.length; i++) {
        for (let j = i + 1; j < sortedNums.length; j++) {
            for (let k = j + 1; k < sortedNums.length; k++) {
                if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
                    numsIsSumNull.push([sortedNums[i], sortedNums[j], sortedNums[k]])
                }
            }
        }
    }
    return Array.from(new Set(numsIsSumNull.map(item => item.join(',')))).map(item => item.split(",").map(Number))

};
// console.log(threeSum([-1,0,1,2,-1,-4]))

const ThreeSum = (nums) => {
    const result = [];
    if (nums.length < 3) return result;
    const numsSort = nums.sort((a, b) => a - b);

    for (let i = 0; i < numsSort.length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = numsSort.length - 1;
        while (j < k) {
            let sum = numsSort[i] + numsSort[j] + numsSort[k];
            if (sum === 0) {
                result.push([numsSort[i], numsSort[j], numsSort[k]]);
                while(nums[j] === nums[j + 1]) j++;
                while(nums[k] === nums[k - 1]) k--;
                j++;
                k--;
                continue;
            }
            if(sum < 0) {
                j++;
                continue;
            }
            if (sum > 0) {
                k--;
                continue;
            }
        }
    }
    return result;
}

console.log(ThreeSum([-1, 0, 1, 2, -1, -4]))