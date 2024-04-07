 function pow(x,n) {
    if (n === 1) {
      return x
    } else {
      return x * pow(x, n - 1);
    }
 } 


function sumTo(n) {
  if (n === 1) {
    return n;
  }else {
    return n + sumTo(n - 1);
  }
}
console.log(sumTo(100));

function sumToCicle(n) {
  let sum = 0;

  for (let i  = 1; i <= n; i++) {
    sum += i
  }
  return sum
}
console.log(sumToCicle(100))

function factorial(n) {
  if (n === 1) {
    return n
  } else {
    return n * factorial(n - 1)
  }
}


function fib(n) {
  if (n === 1 || n === 2) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}
console.log(fib(3));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  console.log(list.value)
  if (list.next) {
    printList(list.next)
  }
}
console.log(printList(list));