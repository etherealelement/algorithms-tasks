var evalRPN = function (tokens) {
	const res = [];

	for (let i = 0; i < tokens.length; i++) {
		let x = res.length;

		let a = 0;

		if (tokens[i] == '+') {
			a = parseInt(res[x - 2]) + parseInt(res[x - 1]);
			res.pop(), res.pop();
			res.push(a);
		} else if (tokens[i] == '-') {
			a = parseInt(res[x - 2]) - parseInt(res[x - 1]);
			res.pop(), res.pop();
			res.push(a);
		} else if (tokens[i] == '*') {
			a = parseInt(res[x - 2]) * parseInt(res[x - 1]);
			res.pop(), res.pop();
			res.push(a);
		} else if (tokens[i] == '/') {
			if (parseInt(res[x - 2]) / parseInt(res[x - 1]) > 0)
				a = Math.floor(parseInt(res[x - 2]) / parseInt(res[x - 1]));
			else a = Math.ceil(parseInt(res[x - 2]) / parseInt(res[x - 1]));
			res.pop(), res.pop();
			res.push(a);
		} else {
			res.push(tokens[i]);
		}
	}
	return res[0];
};

console.log(evalRPN(['2', '1', '+', '3', '*']));
