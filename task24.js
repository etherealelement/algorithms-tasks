// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход

const people = [
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York'
  },
  {
    name: 'Johan',
    city: 'Berlin'
  },
]



// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

const groupByCity = (array = people) => {
  const cities = {};

  array.forEach(obj => {
    const {city, name} = obj;
    if (cities[city]) {
      cities[city] = [cities[city], name]
    } else {
      cities[city] = name
    }

  })

  return cities
}


console.log(groupByCity());