import {useState} from 'react';

import {useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice'



function LoginForm (){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();


    const handleSubmit = (e)=>{
        e.preventDefault();
        const userData = {
            email,
            password,
        }

        dispatch(login(userData))

    }
    return(
        <form onSubmit={handleSubmit}  className='form form--login'>
            <label className='form__input'>
                Email: 
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            </label>
            <label className='form__input'>
                Password: 
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            </label>

            <button type='submit' className='form__btn'>Log in</button>
        </form>
    )
}

export default LoginForm;