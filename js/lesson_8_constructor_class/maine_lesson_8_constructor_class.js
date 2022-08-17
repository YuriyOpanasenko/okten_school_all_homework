//OK **************************************************************************************************************** OK
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
//
// let vasya = new User(542, 'Vasya', 'Vasylenko', 'vasya@gmail.com', '+380989989800');
// let myhaylo = new User(123, 'Myhaylo', 'Myhaylenko', 'myhaylo@gmail.com', '+380989989801');
// let oleg = new User(983, 'Oleg', 'Olegiv', 'oleg@gmail.com', '+380989989802');
// let yura = new User(945, 'Yura', 'Yuryiv', 'yura@gmail.com', '+380989989803');
// let olya = new User(133, 'Olha', 'Oljenko', 'olha@gmail.com', '+380989989804');
// let max = new User(945, 'Max', 'Maxyundra', 'max@gmail.com', '+380989989805');
// let vika = new User(384, 'Vika', 'Vikenko', 'vika@gmail.com', '+380989989806');
// let jenya = new User(734, 'Jenya', 'Jenyuk', 'jenya@gmail.com', '+380989989807');
// let grysha = new User(822, 'Grysha', 'Gryshyk', 'grysha@gmail.com', '+380989989808');
// let yar = new User(844, 'Yar', 'Yarko', 'yar@gmail.com', '+380989989809');
// let users = [vasya, myhaylo, oleg, yura, olya, max, vika, jenya, grysha, yar];
//console.log(users);
//+++++************************************************************************************************************** OK


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let res = users.filter(user => user.id % 2 === 0);
// console.log(res);


//******************************************************************************************************************* OK
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function sor(a, b) {
//     if (a.id > b.id) return 1;
//     if (a.id < b.id) return -1;
//     return 0;
// }
//
// let res = users.sort(sor);
//
// console.log(res);


//******************************************************************************************************************* OK


// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let vasya = new Client(542, 'Vasya', 'Vasylenko', 'vasya@gmail.com', '+380989989800', ['banana']);
// let myhaylo = new Client(123, 'Myhaylo', 'Myhaylenko', 'myhaylo@gmail.com', '+380989989801', ['banana', 'pomegranate', 'blackberry']);
// let oleg = new Client(983, 'Oleg', 'Olegiv', 'oleg@gmail.com', '+380989989802', ['banana', 'nectarine', 'blackberry']);
// let yura = new Client(945, 'Yura', 'Yuryiv', 'yura@gmail.com', '+380989989803', ['grapefruit', 'watermelon', 'pomegranate', 'blackberry']);
// let olya = new Client(133, 'Olha', 'Oljenko', 'olha@gmail.com', '+380989989804', ['banana', 'nectarine', 'grapefruit', 'watermelon', 'pomegranate']);
// let max = new Client(945, 'Max', 'Maxyundra', 'max@gmail.com', '+380989989805', ['banana', 'nectarine']);
// let vika = new Client(384, 'Vika', 'Vikenko', 'vika@gmail.com', '+380989989806', ['banana', 'nectarine', 'grapefruit', 'watermelon',]);
// let jenya = new Client(734, 'Jenya', 'Jenyuk', 'jenya@gmail.com', '+380989989807', ['banana', 'nectarine', 'grapefruit', 'watermelon',]);
// let grysha = new Client(822, 'Grysha', 'Gryshyk', 'grysha@gmail.com', '+380989989808', ['banana', 'nectarine']);
// let yar = new Client(844, 'Yar', 'Yarko', 'yar@gmail.com', '+380989989809', ['banana', 'nectarine', 'grapefruit', 'watermelon', 'pomegranate', 'blackberry']);
//******************************************************************************************************************* OK
// створити пустий масив, наповнити його 10 об'єктами Client

// let clients = [vasya, myhaylo, oleg, yura, olya, max, vika, jenya, grysha, yar];
//******************************************************************************************************************* OK
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// function sor(a, b) {
//     if (a.order > b.order) return 1;
//     if (a.order < b.order) return -1;
//     return 0;
// }
//
// let res = clients.sort(sor);
//
// console.log(res);
//
//******************************************************************************************************************* OK
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна.

// function Car(model, manufacturer, year_of_release, maximum_speed, engine_volume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year_of_release = +year_of_release;
//     this.maximum_speed = +maximum_speed;
//     this.engine_volume = +engine_volume;
//   додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function (textUpMaxSpeed) {
//         console.log(`їдемо зі швидкістю ${textUpMaxSpeed} на годину`)
//     };
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//         console.log(`model - ${this.model}`);
//         console.log(`manufacturer - ${this.manufacturer}`);
//         console.log(`year_of_release - ${this.year_of_release}`);
//         console.log(`maximum_speed - ${this.maximum_speed}`);
//         console.log(`engine_volume - ${this.engine_volume}`);
//     }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maximum_speed = this.maximum_speed + newSpeed;
//     }
//  -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         this.year_of_release = newValue;
//     }
//
//
//
//  -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = function (driver) {
//         this.driver = driver;
//
//     }
// }
//
// let cars = new Car('WRX STI', 'Subaru', '2022', '240', '1.998')
// model - WRX STI
// manufacturer - Subaru
// console.log(cars);
// cars.drive(`${this.maximum_speed}`)
// cars.info();
// cars.increaseMaxSpeed(50);
// console.log(cars.maximum_speed);
// cars.changeYear(2020);
// console.log(cars.year_of_release);
// cars.addDriver({name: 'Yura', age: 43, exp: 17})
// console.log(cars.driver);
//**********************************************************************************************************************
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, ' +
// 'об'єм двигуна.
class Car {
    constructor(model, manufacturer, year_of_release, maximum_speed, engine_volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year_of_release = +year_of_release;
        this.maximum_speed = +maximum_speed;
        this.engine_volume = +engine_volume;
    }
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.maximum_speed} на годину`);
    }
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//         info() {
//         console.log(`model - ${this.model}`);
//         console.log(`manufacturer - ${this.manufacturer}`);
//         console.log(`year_of_release - ${this.year_of_release}`);
//         console.log(`maximum_speed - ${this.maximum_speed}`);
//         console.log(`engine_volume - ${this.engine_volume}`);
//     }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maximum_speed = this.maximum_speed + newSpeed;
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
        changeYear (newValue) {
        this.year_of_release = newValue;
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
        addDriver (driver) {
        this.driver = driver;

    }

}



let cars = new Car('WRX STI', 'Subaru', '2022', '240', '1.998');
// console.log(cars);
// cars.drive();
// cars.info();
cars.increaseMaxSpeed(55);
console.log(cars.maximum_speed);
cars.changeYear(2020);
console.log(cars.year_of_release);
cars.addDriver ({name: 'Yura', age: 43, exp: 17});
console.log(cars.driver);







//**********************************************************************************************************************
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку