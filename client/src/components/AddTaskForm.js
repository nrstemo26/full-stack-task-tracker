import { useState } from "react";

function AddTaskForm(){
    const [complete,setComplete] = useState(false);
    const [description, setDescription] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
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
                <input type='checkbox' value={complete} onChange={(e)=> setComplete(e.target.checked)} />
            </label>

            <button type='submit' className='form__btn'>Add Task</button>
        </form>
    )
}

export default AddTaskForm;