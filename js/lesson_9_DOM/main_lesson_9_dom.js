//*******************************************************************************************************************_OK
// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв ' +
//             'мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві' +
//             'молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі.' +
//             'Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони».' +
//             'Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний.' +
//             'Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Опис Марж кацапською',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Опис Ліз кацапською',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Опис Меґі кацапською',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//

// for (const simpson of simpsons) {
//     let member = '<div className="member">' + `<h1>${simpson.name}</h1>` + `<p>${simpson.surname}</p>` +
//         `<p>${simpson.age}</p>` + `<p>${simpson.info}</p>` + `<img src="${simpson.photo}" alt="">` + '</div>';
//
//     document.body.innerHTML += member;
//
// }
//
// - Проітерувати його, створивши для кожного об'єкту  масиву
//     <div class='member'>
//         - та наповнити його даними з об'єкту.
//
//         Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


//*******************************************************************************************************************_OK

// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'git',
//             'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'sass']
//     }
// ];
// for (const coursesArrayElement of coursesArray) {
//     let modules = '';
//     for (const newModule of coursesArrayElement.modules) {
//         modules =
//             modules + `<div class="modules border">${newModule}</div>`
//     }
//     let module =
//         `<div class="big">` +
//         `<h2 class="border"> ${coursesArrayElement.title}</h2>` +
//         `<div class="monthHour">` +
//         `<div class="month border">${coursesArrayElement.monthDuration}</div> ` +
//         `<div class="hour border">${coursesArrayElement.hourDuration}</div> ` +
//         `</div>` +
//         `<div class="allModulse">` +
//         modules +
//
//
//         `</div>` +
//         `</div>`
//
//     document.body.innerHTML += module;
// }


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png
//*******************************************************************************************************************_OK


//     - створити блок,
// let newBlock = document.createElement('div');
// document.body.appendChild(newBlock);

//     - додати йому класи wrap, collapse, alpha, beta
// newBlock.classList.add('wrap', 'collapse', 'alpha', 'beta');

// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// newBlock.innerText = 'Lorem ipsum dolor sit amet.';
// newBlock.style.backgroundColor = 'grey';
// newBlock.style.color = 'white';
// newBlock.style.padding = '10px';
// newBlock.style.marginBottom = '10px';
// newBlock.style.fontSize = '30px';
// newBlock.style.fontFamily = 'sans-serif';

// - додати цей блок в body.
//+
// - клонувати його повністю, та додати клон в body.
// let newBlock2 = newBlock.cloneNode(true)
// document.body.appendChild(newBlock2);
// newBlock2.style.fontSize = '20px';
// newBlock2.style.color = 'black';


//*******************************************************************************************************************_OK

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li,
// та додає його до блоку .menu
// Завдання робити через цикли.

// let menuList = ['Main','Products','About us','Contacts'];
// let menu = document.getElementsByClassName('menu');

// let menu = document.querySelector('.menu');
// menu = ['Main','Products','About us','Contacts'];
// document.body.innerText = 'Lorem ipsum dolor sit amet.';

// let menu = document.querySelector('.menu');
// let menuList = ['Main', 'Products', 'About us', 'Contacts'];
// for (const string of menuList) {
//     let li = document.createElement('li');
//     li.innerText = `${string}`;
//     menu.appendChild(li);
// }

//*******************************************************************************************************************_OK
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let newDiv = document.createElement('div');
//     document.body.appendChild(newDiv);
//     newDiv.innerText = element.title + " " + element.monthDuration;
// }

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


//**********************************************************************************************************************
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//      Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
//
//
//     let oneCourse = document.createElement('div');
//     oneCourse.classList.add('item');
//     document.body.appendChild(oneCourse);
//     let head = document.createElement('h1');
//     head.classList.add('heading');
//     head.innerText = element.title;
//     oneCourse.appendChild(head);
//     let description = document.createElement('p');
//     description.classList.add('head');
//     description.innerText = element.monthDuration;
//     oneCourse.appendChild(description);
//
//     head.style.color = 'blue';
//     head.style.fontFamily = 'sans-serif';
//
//     description.style.color = 'blue';
//     description.style.fontFamily = 'sans-serif';
//     description.style.fontSize = '22px';
//
//
//     oneCourse.style.borderStyle = 'solid';
//     oneCourse.style.borderColor = 'blue';
//     oneCourse.style.padding = '5px';
//     oneCourse.style.paddingLeft = '25px';
//     oneCourse.style.marginBottom = '16px';
// }
//
//
//**********************************************************************************************************************
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так,
//     щоб при натисканні на кнопку зникав елемент з id="text".

let newBlock = document.createElement('div');
document.body.appendChild(newBlock);
newBlock.id = 'text';
newBlock.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, minima!';

let newButton = document.createElement('button');
document.body.appendChild(newButton);

newButton.style.backgroundColor = 'blue'
newButton.style.width = '30%';
newButton.style.height = '50px';
newButton.style.borderStyle = 'none';
newButton.style.borderRadius = `5px`;
newButton.innerText = 'BUTTON';
newButton.style.color = 'white';
newButton.style.marginTop = '25px';

let shown = true;

newButton.onclick = function () {
    shown = !shown;
    if (shown) {
        newBlock.style.display = 'block';
    }
    else {
        newBlock.style.display ='none'
    }

}



//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//     та повідомити про це користувача
//
//**********************************************************************************************************************

// *** Створити 3 інпути та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)