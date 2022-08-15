// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let arr = ['hello world', 'lorem  ipsum', 'javascript is cool'];
// console.log(arr[0].length);
// console.log(arr[1].length);
// console.log(arr[2].length);
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement.length)
// }

// *********************************************************************************************************************

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement.toUpperCase());
// }


// *********************************************************************************************************************


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement.toLowerCase());
// }

// *********************************************************************************************************************


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';

// str = str.replaceAll(' ', '')
// str = str.replaceAll('str', ' str')
//
// str = str.trim();
// console.log(str);


// *********************************************************************************************************************


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); //['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// function stringToArray(arg) {
// let arr = str.split(' ');
//     return arr;
//
// }
// let b = stringToArray(str);
// console.log(b);


// *********************************************************************************************************************

// Рішення за допомогою метода.
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0]. за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// const res = [10,8,-7,55,987,-1011,0,1050,0].map(function (el) {
//     return el.toString();
// });
//
// console.log(res)


// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
//Пояснення від Олі.
// lib.js
// function callTransformerOnEachItem(items, transformer) {
//     const newItems = [];
//     for (let i = 0; i < items.length; i++) {
//         newItems[i] = transformer(items[i]);
//     }
//     return newItems;
// }
//
// // index.js
// function transformNumberToString(el) {
//     return el.toString();
// }
//
// const res = callTransformerOnEachItem([10, 8, -7, 55, 987, -1011, 0, 1050, 0], transformNumberToString);
//
// console.log(res);


// ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// *********************************************************************************************************************


// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
//
// function sor(a,b){
//     if(a>b) return 1;
//     if(a<b) return -1;
//     return 0;
// }
// nums.sort(sor);
// console.log(nums)


// *********************************************************************************************************************


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
//
// function sor(a, b) {
//     if (a.monthDuration > b.monthDuration) return 1;
//     if (a.monthDuration < b.monthDuration) return -1;
//     return 0;
// }
//
// coursesAndDurationArray.sort(sor);
// console.log(coursesAndDurationArray)
//
//
// let sortMoreThanFive = function(elementOfArray) {
//     if (elementOfArray.monthDuration > 5) {
//         console.log(elementOfArray)
//     }
// }
// coursesAndDurationArray.forEach(sortMoreThanFive)


// *********************************************************************************************************************


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всю бубну
// - всі хрести від 9 та більше
//
// let cards = [
//     {
//         "cardSuit": "spade",
//         "value": "6",
//         "color": "black"
//     },
//     {
//         "cardSuit": "spade",
//         "value": "7",
//         "color": "black"
//     },
//     {
//         "cardSuit": "spade",
//         "value": "8",
//         "color": "black"
//     },
//     {
//         "cardSuit": "spade",
//         "value": "9",
//         "color": "black"
//     },
//     {
//         "cardSuit": "spade",
//         "value": "10",
//         "color": "black"
//     },
//     {
//         "cardSuit": "spade",
//         "value": "jack",
//         "color": "black"
//     },
//     {
//         "cardSuit": "spade",
//         "value": "queen",
//         "color": "black"
//     },
//     {
//         "cardSuit": "spade",
//         "value": "king",
//         "color": "black"
//     },
//     {
//         "cardSuit": "spade",
//         "value": "ace",
//         "color": "black"
//     },
//     {
//         "cardSuit": "diamond",
//         "value": "6",
//         "color": "red"
//     },
//     {
//         "cardSuit": "diamond",
//         "value": "7",
//         "color": "red"
//     },
//     {
//         "cardSuit": "diamond",
//         "value": "8",
//         "color": "red"
//     },
//     {
//         "cardSuit": "diamond",
//         "value": "9",
//         "color": "red"
//     },
//     {
//         "cardSuit": "diamond",
//         "value": "10",
//         "color": "red"
//     },
//     {
//         "cardSuit": "diamond",
//         "value": "jack",
//         "color": "red"
//     },
//     {
//         "cardSuit": "diamond",
//         "value": "queen",
//         "color": "red"
//     },
//     {
//         "cardSuit": "diamond",
//         "value": "king",
//         "color": "red"
//     },
//     {
//         "cardSuit": "diamond",
//         "value": "ace",
//         "color": "red"
//     },
//     {
//         "cardSuit": "heart",
//         "value": "6",
//         "color": "red"
//     },
//     {
//         "cardSuit": "heart",
//         "value": "7",
//         "color": "red"
//     },
//     {
//         "cardSuit": "heart",
//         "value": "8",
//         "color": "red"
//     },
//     {
//         "cardSuit": "heart",
//         "value": "9",
//         "color": "red"
//     },
//     {
//         "cardSuit": "heart",
//         "value": "10",
//         "color": "red"
//     },
//     {
//         "cardSuit": "heart",
//         "value": "jack",
//         "color": "red"
//     },
//     {
//         "cardSuit": "heart",
//         "value": "queen",
//         "color": "red"
//     },
//     {
//         "cardSuit": "heart",
//         "value": "king",
//         "color": "red"
//     },
//     {
//         "cardSuit": "heart",
//         "value": "ace",
//         "color": "red"
//     },
//     {
//         "cardSuit": "clubs",
//         "value": "6",
//         "color": "black"
//     },
//     {
//         "cardSuit": "clubs",
//         "value": "7",
//         "color": "black"
//     },
//     {
//         "cardSuit": "clubs",
//         "value": "8",
//         "color": "black"
//     },
//     {
//         "cardSuit": "clubs",
//         "value": "9",
//         "color": "black"
//     },
//     {
//         "cardSuit": "clubs",
//         "value": "10",
//         "color": "black"
//     },
//     {
//         "cardSuit": "clubs",
//         "value": "jack",
//         "color": "black"
//     },
//     {
//         "cardSuit": "clubs",
//         "value": "queen",
//         "color": "black"
//     },
//     {
//         "cardSuit": "clubs",
//         "value": "king",
//         "color": "black"
//     },
//     {
//         "cardSuit": "clubs",
//         "value": "ace",
//         "color": "black"
//     },
//     {
//         "cardSuit": "joker",
//         "color": "black"
//     },
//     {
//         "cardSuit": "joker",
//         "color": "red"
//     }
// ];
//
// cards.forEach(lookingCardsProvided);
//
// function lookingCardsProvided(element) {
// if (element.cardSuit === 'spade' && element.value === 'ace') {
//     console.log(element);
// }
// if (element.value === '6') {
//     console.log(element);
// }
// if (element.color === 'red') {
//     console.log(element);
// }
// if (element.cardSuit === 'diamond') {
//     console.log(element);
// }

//     if (
//         element.cardSuit === 'clubs'
//         &&
//         (element.value > '9'
//         ||
//         element.value === "10")
//     ) {
//         console.log(element);
//     }
//
// }
// *********************************************************************************************************************
//
// let cards = [
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'
//     },
// ]
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
// let value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace', 'joker'];
// let color = ['red','black'];
// *********************************************************************************************************************


// *********************************************************************************************************************
// Зробив автомачиний створювач колоди без reduce
// let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
// let value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// let joker = ['joker'];
// let color = ['red', 'black'];
//
// function creatorCard() {
//     let deck = [];
//     let color = '';
//     for (let i = 0; i < cardSuit.length; i++) {
//         if (cardSuit[i] === 'diamond' || cardSuit[i] === 'heart') {
//             color = 'red';
//         } else {
//             color = 'black';
//         }
//
//         for (let j = 0; j < value.length; j++) {
//                 deck.push({
//                     cardSuit: cardSuit[i],
//                     value: value[j],
//                     color
//                 });
//
//         }
//     }
//     deck.push({
//         cardSuit: 'joker',
//         color: 'black'
//     },
//         {
//         cardSuit: 'joker',
//         color: 'red'
//         })
//     return deck;
// }
//
// let a = creatorCard();
// console.log(a);
// *********************************************************************************************************************

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cards = [
    {
        "cardSuit": "spade",
        "value": "6",
        "color": "black"
    },
    {
        "cardSuit": "spade",
        "value": "7",
        "color": "black"
    },
    {
        "cardSuit": "spade",
        "value": "8",
        "color": "black"
    },
    {
        "cardSuit": "spade",
        "value": "9",
        "color": "black"
    },
    {
        "cardSuit": "spade",
        "value": "10",
        "color": "black"
    },
    {
        "cardSuit": "spade",
        "value": "jack",
        "color": "black"
    },
    {
        "cardSuit": "spade",
        "value": "queen",
        "color": "black"
    },
    {
        "cardSuit": "spade",
        "value": "king",
        "color": "black"
    },
    {
        "cardSuit": "spade",
        "value": "ace",
        "color": "black"
    },
    {
        "cardSuit": "diamond",
        "value": "6",
        "color": "red"
    },
    {
        "cardSuit": "diamond",
        "value": "7",
        "color": "red"
    },
    {
        "cardSuit": "diamond",
        "value": "8",
        "color": "red"
    },
    {
        "cardSuit": "diamond",
        "value": "9",
        "color": "red"
    },
    {
        "cardSuit": "diamond",
        "value": "10",
        "color": "red"
    },
    {
        "cardSuit": "diamond",
        "value": "jack",
        "color": "red"
    },
    {
        "cardSuit": "diamond",
        "value": "queen",
        "color": "red"
    },
    {
        "cardSuit": "diamond",
        "value": "king",
        "color": "red"
    },
    {
        "cardSuit": "diamond",
        "value": "ace",
        "color": "red"
    },
    {
        "cardSuit": "heart",
        "value": "6",
        "color": "red"
    },
    {
        "cardSuit": "heart",
        "value": "7",
        "color": "red"
    },
    {
        "cardSuit": "heart",
        "value": "8",
        "color": "red"
    },
    {
        "cardSuit": "heart",
        "value": "9",
        "color": "red"
    },
    {
        "cardSuit": "heart",
        "value": "10",
        "color": "red"
    },
    {
        "cardSuit": "heart",
        "value": "jack",
        "color": "red"
    },
    {
        "cardSuit": "heart",
        "value": "queen",
        "color": "red"
    },
    {
        "cardSuit": "heart",
        "value": "king",
        "color": "red"
    },
    {
        "cardSuit": "heart",
        "value": "ace",
        "color": "red"
    },
    {
        "cardSuit": "clubs",
        "value": "6",
        "color": "black"
    },
    {
        "cardSuit": "clubs",
        "value": "7",
        "color": "black"
    },
    {
        "cardSuit": "clubs",
        "value": "8",
        "color": "black"
    },
    {
        "cardSuit": "clubs",
        "value": "9",
        "color": "black"
    },
    {
        "cardSuit": "clubs",
        "value": "10",
        "color": "black"
    },
    {
        "cardSuit": "clubs",
        "value": "jack",
        "color": "black"
    },
    {
        "cardSuit": "clubs",
        "value": "queen",
        "color": "black"
    },
    {
        "cardSuit": "clubs",
        "value": "king",
        "color": "black"
    },
    {
        "cardSuit": "clubs",
        "value": "ace",
        "color": "black"
    },
    {
        "cardSuit": "joker",
        "color": "black"
    },
    {
        "cardSuit": "joker",
        "color": "red"
    }
];

let masti = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spade.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamond.push(card);
    }else if (card.cardSuit === 'heart') {
        accumulator.heart.push(card);
    }else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spade: [], diamond: [], heart: [], clubs: []});
console.log(masti);





