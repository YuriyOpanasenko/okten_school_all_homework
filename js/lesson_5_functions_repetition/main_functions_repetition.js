// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б ;


// function showResult(info) {
//     console.log(info);
// }
//
// let a = 234;
// let b = 2678;
//
// function determineAreaRectangle(sideA, sideB) {
//     let result = (sideA + sideB) * 2;
//     return result;
// }
//
// let area = determineAreaRectangle(a, b);
//
// showResult(area);

// - створити функцію яка обчислює та повертає площу кола з радіусом r ;
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r ;


// - створити функцію яка приймає масив та виводить кожен його елемент ;


// let arr = [1, 2, 3, 4, 5];
// function showArr(numbers) {
//     for (const number of numbers) {
//         console.log(number);
//     }
//
// }
//
// showArr(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент ;
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий ;
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) ;
// function listUlPlusLi(text, number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         const textElement = text[i];
//         document.write(`<li>${text} ${i + 1}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
//
// listUlPlusLi('Lorem ipsum dolor sit amet.', 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список ;


// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//     Для кожного об'єкту окремий блок ;
// let user = ['id', 'name', 'age'];
//
// function createList(arrElements) {
//     document.write(`<ul>`);
//     for (const arrElement of arrElements) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`);
//
// }
// createList(user);

// - створити функцію яка повертає найменьше число з масиву ;

// let arrNumbers = [12, 15, 10, 1, 2];
//
// function returnMinNumber(numbers) {
//     let firstNumber = numbers[0];
//     let rezult = '';
//     for (const number of numbers) {
//         if (firstNumber <= number) {
//             rezult = firstNumber;
//         } else {
//             rezult = number;
//         }
//     }
//     document.write(rezult);
// }
//
// returnMinNumber(arrNumbers);
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// //     Приклад [1,2,10]->13 ;




