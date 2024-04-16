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
