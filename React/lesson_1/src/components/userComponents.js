export default function UserComponent(props) {
    let {item} = props;
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <br/>
        </div>
    );
}