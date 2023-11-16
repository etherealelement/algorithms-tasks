const arrayPairSum = (nums) => {
    let sortedNums = nums.sort((a,b) => a -b)
    let sum  = [];


    
    for (let i = 0; i < sortedNums.length; i++) {
        for(let j = i + 1; j < sortedNums.length; j++) {
            sum.push([(Math.min(sortedNums[i], sortedNums[j]))]);
        }
    }


    return sum; 
}

console.log(arrayPairSum([1,4,3,2]))