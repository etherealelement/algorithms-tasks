const findOdd = (arr) => {
    const map = {};
    let res = 0;

    for (const iterator of arr) {
        if (map[iterator]) { 
            map[iterator]++;
        }else {
            map[iterator] = 1;
        }
    }
    
    for (const key in map) {
        if (map[key] % 2 !== 0) {
            res = key;
        }
    }

    return Number(res)
}

console.log(findOdd([0,1,0,1,0]));