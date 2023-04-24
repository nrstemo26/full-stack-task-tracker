import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'

function Task ({ item }) {
    const dispatch = useDispatch()
    
    const handleComplete = ()=>{
        console.log('finished now')
    }
    const handleDelete = () => {
        dispatch(deleteTask(item._id))
    }

    return(
        // <div className="task-card" onClick={e => handleClick(e)}  >
        <div className="task-card"  >
            <h1>{item.text}</h1>
            <h2>{item.complete? 'done':'not done'}
            <button className='btn' onClick={() => handleComplete()}>finished</button>
            </h2>
            <h3>ID: {item._id}</h3>
            <button className='btn btn-delete' onClick={()=> handleDelete()}>X</button>
        </div>
    )
}


export default Task