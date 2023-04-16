import { useState } from "react";
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


function AuthForm(){
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = ()=>{
        setIsLogin((prevState) => !prevState);
    }

    return (
        <div>
            <h2>{isLogin ? "Log In" : "Register"}</h2>
            {isLogin ? <LoginForm/> : <RegisterForm />}
            <p onClick={toggleAuthMode}>
                {isLogin ? "Dont have an account? register here" : "Already have an account? Login here"}
            </p>
        </div>
    )
}

export default AuthForm;