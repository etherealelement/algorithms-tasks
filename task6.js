  console.log('one')
setTimeout(function() {
	console.log('two');
    },)
Promise.resolve().then(function() {
	console.log('three');
    })

console.log('four');


// one, four, three,two