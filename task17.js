// Задача: Написать функцию duplicate которая вернет список повторяющихся email'ов
function duplicate(list = []) {
return Array.from(new Set(list));
}
const emails = [
'lyhxr@example.com',
'lyhxr@example.com',
'masha@example.com',
'fedya@example.com',
'katya@example.com',
'fedya@example.com',
'katya@example.com',
'lyhxr@example.com',
];
const val = duplicate(emails);
console.log(val); // [ 'lyhxr@example.com', 'fedya@example.com', 'katya@example.com'

