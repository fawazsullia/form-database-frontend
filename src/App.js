import React, { useState, useEffect } from 'react'
import {Route} from 'react-router-dom'
import Home from './views/Home';
import Login from './views/Login';
import Nav from './views/Nav';
import Register from './views/Register';
import Loading from './views/Loading'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

const [currentUser, setcurrentUser] = useState({formFills :[{}], email : "", apiKey : ""})
const [loading, setloading] = useState(false)



useEffect(() => {

setloading(true)
const uid = localStorage.getItem("uid")
console.log(uid)
if(uid){
  console.log("This checks in")
  fetch("https://formdatabase.herokuapp.com/auth/login", {
              method : 'POST',
              headers : {
                  'content-type' : 'application/json'
              },
              body : JSON.stringify({uid : uid})
          })
          .then((res)=> res.json())
          .then((response)=> {setcurrentUser(response); setloading(false);})
          .catch((err)=> setloading(false))

}
else{ setloading(false)  }



}, [])

const fetchUser = (user)=>{

setcurrentUser(user)

}

console.log(currentUser)

  return (
loading ? <Loading /> :

    <div className="App">
<Nav currentUser={currentUser}/>

 <Route path="/register">    
{ currentUser.apiKey ? <Redirect to="/" /> :  <Register fetchUser = {fetchUser}/>}
</Route>

<Route path="/login">
{ currentUser.apiKey ? <Redirect to="/" /> :  <Login fetchUser = {fetchUser}/>}
</Route>


<Route exact path="/">
{  currentUser.apiKey ? <Home currentUser={currentUser} /> : <Redirect to="/login"/> }
</Route>


    </div>
  );
}

export default App;
