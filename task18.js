function logTest() {
  let start = Date.now();
  let now = start;
  let a;

  setTimeout(() => {
    if (a == null) a = '1';
    console.log(`a1 = ${a}`);
  }, 1000)

  while(now - start < 3000) {
    now = Date.now();
  }
  a = '2';

  console.log(`a2 = ${a}`);
}
logTest()

// a2 = 2 a1 = 2