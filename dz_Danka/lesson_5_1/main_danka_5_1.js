// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//    - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function Ploscha4Kutnik(a,b) {
//     let res = 2*(a+b);
//     return res
// }
// console.log(Ploscha4Kutnik(20,30))


// ---------------------------------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function ploschaKola(r) {
//     let res = 3.14 * r * r;
//
//     return res
// }
//
// console.log(ploschaKola(5))


// ---------------------------------------------------------------------------------------------------------------------


//    - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function PloschaCilindra(r,h) {
//     let res = 2*3.14*r*r+2*3.14*r*h;
//     return res;
// }
// console.log(PloschaCilindra(5,4))


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// - створити функцію яка приймає масив та виводить кожен його елемент

//     let users = [
//         {name: 'sam',
//         age:23,
//         family:false
//         }
//     ]
//     function arrayPrint(array){
//         for (let user of users){
//             console.log(user);
//         }
//     }
// arrayPrint(users);


// ---------------------------------------------------------------------------------------------------------------------

//    - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function textWriter(arguments) {
//         document.write(arguments);
// }
// textWriter('<div><h1>Hello world!</h1></div>')


// ---------------------------------------------------------------------------------------------------------------------


//    - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//     function LiInUlWriter(arguments){
//         document.write(`<ul>
// <li>${arguments}</li>
// <li>${arguments}</li>
// <li>${arguments}</li>
// </ul>`)
//     }
//
//     LiInUlWriter('Hello')


// ---------------------------------------------------------------------------------------------------------------------


//    - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function LiInUlWriter(arguments, ul) {
//     for (let i = 0; i < ul; i++) {
//         document.write(`<ul>
// <li>${arguments}</li>
// </ul>`)
//     }
// }
//
// LiInUlWriter('Hello', 3)


// ---------------------------------------------------------------------------------------------------------------------

//    - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1, 2, 3, "home", true, false];
// function arrayItems() {
//     console.log(arguments);
// }
// arrayItems(null,true,undefined,0)

// ---------------------------------------------------------------------------------------------------------------------


//    - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//    Для кожного об'єкту окремий блок.


// Це не знаю як робить У мене object Object з'являється
// let gg = [
//     {id: '4523465', name: 'AAA'},
//     {id: '7634634', name: 'BBB', age: 34, 'kids': 'no'},
//     {id: '5674646', name: 'CCC', age: 25},
//     {id: '2345345', name: 'DDD', age: 20},
//     {id: '3534534', name: 'EEE', age: 31}
// ]
//
//
// function documentWriter(arrays) {
//     for (const item of arrays) {
//         document.write('<div>')
//         const keys = Object.keys(item);
//         console.log(keys)
//         for (const key of keys) {
//             document.write(`<span>${key} -</span><strong> ${item[key]}</strong>&nbsp;&nbsp;&nbsp;`)
//         }
//         document.write('</div>')
//         // document.write(`<div>${item.id}</div> <div>${item.name}</div> <div>${item.age}</div>  `);
//     }
// }
//
//
// documentWriter(gg);


//    - створити функцію яка повертає найменьше число з масиву

//


// let array = [87686, 7867, 68767, 76786];
//
// function minNumber() {
//     let res = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (res > array[i]) {
//             res = array[i];
//         }
//
//     }
//     document.write(res);
//
// }
//
// minNumber(array);


//    - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let array = [1, 2, 3, 4];
// function sumOfNumbers(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         res = res + arr[i];
//     }
// return res;
// }
// let a = sumOfNumbers(array);
//
// console.log(a);












