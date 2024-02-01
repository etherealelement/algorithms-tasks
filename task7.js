//Написать функцию list, которая принимает массив объектов с полем ‘name’ 
//и возвращает массив строк с содержанием поля name каждого из объектов в изначальном массиве.

console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]));

//return “Bart”, “Lisa”, “Maggie”

list([{name: 'Bart'}])

//return “Bart”

console.log(list([ ]));

//return 


function list(data = []) {
  return data.map(item => item.name)
}

