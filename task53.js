var addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2])
    return  value1 + value2;
  };

console.log(addTwoPromises(new Promise(resolve => setTimeout(() => resolve(2), 20)), new Promise(resolve => setTimeout(() => resolve(5), 60))));