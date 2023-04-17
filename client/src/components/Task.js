import axios from 'axios'

function Task ({ item }) {

    const handleClick = () => {
        const local = JSON.parse(localStorage.getItem('user'))
    
        console.log('component clicked')
        console.log(item._id)
        const taskUrl = 'http://localhost:5000/api/tasks/' + item._id;
        
        axios.patch(taskUrl, {
            item,
            complete: !item.complete
        },{
            headers: {
                Authorization: `Bearer ${local.token}`
            }
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
      };

    return(
        <div className="task-card" onClick={e => handleClick(e)}  >
            <h1>{item.text}</h1>
            <h2>{item.complete? 'done':'not done'}</h2>
            <h3>ID: {item._id}</h3>
        </div>
    )
}
//handle classes for 
export default Task