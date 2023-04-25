import Task from './Task'
import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getTasks } from '../features/tasks/taskSlice'




function Tasks () {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)

    // const {tasks, isLoading, isError, message} = useSelector(
    const { tasks } = useSelector(
        (state) => state.task
    )

    
    useEffect(()=>{
        dispatch(getTasks())
    },[user, dispatch])

    return(
        <div>
            <h1>Welcome {user.name}!</h1>
            {tasks.length > 0 ? (tasks.map((item) => {
                return <Task 
                key={item._id} 
                item={item}
                />
            })): <h2>no tasks yet</h2>

            }
    
        </div>
    )
}

export default Tasks;