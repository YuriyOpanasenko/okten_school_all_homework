// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calculationAreaRectangle(a, b) {
    return console.log(2 * (a + b));
}

calculationAreaRectangle(4, 9);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calculatingCircleArea(r) {
//     return (Math.PI * (r * r));
// }
//
// let result = calculatingCircleArea(52);
// console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
// Площа повної поверхні циліндра дорівнює:
//     S(повн.)=2S(осн.)+S(біч.)= 2πR2 + 2πRH

// function areaFullCylinderSurface(h, r) {
//     return ((2 * Math.PI * (r * r)) + (2 * Math.PI * r * h));
// }
//
// let result = areaFullCylinderSurface(115, 85);
// console.log(result);


// - створити функцію яка приймає масив та виводить кожен його елемент

// let fruit = ["Apple", "Orange", "Pear", "Lemon"];
// function logAllArrayElement() {
//     for (let element of fruit) {
//         console.log(element);
//     }
//
// }
// logAllArrayElement();

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraphPlusText(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraphPlusText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function createUlPlusThreeLi(firstUl, elementLi, lastUl) {
//     document.write(firstUl);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${elementLi}</li>`)
//     }
//     document.write(lastUl);
// }
//
// createUlPlusThreeLi(`<ul>`, 'Lorem ipsum dolor sit amet, consectetur adipisicing.', `</ul>`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulAndThreeLi(firstUl, numberLi, elementLi, lastUl) {
//     document.write(firstUl);
//         for (let i = 0; i < numberLi; i++) {
//         document.write(`<li>${elementLi}</li>`)
//     }
//     document.write(lastUl);
// }
// ulAndThreeLi(`<ul>`, 10,'Lorem ipsum dolor sit amet, consectetur adipisicing.', `</ul>`);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [125, 878, "First", 'apple', true, false];
//
//
// function buildListArray(element) {
//     document.write(`<ol>`)
//     for(let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// buildListArray();


// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//     Для кожного об'єкту окремий блок.

// let users = [
//     {id: '4523465', name: 'AAA', age: 43},
//     {id: '7634634', name: 'BBB', age: 34},
//     {id: '5674646', name: 'CCC', age: 25},
//     {id: '2345345', name: 'DDD', age: 20},
//     {id: '3534534', name: 'EEE', age: 31}
// ];
//
// function acceptsArrayObjects (arr) {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>id: ${arr[i].id}   name: ${arr[i].name}  age:${arr[i].age}</li>`);
//     }
//         document.write(`</ul>`);
//
// }
// acceptsArrayObjects(users);


// - створити функцію яка повертає найменьше число з масиву

// let numbers = [1111, 222, 2, 36, 333, 55];
//
// function smallestNumber(allNumbersArr) {
//     let small = allNumbersArr[0];
//     for (let i = 0; i < allNumbersArr.length ; i++) {
//         if (small >= allNumbersArr[i]){
//             small = allNumbersArr[i];
//         }
//     }
//     return console.log(small);
// }
//
// smallestNumber(numbers);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numbers = [1, 2, 3, 4, 5];
//
// function multiplyAll (numberArr) {
//     let result = numberArr[0];
//     for (let i = 1; i < numberArr.length ; i++){
//         if (numberArr[i] > 0) {
//             result = result + numberArr[i];
//         }
//     }
//     return console.log(result);
// }
// multiplyAll(numbers);





