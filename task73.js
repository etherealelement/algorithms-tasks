var containsDuplicate = function(nums) {
    const obj = {}

    for(let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }

    for (let key in obj) {
        if (obj[key] > 1) {
            return false
        }
    }

    return true
};

console.log(containsDuplicate([2,3,1]))