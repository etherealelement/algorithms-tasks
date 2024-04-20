function work(a, b) {
	alert(a + b);
}

work = spy(work);

function spt(fn) {
	wrapper.calls = [];
	function wrapper(...args) {
		wrapper.calls.push(args);
		return fn.apply(this, args);
	}
	return wrapper;
}

work(1, 2);
work(4, 5);

function slow(x) {
	console.log(`Called with ${x}`);
	return x;
}

function cachingDecorator(func) {
	let cache = new Map();

	return function (x) {
		if (cache.has(x)) {
			return cache.get(x);
		}

		let result = func(x);
		cache.set(x, result);
		return result;
	};
}

slow = cachingDecorator(slow);
