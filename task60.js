function isObject(input) {
  return typeof input === 'object' && input !== null && !Array.isArray(input)
}


//input: { a: 2, b: 3};
//output: [['a', 2], ['b', 3]];

function transformObjectToArr(obj) {
  const result = [];

  for(let key in obj) { 
    result.push([key, obj[key]])
  }

  return result;
}

//Напишите функцию, которая поверхностно сравнивает два объекта.

function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(32))


// 


async function sendRequestWithToken(url, token, retries = 3) {
  // Проверка токена перед каждым запросом
  if (!token) {
    throw new Error('Token is required for the request.');
  }

  try {
    // Отправка запроса с токеном в заголовке
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    // Проверка статуса ответа
    if (!response.ok) {
      // Если ответ не успешный, проверяем код ошибки
      if (response.status === 401) {
        // Если код ошибки 401 (неавторизованный), обновляем токен и повторяем запрос
        const newToken = await refreshToken(); // Ваша функция для обновления токена
        return sendRequestWithToken(url, newToken, retries - 1);
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    }

    // Возвращаем результат запроса
    return await response.json();
  } catch (error) {
    // Если произошла ошибка, проверяем количество попыток
    if (retries > 0) {
      // Если есть попытки, повторяем запрос
      return sendRequestWithToken(url, token, retries - 1);
    } else {
      // Если попыток не осталось, выбрасываем ошибку
      throw error;
    }
  }
}

// Пример использования
const url = 'https://api.example.com/data';
const token = 'your_token_here';

sendRequestWithToken(url, token)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });