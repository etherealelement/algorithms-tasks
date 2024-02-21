var compose = function(functions) {
  if (functions.length === 0) {
    return function(x){
      return x;
    }
  } 
  
  
  const res = [];

  return function(x) {
      let result = x;
      for(let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);        
      }
      return result;
  }
};

console.log(compose([x => x + 1, x => x * x, x => 2 * x]));