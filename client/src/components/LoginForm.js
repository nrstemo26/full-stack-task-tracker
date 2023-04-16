import {useState} from 'react';

function LoginForm (){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('email',email,'password: ',password)
        //other logic
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