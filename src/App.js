import React, { useState, useEffect } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './views/Home';
import Login from './views/Login';
import Nav from './views/Nav';
import Register from './views/Register';
import Loading from './views/Loading'

function App() {

const [currentUser, setcurrentUser] = useState({formFills :[{}], email : false})
const [loading, setloading] = useState(false)
const [redirect, setredirect] = useState(false)


useEffect(() => {

  setloading(true)
const uid = localStorage.getItem("uid")
if(uid){
  fetch("https://formdatabase.herokuapp.com/auth/login", {
              method : 'POST',
              headers : {
                  'content-type' : 'application/json'
              },
              body : JSON.stringify({uid : uid})
          })
          .then((res)=> res.json())
          .then((response)=> {setcurrentUser(response); setloading(false)})
          .catch((err)=> setloading(false))

}
else{ setredirect(true); setloading(false)  }



}, [])

const fetchUser = (apiKey)=>{

fetch(`https://formdatabase.herokuapp.com/data/entries/${apiKey}`)
.then((res)=> res.json())
.then((response)=> {setcurrentUser(response); console.log(response)})
.catch((err)=> console.log(err))

}



  return (
loading ? <Loading /> :

    <div className="App">
<Nav redirect={redirect}/>

 <Route path="/register">    
<Register fetchUser={fetchUser} redirecttologin={setredirect} />
</Route>

<Route path="/login">
<Login setcurrentUser={setcurrentUser} redirecttologin={setredirect} />
</Route>


<Route exact path="/">
{redirect ? <Redirect to="/login" /> : <Home currentUser={currentUser} />}
</Route>


    </div>
  );
}

export default App;
