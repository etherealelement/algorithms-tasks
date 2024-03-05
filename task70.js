const validBrackets = (brackets) => {
    const stack = [];
    const objParentheses = {
        "{" : "}",
        "(" : ")",
        "[" : "]",
    }

    for (let char of brackets) {
        if (Object.keys(objParentheses).includes(char)) stack.push(char);
        else if (objParentheses[stack.pop()] !== char) return false;
    }
    return stack.length === 0;
}

console.log(validBrackets("()()}}}"))