const searchMatrix = function(matrix, target) {
    if (matrix.length <= 0) return false;
    const clearArr = matrix.flat();

    for (let i = 0; i < clearArr.length; i++) {
        if (clearArr[i] === target) return true
    }
    return false

};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))