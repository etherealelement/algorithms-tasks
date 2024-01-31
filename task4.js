const fetchUrl = ( url)=> {
  console.log(`fetching ${url}`);
}

const debounce = (callback, delay = 500 ) => {
  let timeout; 

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args)
    },delay)
  }
 
}

const throttle = (callback, delay = 1000) => {
  let isPaused = false;
  return (...args) => {
    if(isPaused) return;

    callback(...args);
    isPaused = true;

    setTimeout(() => {
      isPaused = false;
    },delay)
  }
}

const fetching = debounce(fetchUrl, 500)

console.log(fetching(1));