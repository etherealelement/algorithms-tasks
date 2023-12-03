const repeats = (arr) => {
	let obj = {};
    let res = 0;
	for (const iterator of arr) {
		if (obj[iterator]) {
            obj[iterator]++
        }
        else {
            obj[iterator] = 1;
          }
	}

    for (const key in obj) {
        if (obj[key] === 1) {
            res += Number(key)
        }
    }
    return res;
};

console.log(repeats([4,5,7,5,4,8]));
