const fetchUrl = ( url)=> { console.log(fetching); }

const debounce = (callback,timeout)=>{
  let timer; 

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    },timeout)
  }
}

const fetching = debounce(fetchUrl, 500)

fetching(1) 




