import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteTask, updateTask } from '../features/tasks/taskSlice'

function Task ({ item }) {
    const [taskCompleted, setTaskCompleted] = useState(item.complete)
    const dispatch = useDispatch()
    
    
    const handleComplete = async () => {
        const userData = {
            ...item,
            complete: !item.complete
        }
        
        await dispatch(updateTask( userData ))
        setTaskCompleted(!taskCompleted)
        console.log('finished now')
    }
    const handleDelete = () => {
        dispatch(deleteTask(item._id))
    }

    return(
        <div className="task-card"  >
            <h1>{item.text}</h1>
            <div className='task-complete-container'>
                <h2>{taskCompleted ? 'done':'not done'}</h2>
                <button className='btn' onClick={() => handleComplete()}>{taskCompleted? 'actually is it not done?': 'finish the task?'}</button>
            </div>
            <h3>ID: {item._id}</h3>
            <button className='btn btn-delete' onClick={()=> handleDelete()}>X</button>
        </div>
    )
}


export default Task