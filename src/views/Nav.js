import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

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



    return (
        <div style={styles.container}>
           <p><Link to="/" style={styles.link}>Form Database</Link></p>
           <ul style={styles.nav}>
               <li style={styles.list}><Link to="/login" style={styles.link}>Login</Link></li>
               <li style={styles.list}><Link to="/register" style={styles.link}>Register</Link></li>
               <li style={styles.list}><button type="button" style={styles.button}>Signout</button></li>
               </ul> 
        </div>
    )
}

export default Nav
