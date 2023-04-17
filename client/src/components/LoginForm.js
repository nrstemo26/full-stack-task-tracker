import {useState} from 'react';
import axios from 'axios';

function LoginForm (){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post('http://localhost:5000/api/users/login', {
            email,
            password
        })
            .then(res=>{
                console.log(res)
                
                console.log(res.data)
                localStorage.setItem('user', JSON.stringify(res.data))

                alert('logged in')
                setEmail('')
                setPassword('')
            })
            .catch(err =>{
                console.log(err)
            })
        
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