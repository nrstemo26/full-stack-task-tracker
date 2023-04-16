import Task from './Task'

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

    return(
        <div>
            <h1>Welcome {tasksArr[1].user}!</h1>
            {tasksArr.map((item) => {
                return <Task item={item}/>
            })

            }
            <h1>i got mad tasks in here yeah </h1>
        </div>
    )
}

export default Tasks;