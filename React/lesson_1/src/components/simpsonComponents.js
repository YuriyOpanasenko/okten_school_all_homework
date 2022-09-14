export default function SimpsonComponents(props) {

    let classNameItem = 'card';
    let {name, age, status, hairColor, image} = props;

    return (
        <div className={classNameItem}>
            <h2>{name}</h2>
            <p className='age'>{age}</p>
            {/*className='age' то для себе.*/}
            <p>{status}</p>
            <p>{hairColor}</p>
            <img src={image} alt={name}/>
        </div>
    );
}
