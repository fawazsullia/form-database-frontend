import React,{useState} from 'react'
import * as loginStyle from './style/login.module.css'

function Register() {

    const [input, setinput] = useState({})

    const handleInput = (e) => {
    
    setinput({...input, [e.target.name]: e.target.value})
    
    }

    const handleSubmit = ()=>{
        
    }




    return (
        <div className={loginStyle.container}>
        <form className={loginStyle.form}>
                 <h2>Login to your Account</h2>

            <label>Email: </label><br/>
            <input type="text" placeholder="Email" name="email" onChange={handleInput} /><br/>
            <label>Password: </label><br/>
            <input type="password" placeholder="Password" name="password" onChange={handleInput} /><br/>
            <button type="button" onClick={handleSubmit}>Login</button>
        </form>   
        </div>
    )
}

export default Register
