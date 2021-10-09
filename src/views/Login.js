import React,{useState} from 'react'
import * as loginStyle from './style/login.module.css'
import firebase from '../firebaseConfig'
import { Redirect } from 'react-router'

function Register({setcurrentUser, redirecttologin}) {

    const [input, setinput] = useState({})
    const [redirect, setredirect] = useState(false)

    const handleInput = (e) => {
    
    setinput({...input, [e.target.name]: e.target.value})
    
    }

    const handleSubmit = ()=>{
        
        firebase.auth().signInWithEmailAndPassword(input.email, input.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          fetch("https://formdatabase.herokuapp.com/auth/login", {
              method : 'POST',
              headers : {
                  'content-type' : 'application/json'
              },
              body : JSON.stringify({uid : user.uid})
          })
          .then((res)=> res.json())
          .then((response)=> {setcurrentUser(response); redirecttologin(false); setredirect(true); localStorage.setItem("uid", user.uid)})

        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });


    }




    return (

        redirect ? <Redirect to="/" /> :
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
