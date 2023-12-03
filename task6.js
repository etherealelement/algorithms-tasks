const moveZeroes = (arr) => {
    let start = 0;
    let endPoint = arr.length - 1;

    while(start < arr.length) {
        if (arr[start] === 0){ 
            arr[endPoint + 1] = arr[start];
            start++;
        }
       start++;
    }
    return arr
}
console.log(moveZeroes([1,2,0,1,0,1,0,3,0,1]))