const remember = (str) => {
    const clearStr = str.replace(/[^a-zA-Z0-9]/g, '');
    const res = []


    for (let i = 0; i < str.length; i++) {
        const left = str[i];

        for(let j = i + 1; j < str.length; j++) {
            const right = str[j]

            if (left === right) {
                if (!res.includes(left) && !res.includes(right))
                    res.push(left)
            }

        }

    }


    return res;
}

console.log(remember("limbojackassin the garden"));