const dup = (arr) => {
    return arr.map(item => {
        let str = "";
        
        for (let i = 0; i < item.length; i++) {
            if(item[i] !== item[i + 1]) {
                str += item[i]
            }
        }
        return str
    })
}

console.log(dup(["kelless","keenness"]))