function chunkPromiseAll(promises, chunkSize) {
  // Проверка на валидность входных данных
  if (!Array.isArray(promises) || typeof chunkSize !== 'number' || chunkSize <= 0) {
    return Promise.reject(new Error('Invalid input'));
  }

  // Функция для обработки чанка
  function processChunk(chunk) {
    return Promise.all(chunk.map(promise => Promise.resolve(promise).then(value => value)));
  }

  // Разделение массива на чанки
  const chunks = [];
  for (let i = 0; i < promises.length; i += chunkSize) {
    chunks.push(promises.slice(i, i + chunkSize));
  }

  // Обработка каждого чанка
  const results = [];
  return chunks.reduce((promiseChain, chunk) => {
    return promiseChain.then(() => {
      return processChunk(chunk).then(chunkResults => {
        results.push(...chunkResults);
      });
    });
  }, Promise.resolve()).then(() => results);
}

// Пример использования
const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4),
  Promise.resolve(5)
];

chunkPromiseAll(promises, 2)
  .then(results => {
    console.log(results); // Вывод: [1, 2, 3, 4, 5]
  })
  .catch(error => {
    console.error(error);
  });