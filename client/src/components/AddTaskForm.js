import { useState, useEffect } from "react";
import axios from 'axios'


function AddTaskForm(){
    const local = JSON.parse(localStorage.getItem('user'))
    const [complete, setComplete] = useState(false);
    const [description, setDescription] = useState('');

    useEffect(()=>{
        const checkbox = document.getElementById('add-checkbox')
        checkbox.checked = complete;

    },[complete]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        
        if(description){
            //send request to server at this point
            axios.post('http://localhost:5000/api/tasks/',{
                text: description,
                complete
            },
            {
                headers: {
                    Authorization: `Bearer ${local.token}`
                }
            })
                .then(res=>{
                    console.log('new task created')
                })
                .catch(err=>{
                    console.log(err);
                })
            
            //receives the request and resets everything so they can add more tasks

        setComplete(false)
        setDescription('')
            
    }
        //other logic

    }

    return(
        <form onSubmit={handleSubmit}  className='form form--login'>
            <label className='form__input'>
                Text: 
                <input type='input' value={description} onChange={(e)=> setDescription(e.target.value)} />
            </label>
            <label className='form__input'>
                Done? 
                <input type='checkbox' id='add-checkbox' value={complete} onChange={(e)=> setComplete(e.target.checked)} />
            </label>

            <button type='submit' className='form__btn'>Add Task</button>
        </form>
    )
}

export default AddTaskForm;