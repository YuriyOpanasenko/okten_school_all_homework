// Створити компонент який описує персонажа
// (властивості id,name,status,species,gender,image)
// з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів

export default function RickAndMortyComponents(props) {


    let {
        item: {
            id, name, status, species, gender, image
        }
    } = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>{id}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
}