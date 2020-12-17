
const UserInput = (props) => {
    const onChangeEventHandler = (event) => props.handler(event.target.value);
    return (
        <div>
            <input onChange={onChangeEventHandler} value={props.username}/>
        </div>
    );

}

export default UserInput