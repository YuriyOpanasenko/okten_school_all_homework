const getUsers = () => {
    return fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
}
const getUser = (id) => {
    return fetch('https://rickandmortyapi.com/api/character')
        .then (character => character.json())
}
export {getUser, getUsers};