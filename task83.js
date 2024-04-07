let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = (obj) => Object.entries(obj).reduce((acc,item,index) => acc + item[1], 0)

console.log(sumSalaries(salaries));