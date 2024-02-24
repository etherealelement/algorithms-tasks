"use strict";


const maxArea = (height = [1,8,6,2,5,4,8,3,7]) => {
    let max = 0;
    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        max = Math.max(Math.min(height[start], height[end]) * (end - start),max);
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return max
}

console.log(maxArea())