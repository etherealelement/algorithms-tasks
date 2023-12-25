const debounce = (fn, t) => {
  let timeout;
  return function (...args) {
    const fnCall = () => {fn(args)}
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, t)
  } 
}