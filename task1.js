/*
необходимо реализовать функцию сортировочного центра,
которая на вход принимает какой-то вес посылок и отправляет их самым оптимальным транспортом,
под оптимальностью мы понимаем, что транспорт едет полностью загруженный, минимальное количество раз.
У каждого транспорта есть грузоподъемность, которая записана в переменной transportsDefault.
*/

const transportsDefault = [
    5000, // Поезд
    2000, // Грузовик
    1000, // Фургон
    100, // Легковой автомобиль
    10, // Почтальон
];

const transSort = (weight, transports = transportsDefault) => {
    const res = {};

    transports.forEach(item => {
        const count = Math.floor(weight / item);
        weight = weight - count * item
        console.log(weight);
        res[item] = count;
    })
    return res;
};

console.log(transSort(10410)) // { 5000: 2, 2000: 0, 1000: 0, 100: 4, 10: 1 }