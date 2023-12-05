const intersection = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result = [];

    set1.forEach((num) => {
        if (set2.has(num)) {
            result.push(num);
        }
    });

    return result;
}

console.log(intersection([1,2,2,1],[2,2]))