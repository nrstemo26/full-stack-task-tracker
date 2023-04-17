import { useState, useEffect } from "react";


function AddTaskForm(){
    const [complete, setComplete] = useState(false);
    const [description, setDescription] = useState('');

    useEffect(()=>{
        console.log('in use effect')
        const checkbox = document.getElementById('add-checkbox')
        checkbox.checked = complete;

    },[complete]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        
        if(description){
            console.log('you created a task')
            //send request to server at this point
            console.log(complete, description)
            setComplete(false)
            setDescription('')
            
        }
        // console.log('email',email,'password: ',password)
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