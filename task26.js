const topKFrequent = (nums, k) => {
    let count = new Map();
    nums.forEach(num => {
        count.set(num, count.has(num) ? count.get(num) + 1 : 1);
    });

    let entries = [...count.entries()];
    entries.sort((a, b) => b[1] - a[1]);
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(entries[i][0]);
    }

    return result;
}

console.log(topKFrequent([1,1,1,2,2,3], 2))