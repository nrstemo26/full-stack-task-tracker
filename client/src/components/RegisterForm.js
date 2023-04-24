import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice'


function RegisterForm(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !email || !password || !password2){
            console.log('one of the fields is empty')
            return null;
        }
        if(password !== password2){
            console.log('passwords dont match')
            return null;
        }

        const userData = {
            name,
            email,
            password
        }

        dispatch(register( userData ))
    }


    return(
        <form onSubmit={handleSubmit}  className='form form--login'>
            <label className='form__input'>
                Name: 
                <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
            </label>
            <label className='form__input'>
                Email: 
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            </label>
            <label className='form__input'>
                Password: 
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            </label>
            <label className='form__input'>
                Retype Password: 
                <input type='password' value={password2} onChange={(e)=> setPassword2(e.target.value)} />
            </label>

            <button type='submit' className='form__btn'>Register User</button>
        </form>
    )
}

export default RegisterForm