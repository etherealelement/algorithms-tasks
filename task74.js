var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const sortS = s.split("").sort().join(" ");
    const sortT = t.split("").sort().join(" ");
    return sortS === sortT
};

console.log(isAnagram("anagram", "nagaram"))