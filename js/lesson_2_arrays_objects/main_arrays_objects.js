// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let serials = ["THE BOYS", "Arcane", "Star Trek", "Friends", "Rick and Morty", "Supernatural", "The Big Bang Theory", 12345, true, false];
console.log(serials);
// for (let i = 0; i < serials.length; i++) {
//     console.log(serials[i]);
// }
console.log(serials[0]);
console.log(serials[1]);
console.log(serials[2]);
console.log(serials[3]);
console.log(serials[4]);
console.log(serials[5]);
console.log(serials[6]);
console.log(serials[7]);
console.log(serials[8]);
console.log(serials[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book_1 = {
    title: 'Harry Potter',
    pageCount: 452,
    genre: 'Fantasy',
}
let book_2 = {
    title: 'Don Kihot',
    pageCount: 529,
    genre: "Roman's",
}
let book_3 = {
    title: 'Make Your Bed',
    pageCount: 159,
    genre: 'Self development',
}

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// //     Поле "автори" - масив. Кожен автор має поля name, age
let book_4 = {
    title: 'Harry Potter',
    pageCount: 452,
    genre: 'Fantasy',
    authors: [{name: 'J. K. Rowling', age: 56}],
}
let book_5 = {
    title: 'Don Kihot',
    pageCount: 529,
    genre: "Roman's",
    authors: [{name: 'Miguel de Cervantes', age: 68}],
}
let book_6 = {
    title: 'Make Your Bed',
    pageCount: 159,
    genre: 'Self development',
    authors: [{name: 'William H. McRaven', age: 66}],
}
console.log(book_4);
console.log(book_5);
console.log(book_6);


// - Створити масив з 10 об'єктами які описують сутніcть "користувач". Поля: name, username,password.' +
// 'Вивести в консоль пароль кожного користувача

let user = [
    {name: 'Yaroslav', username: 'Mudryi', password: 'HYT*&tt'},
    {name: 'Volodymyr', username: 'Velykyi', password: 'FCRE^%$'},
    {name: 'Olha', username: 'Kniahyhia', password: 'try*&tt'},
    {name: 'Kyi', username: 'Starshyi', password: 'Hwef67ythgt'},
    {name: 'Shchek', username: 'Serednii', password: 'HYT*fwef&tt'},
    {name: 'Hhoryv', username: 'Molodshyi', password: 'thergegr'},
    {name: 'Bravlyn', username: 'Zavoiovnyk_Krymu', password: 'HYT*&tt'},
    {name: 'Askold', username: 'Haskuldr', password: 'Hefwef&tt'},
    {name: 'Dir', username: 'Mozhlyvo_vin_i_ye_Askold', password: 'HY65h6h&tt'},
    {name: 'Sviatoslav', username: 'Ihorovych', password: 'H34trbgst'},
]
// for (let i = 0; i < user.length; i++) {
//      console.log(user[i].password);
// }
console.log([user[0].password]);
console.log([user[1].password]);
console.log([user[2].password]);
console.log([user[3].password]);
console.log([user[4].password]);
console.log([user[5].password]);
console.log([user[6].password]);
console.log([user[7].password]);
console.log([user[8].password]);
console.log([user[9].password]);






