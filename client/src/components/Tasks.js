import Task from './Task'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Tasks () {
    const local = JSON.parse(localStorage.getItem('user'))
    const [tasks, setTasks] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:5000/api/tasks/',{
            headers: {
                Authorization: `Bearer ${local.token}`
            }
        })
            .then(res=>{
                setTasks(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    })

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