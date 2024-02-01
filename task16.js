//Задача: Что выведет в консоль, почему?
// const object = {
//  age: 9,
//  getValue() {
//  return this.age;
//  },
//  getAge: () =&gt; {
//  return this.age;
//  },
//  };
//  console.log(object.getValue());
//  console.log(object.getAge());
  

const object = {
age: 9,
getValue() {
return this.age;
},
getAge: () => {
return this.age;
},
};
console.log(object.getValue());
console.log(object.getAge());

// 9, undefined
