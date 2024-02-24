const isValid = (s = "()[]{}") => {
    const stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (isOpenBracket(char)) {
            stack.push(char);
        } else if (stack.pop() !== pairs[char]) {
            return false
        }

    }

    function  isOpenBracket(char) {
        return char === '(' || char === '{' || char === '['
    }
    return stack.length === 0;
}

console.log(isValid())