var promiseAll =  async function(functions) {
    return await new Promise((resolve, reject) => {
      let arr = Array(functions.length);
      let waitingFor = functions.length;

      for (let i = 0; i < functions.length; i++) {
        functions[i]().then((result) => {
          arr[i] = result;[]
          if(--waitingFor === 0) {
            resolve(arr);
          }
        }).catch(reject)
      }
    })
};

console.log(promiseAll([() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))]));