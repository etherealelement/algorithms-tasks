const isValid = s => {

    const obj = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    const stack = [];

    for (const element of s) {
        if (isOpenedBrackets(element)) {
            stack.push(element);
        }else if (obj[element] !== stack.pop()) {
            return false
        }

    }


    function isOpenedBrackets(ch) {
        return ["(", "[", "{"].includes(ch)
    }

    return true;
}



console.log(isValid('()[]{}'))