import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './views/Home';
import Login from './views/Login';
import Nav from './views/Nav';
import Register from './views/Register';

function App() {
  return (
    <div className="App">

<Nav />

 <Route path="/register">    
<Register />
</Route>

<Route path="/login">
<Login />
</Route>

<Route exact path="/">
<Home />
</Route>

    </div>
  );
}

export default App;
