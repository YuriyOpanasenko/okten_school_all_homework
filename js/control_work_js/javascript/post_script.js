// На сторінці post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .

let url = new URL(location.href);
let post = url.searchParams.get('post');
// url.searchParams.get -
post = JSON.parse(post);

function showPostInfo(post) {
    let ulPost = document.createElement('ul');
    ulPost.classList.add('ulPost');
    document.body.appendChild(ulPost);
    for (const key in post) {
        let liPost = document.createElement('li');
        liPost.innerText = `${post[key]}`
        ulPost.appendChild(liPost);
    }
}

showPostInfo(post);


// 8 Нижче інформації про пост, вивести всі
// коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)

    .then(resp => resp.json())
    .then(comments => {
        let ulComments = document.createElement('ul');
        ulComments.classList.add('ulComments');
        for (const comment of comments) {
            let allComments = document.createElement('li');
            allComments.innerHTML = `<h4>${comment.name}</h4> <p>${comment.email}</p> <p>${comment.body}</p>`;
            ulComments.appendChild(allComments)

        }
        document.body.appendChild(ulComments)
    });