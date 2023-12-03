const someString = "some-string-awesome";

const transformString = (str) => Array.from(str.replaceAll("-", "  "))

console.log(transformString(someString));