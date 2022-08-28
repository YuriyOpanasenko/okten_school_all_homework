// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули

let url = new URL(location.href);
let id = url.searchParams.get('id');

// add ul
let bigBox = document.createElement('div');
bigBox.classList.add('bigBox');
document.body.appendChild(bigBox);
let ul = document.createElement('ul');
bigBox.appendChild(ul);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(function (user) {

        createUserHtml(user)

    });

function createUserHtml(userInfo) {

    for (const key in userInfo) {
        const el = userInfo[key];
        if (typeof el === 'object' && el !== null) {
            createUserHtml(el)
        } else {

            const userData = document.createElement("li");
            userData.classList.add('userData');
            userData.innerHTML = `<div class="key">${key}</div>` + `<div class="el">${el}</div>`;
            ul.appendChild(userData)
        }
    }

}

let buttonForTitle = document.createElement('button');
buttonForTitle.classList.add('buttonForTitle');
buttonForTitle.innerText = 'post of current user';
bigBox.appendChild(buttonForTitle);

buttonForTitle.onclick = function () {
    let previousDiv = document.querySelector('.divForH');
    if (previousDiv) {
        previousDiv.remove();
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(resp => resp.json())
        .then(posts => {
            let divForH = document.createElement('div');
            divForH.classList.add('divForH');
            document.body.appendChild(divForH);
            for (const post of posts) {
                let postForDiv = document.createElement('div');
                postForDiv.classList.add('post');
                divForH.appendChild(postForDiv);
                let postTitle = document.createElement('h4');
                postTitle.classList.add('titlePost');
                postTitle.innerText = (`${post.title}`);
                postForDiv.appendChild(postTitle);
                let button_post_details = document.createElement('a');
                button_post_details.href = `post_index.html?id=${post.id}&post=${JSON.stringify(post)}`;
                button_post_details.innerText = ' open';
                postForDiv.appendChild(button_post_details);
            }

        });
}

// - 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте ендпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// - 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

