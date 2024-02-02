// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true
delete rabbit.jumps;

alert( rabbit.jumps ); // null
delete animal.jumps;

alert( rabbit.jumps ); // undefined


