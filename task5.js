const input = [{expired: true, order: 4, value: "sdfsd"}, {expired: true, order: 2, value: "qwer"}, {expired: false, order: 1, value: "xyz1"}, {expired: false, order: 3, value: "abx2"}];

const getReverseSortedString = (data =  []) => Array.from(new Set(data.filter(item =>  item.expired !== false).sort((a,b) => a.order - b.order).map(item => item.value).join("").split("").reverse())).join("")


console.log(getReverseSortedString(input));