// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let divForFlex = document.createElement('div');
        divForFlex.classList.add('divForFlex');
        document.body.appendChild(divForFlex);
        for (const user of users) {

            let idPlusName = document.createElement('div') ;
            idPlusName.innerHTML = `<div><span>${user.id}</span> <span>${user.name}</span></div>`;
            idPlusName.classList.add('user');
            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = ' info';
            idPlusName.appendChild(a);


            divForFlex.appendChild(idPlusName);


            //     `<div class="idPlusUser">` +
            //     `<p>${objElement.id}</p>` +
            //     `<p>${objElement.name}</p>` +
            //     `<a href="user-details.html" target="_blank" class = 'buttonUser'>Отримати інфрмацію</a>` +
            //     `</div>`;
            // document.body.innerHTML += id;

        }
    });

// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html,
// котра має детальну інформацію про об'єкт на який клікнули



// Стилізація проєкту -
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижче, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так,
//     щоб було видно що це блоки (дати фон. марджини і тд)
