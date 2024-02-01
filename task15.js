function doSomthing(array, index) {
  array[index].name = 'Fedya';
  }
  const people = [{
  id: 1,
  name: 'Vasya',
  }, {
  id: 2,
  name: 'Petya'
  }];
  const person = people[0];
  person.name = 'Dasha';
  doSomthing(people, 0);
  console.log(person);
  console.log(people);
  
// {id: 1, name: "Fedya"}  [{id: 1, name: "Fedya"}, {id: 2, name: "Petya"}]