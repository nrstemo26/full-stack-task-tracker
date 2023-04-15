
function Task ({ item }) {
    return(
        <div>
            <h1>{item.text}</h1>
            <h2>{item.complete? 'done':'not done'} yeah</h2>
        </div>
    )
}

export default Task