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

console.log(dup(["kelless","keenness"]));


// render 1, 
// render 2 1
// e10
// e20
// e30
// e1r0
// e2r0
// e3r0