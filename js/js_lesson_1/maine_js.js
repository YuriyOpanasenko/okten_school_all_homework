// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// let a = 'hello';
// console.log(a);
// alert(a);
// document.write(a);
// let b = 'owu';
// console.log(b);
// alert(b);
// document.write(b);
// let c = 'com';
// console.log(c);
// alert(c);
// document.write(c);
// let d = 'ua';
// console.log(d);
// alert(d);
// document.write(d);
// let e = 1;
// console.log(e);
// alert(e);
// document.write(e);
// let f = 10;
// console.log(f);
// alert(f);
// document.write(f);
// let g = -999;
// console.log(g);
// alert(g);
// document.write(g);
// let h = 123;
// console.log(h);
// alert(h);
// document.write(h);
// let i = 3.14;
// console.log(i);
// alert(i);
// document.write(i);
// let j = 2.7;
// console.log(j);
// alert(j);
// document.write(j);
// let k = 16;
// console.log(k);
// alert(k);
// document.write(k);
// let l = true;
// console.log(l);
// alert(l);
// document.write(l);
// let m = false;
// console.log(m);
// alert(m);
// document.write(m);

    // Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
    // З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації).

// let firstName = "Yurii ";
// let middleName = "Mykolaiovych ";
// let lastName = "Opanasenko";
// let person = firstName + middleName + lastName;
// alert(person);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль

// let firstName = prompt("Напишіть ваше ім'я", "Yurii");
// let middleName = prompt("Як вас звати по-батькові?", "Mykolaiovych");
// let age = prompt("Скільки вам років", 43);
// let all_information = "Вас звати" + " " + firstName + " " + middleName + ", " + `вам ${age} роки`;
// console.log(all_information);

// console.log(e);
// alert(e);
// document.write(e);

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;

[a, b, c, d, e, f, g, h, i, j, k, l, m,].forEach(showMessage);

function showMessage(data) {
        console.log(data);
        alert(data);
        document.write(data);
}








