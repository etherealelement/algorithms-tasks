const groupAnagrams = (strs) => {
    const hashMap = {};

    for(let str of strs) {
        const key = str.split('').sort().join('');

        if (hashMap[key]) {
            hashMap[key].push(str);
        } else {
            hashMap[key] = [str]
        }
    }
    return Object.values(hashMap)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))