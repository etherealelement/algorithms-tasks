function delay(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function asyncEvery(array, predicate) {
    const results = await Promise.all(array.map(predicate));
    return results.every(item => item === true);
  }



const fetchData = (url, callback) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback(url)), 2000)
  })
}

console.log(fetchData("https://example.com/data", ));