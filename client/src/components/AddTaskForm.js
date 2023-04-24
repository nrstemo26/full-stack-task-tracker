import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createTask } from '../features/tasks/taskSlice'


function AddTaskForm(){
    const [complete, setComplete] = useState(false);
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        const checkbox = document.getElementById('add-checkbox')
        checkbox.checked = complete;

    },[complete]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        if(description){
            const userData = {
                text: description,
                complete
            }

            dispatch( createTask( userData ))
            setComplete(false)
            setDescription('')    
        }
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