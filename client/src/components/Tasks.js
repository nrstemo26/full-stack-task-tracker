import Task from './Task'
import { useState, useEffect } from 'react'
import axios from 'axios'

const tasksArr = [
    {
        id:1,
        text: 'walk dogs',
        complete: true,
        user:'Nate'
    },
    {
        id:2,
        text: 'run a marathon',
        complete: true,
        user:'Nate'
    },
    {
        id:2,
        text: 'do yoga',
        complete: true,
        user:'Jessie'
    },
]

function Tasks () {
    const local = JSON.parse(localStorage.getItem('user'))
    
    console.log(local.token)
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
            {tasks.map((item) => {
                return <Task item={item}/>
            })

            }
            <h1>i got mad tasks in here yeah </h1>
        </div>
    )
}

export default Tasks;