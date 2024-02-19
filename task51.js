const height = [1,8,6,2,5,4,8,3,7] 

var maxArea = function(height) {
  let max = 0;
  let right  = height.length - 1;  
  let left = 0;

  while(left < right) {
    let currentValume = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, currentValume);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

console.log(maxArea(height));