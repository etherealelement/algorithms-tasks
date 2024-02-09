
const group = (data = [
{ group: 1, name: 'a' },
{ group: 1, name: 'b' },
{ group: 2, name: 'c' },
]) => {
  const map = {}

  data.forEach(item => {
    if(map[item.group]) {
      map[item.group] = [...map[item.group], item]
    } else {
      map[item.group] = [item];
    }
  })
  return map
}

console.log(group());

