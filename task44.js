const list = (data = [{id: 1, name: "Vasya"}, {id: 2, name: "Petya"}]) => {
  return data.map(item => item.name).join("")
}

console.log(list());

