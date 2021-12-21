import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebaseConfig'

function Nav({currentUser}) {


const styles ={

container : {
display : "flex",
justifyContent : "space-around",
alignItems : "center"
},

nav : {
    display : "flex",

},

list : {
    listStyle : "none",
    marginLeft : "15px",
    fontWeight : "500"
},

link : {
    textDecoration : "none",
    color : "inherit"
},

button : {
    outline : "none",
    border : "none",
    backgroundColor : "red",
    padding : "5px 20px",
    color : "white"
}


}

const signout = () => {
    firebase.auth().signOut().then(() => {
        localStorage.removeItem("uid");
        window.location.replace("https://formdatabase.netlify.app/login");
        }).catch((error) => {
            console.log(error)
        });
}


    return (
        <div style={styles.container}>
           <p><Link to="/" style={styles.link}>Form Database</Link></p>
           <ul style={styles.nav}>
              { !currentUser.apiKey && <li style={styles.list}><Link to="/login" style={styles.link}>Login</Link></li> }
              { !currentUser.apiKey && <li style={styles.list}><Link to="/register" style={styles.link}>Register</Link></li> }
               { currentUser.apiKey && <li style={styles.list}><button type="button" onClick={signout} style={styles.button}>Signout</button></li>}
               </ul> 
        </div>
    )
}

export default Nav
