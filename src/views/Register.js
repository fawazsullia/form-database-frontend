import React, {useState} from 'react'
import * as registerStyle from './style/register.module.css'
import firebase from '../firebaseConfig'

function Register() {

const [input, setinput] = useState({})

const handleInput = (e) => {

setinput({...input, [e.target.name]: e.target.value})

}

const handleSubmit = () => {

    firebase.auth().createUserWithEmailAndPassword(input.email, input.password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;

      fetch("")


    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });


}


    return (
        <div className={registerStyle.container}>
        <form className={registerStyle.form}>
                 <h2>Register Your Account</h2>

            <label>Email: </label><br/>
            <input type="text" placeholder="Email" name="email" onChange={handleInput} /><br/>
            <label>Password: </label><br/>
            <input type="password" placeholder="Password" name="password" onChange={handleInput} /><br/>
            <button type="button" onClick={handleSubmit}>Register</button>
        </form>   
        </div>
    )
}

export default Register
