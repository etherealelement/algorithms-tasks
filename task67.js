const search = function(nums, target) {
   let start = 0;
   let end = nums.length - 1;

   while (start < end) {
       let mid = start + Math.floor((end - start + 1) / 2);
       if (target < nums[mid]) {
           end = mid - 1
       } else {
           start = mid;
       }
   }
   return nums[start] === target ? start : -1
};


console.log(search([-1,0,3,5,9,12], 9));