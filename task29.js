let words  = ["banana", "grapefruit", "grapefruit", 'banana', 'orange', 'orange', 'orange', 'orange', 'banana'];

function createWords(data = words) {
  let map = {};

  data.forEach(item => {
    if (map[item]) {
      map[item]++
    } else {
      map[item] = 1;
    }
  })

  return Object.entries(map).sort((a,b) => b[1] - a[1]).map(item => item[0]);
  
}

console.log(createWords());

// [banana, grapefruid, orange]
