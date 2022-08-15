// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// let aLenght = a.length;
// console.log(aLenght);
//
// let bLenght = b.length;
// console.log(bLenght);
//
// let cLenght = c.length;
// console.log(cLenght);
//**********************************************************************************************************************
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// let aHight = a.toUpperCase();
// console.log(aHight);
//
// let bHight = b.toUpperCase();
// console.log(bHight);
//
// let cHight = c.toUpperCase();
// console.log(cHight);
//**********************************************************************************************************************
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// let aLow = a.toLowerCase();
// console.log(aLow);
//
// let bLow = b.toLowerCase();
// console.log(bLow);
//
// let cLow = c.toLowerCase();
// console.log(cLow);
//**********************************************************************************************************************


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.substring(1,13))
//**********************************************************************************************************************


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// let split = str.split(' ');
// console.log(split);
//**********************************************************************************************************************
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let a = [10,8,-7,55,987,-1011,0,1050,0];
//
//     let mapA = a.map(function (){
//     mapA.   )
//     });
//     console.log(typeof mapA)
//**********************************************************************************************************************
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
//**********************************************************************************************************************
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//   let sort = coursesAndDurationArray.sort(function (first,second){
//  return first.monthDuration - second.monthDuration;
// })
// console.log(sort);
//
//   let filter = sort.filter(function (value){
//       return value.monthDuration > 5;
//   })
//       console.log(filter)

//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// let cards = [
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'
//     },    {
//         cardSuit: 'diamonds',
//         value: 'ace',
//         color: 'red'
//     },    {
//         cardSuit: null,
//         value: 'joker',
//         color: 'red'
//     },    {
//         cardSuit: null,
//         value: 'joker',
//         color: 'black'
//     },    {
//         cardSuit: 'heart',
//         value: '6',
//         color: 'red'
//     },    {
//         cardSuit: 'diamonds',
//         value: '6',
//         color: 'red'
//     },    {
//         cardSuit: '7',
//         value: 'heart',
//         color: 'red'
//     },    {
//         cardSuit: '7',
//         value: 'diamonds',
//         color: 'red'
//     },    {
//         cardSuit: '8',
//         value: 'heart',
//         color: 'red'
//     },    {
//         cardSuit: '8',
//         value: 'diamonds',
//         color: 'red'
//     },    {
//         cardSuit: '9',
//         value: 'heart',
//         color: 'red'
//     },    {
//         cardSuit: '9',
//         value: 'diamonds',
//         color: 'red'
//     },    {
//         cardSuit: '10',
//         value: 'heart',
//         color: 'red'
//     },    {
//         cardSuit: '10',
//         value: 'diamonds',
//         color: 'red'
//     },    {
//         cardSuit: 'jack',
//         value: 'heart',
//         color: 'red'
//     },    {
//         cardSuit: 'jack',
//         value: 'diamonds',
//         color: 'red'
//     },    {
//         cardSuit: 'queen',
//         value: 'heart',
//         color: 'red'
//     },    {
//         cardSuit: 'queen',
//         value: 'diamonds',
//         color: 'red'
//     },    {
//         cardSuit: 'king',
//         value: 'heart',
//         color: 'red'
//     },    {
//         cardSuit: 'king',
//         value: 'diamonds',
//         color: 'red'
//     },    {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'black'
//     },    {
//         cardSuit: 'club',
//         value: '6',
//         color: 'black'
//     },    {
//         cardSuit: 'spade',
//         value: '7',
//         color: 'black'
//     },    {
//         cardSuit: 'club',
//         value: '7',
//         color: 'black'
//     },    {
//         cardSuit: 'spade',
//         value: '8',
//         color: 'black'
//     },    {
//         cardSuit: 'club',
//         value: '8',
//         color: 'black'
//     },    {
//         cardSuit: 'spade',
//         value: '9',
//         color: 'black'
//     },    {
//         cardSuit: 'club',
//         value: '9',
//         color: 'black'
//     },    {
//         cardSuit: 'spade',
//         value: '10',
//         color: 'black'
//     },    {
//         cardSuit: 'club',
//         value: '10',
//         color: 'black'
//     },    {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black'
//     },    {
//         cardSuit: 'club',
//         value: 'jack',
//         color: 'black'
//     },    {
//         cardSuit: 'spade',
//         value: 'queen',
//         color: 'black'
//     },    {
//         cardSuit: 'club',
//         value: 'queen',
//         color: 'black'
//     },    {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black'
//     },    {
//         cardSuit: 'club',
//         value: 'king',
//         color: 'black'
//     },    {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'
//     },    {
//         cardSuit: 'club',
//         value: 'ace',
//         color: 'black'
//     }
// ];
// - знайти піковий туз
// let sortMoreThanFive = function(elementOfArray) {
//     if (elementOfArray.value === 'ace' && elementOfArray.cardSuit === 'spade')   {
//         console.log(elementOfArray)
//     }
// }
// cards.forEach(sortMoreThanFive)
// let sortMoreThanFive = function(elementOfArray) {
//     if (elementOfArray.value === '6')   {
//         console.log(elementOfArray)
//     }
// }
// cards.forEach(sortMoreThanFive)


// - всі шістки
// let sortMoreThanFive = function(elementOfArray) {
//     if (elementOfArray.value === '6')   {
//         console.log(elementOfArray)
//     }
// }
// cards.forEach(sortMoreThanFive)

// - всі червоні карти
// let sortMoreThanFive = function(elementOfArray) {
//     if (elementOfArray.color === 'red')   {
//         console.log(elementOfArray)
//     }
//
// }
// cards.forEach(sortMoreThanFive)

// - всі буби
// let sortMoreThanFive = function(elementOfArray) {
//     if (elementOfArray.cardSuit === 'diamonds')   {
//         console.log(elementOfArray)
//     }
//
// }
// cards.forEach(sortMoreThanFive)


// всі трефи від 9 та більше
// let sortMoreThanFive = function(elementOfArray) {
//     if (elementOfArray.value === 'ace' && elementOfArray.cardSuit === 'spade')   {
//         console.log(elementOfArray)
//     }
// }
// cards.forEach(sortMoreThanFive)
// let sortMoreThanFive = function(elementOfArray) {
//     if (elementOfArray.cardSuit === 'spade' && elementOfArray.value === '9')   {
//         console.log(elementOfArray)
//     }
//
// }
// cards.forEach(sortMoreThanFive)

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }