import React, {useState} from 'react'
import * as registerStyle from './style/register.module.css'
import firebase from '../firebaseConfig'
import {Redirect} from 'react-router-dom'

function Register({fetchUser,redirecttologin}) {

const [input, setinput] = useState({})
const [redirect, setredirect] = useState(false)

const handleInput = (e) => {

setinput({...input, [e.target.name]: e.target.value})

}

const handleSubmit = () => {

    firebase.auth().createUserWithEmailAndPassword(input.email, input.password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)

      fetch("https://formdatabase.herokuapp.com/auth/register",{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({email : user.email, uid : user.uid})

      })
      .then((res)=> res.json())
      .then((response)=> { fetchUser(response.apiKey); redirecttologin(false); localStorage.setItem("uid", user.uid) ;setredirect(true);    })


    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });


}


    return (

      redirect ? <Redirect to="/" /> :
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
