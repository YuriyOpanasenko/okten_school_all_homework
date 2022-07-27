// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let serials = ["THE BOYS", "Arcane", "Star Trek", "Friends", "Rick and Morty", "Supernatural", "The Big Bang Theory", "Battlestar Galactica", "How I Met Your Mother", "Merlin"];
console.log(serials);
for (let i = 0; i < serials.length; i++) {
    console.log(serials[i]);
}

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
book_1['authors'] = ['J. K. Rowling', 56];
book_2['authors'] = ['Miguel de Cervantes', 68];
book_3['authors'] = ['William H. McRaven', 66];
console.log(book_1);
console.log(book_2);
console.log(book_3);

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
for (let i = 0; i < user.length; i++) {
     console.log(user[i].password);
}





