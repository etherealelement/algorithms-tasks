function isObject(input) {
  return typeof input === 'object' && input !== null && !Array.isArray(input)
}

const obj = { a: 1, b: 2 };
const array = [1, 2, 3];
const nullValue = null;
const number = 123;
const string = 'Hello';

console.log(isPlainObject(obj)); // true
console.log(isPlainObject(array)); // false
console.log(isPlainObject(nullValue)); // false
console.log(isPlainObject(number)); // false
console.log(isPlainObject(string)); // false