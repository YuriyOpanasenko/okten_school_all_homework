// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// console.log (a.length);
// console.log (b.length);
// console.log (c.length);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// console.log (a.toUpperCase());
// console.log (b.toUpperCase());
// console.log (c.toUpperCase());


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// let str = ' dirty string   ';
// let b = str.trim();
// console.log(b);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// let str = 'Ревуть воли як ясла повні';
//
// function stringToArray(str1) {
//
//     return str1.split(" ");
// }
//
// console.log(stringToArray(str));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// arr = [10,8,-7,55,987,-1011,0,1050,0];
//
// let a = arr.map(value => value.toString());
// console.log(a);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// - створити функцію sortNums(nums, direction), яка приймає масив чисел, та сортує його від більшого до меншого,
//   або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// let nums = [11, 21, 3];
//
// function sortNums(nums, direction) {
//     if (direction === 'descending') {
//         nums.sort(
//             (a, b) => {
//                 if (a > b) return -1;
//                 if (a < b) return 1;
//                 return 0;
//             }
//         )
//     }
//     if (direction === 'ascending') {
//         nums.sort(
//             (a, b) => {
//                 if (a > b) return 1;
//                 if (a < b) return -1;
//                 return 0;
//             }
//         )
//     }
// }
//
// sortNums(nums, 'ascending');
// let rez = nums.sort(sortNums);
// console.log(rez);

// function sortNums(a, b) {
//     if (a > b) return -1;
//     if (a < b) return 1;
//     // if (a > b) return 1;
//     // if (a < b) return -1;
//     return 0;
// }
//
// let a = nums.sort(sortNums);
// console.log(a);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let sortCourses = (a1, a2) => {
//     if (a1.monthDuration > a2.monthDuration) {
//         return -1;
//     }
//     if (a1.monthDuration < a2.monthDuration) {
//         return 1;
//     }
//     return 0;
// };
// let a = coursesAndDurationArray.sort(sortCourses)
// console.log(a);

// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let a = coursesAndDurationArray.filter(value => value.monthDuration > 5)
// console.log(a)

// ***************************************************************************************************

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs', ''
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//deckMaps
let cardSuit = ['spade', 'diamond','heart', 'clubs'];
let value = ['6', '7', '8', '9', '10', 'ace','jack','queen','king','joker'];
let color = ['red','black'];



// ***************************************************************************************************

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }