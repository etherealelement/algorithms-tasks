Promise.resolve()
.then(() => {
  console.log('1 then');
  throw 'Oh no!';
})
.catch(reason => {
  console.error('1 catch');
})
.catch(reason => {
  console.error('2 catch');
})
.then(() =>{
  console.log('2 then');
});

var a = 10;

// 1 then 1catch 2 then