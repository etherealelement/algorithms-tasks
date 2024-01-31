function foo() {
  this.x = 10;
  return {
    x: 20,
    bar: () => {
      console.log(this.x); 
    },
    baz() {
      console.log(this.x);
    },
  };
}

const obj1 = foo();
obj1.bar(); //? undefined
obj1.baz(); //? 20

const obj2 = foo.call({ x: 30 });
obj2.bar(); //? 30
obj2.baz(); //? 20

