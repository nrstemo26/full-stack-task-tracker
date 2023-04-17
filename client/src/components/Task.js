
function Task ({ item }) {
    return(
        <div className="task-card">
            <h1>{item.text}</h1>
            <h2>{item.complete? 'done':'not done'}? yeah</h2>
            <h3>ID: {item._id}</h3>
        </div>
    )
}
//handle classes for 
export default Task