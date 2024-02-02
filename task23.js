//Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min.

const numbers = [5, 3, 9, 1, 6, 8, 2, 4, 7];

const findMaxAndMin = (data = numbers) => {
  let max = data[0];
  let min = data[0];

  data.forEach(item => {
    if (item > max) {
      max = item
    }
    if (item < min) {
      min = item
    }
  })

  return {max,min}
}

console.log(findMaxAndMin());
