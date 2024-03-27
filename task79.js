var twoSum = function(numbers, target) {
   let map = new Map();

   numbers.forEach((item, index) => {
       map.set(item, index + 1)
   })

    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        if(map.has(diff) && map.get(diff) !== i+1){
             return [i + 1, map.get(diff)]
        }
    }
};

console.log(twoSum([2,7,11,15], 9));