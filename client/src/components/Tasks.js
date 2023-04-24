import Task from './Task'
import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getTasks, reset } from '../features/tasks/taskSlice'

// import { useSelector, useDispatch } from 'react-redux';
// import { getTasks } from '../features/tasks/taskSlice';



function Tasks () {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)

    const {tasks, isLoading, isError, message} = useSelector(
        (state) => state.task
    )

    const local = JSON.parse(localStorage.getItem('user'))
    console.log(local)
    // const [tasks, setTasks] = useState([])
    
    useEffect(()=>{
        dispatch(getTasks())

        // axios.get('http://localhost:5000/api/tasks/',{
        //     headers: {
        //         Authorization: `Bearer ${local.token}`
        //     }
        // })
        //     .then(res=>{
        //         setTasks(res.data);
        //     })
        //     .catch(err=>{
        //         console.log(err);
        //     })
    },[user, dispatch])

    return(
        <div>
            <h1>Welcome {local.name}!</h1>
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