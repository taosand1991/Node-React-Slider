import "./App.css";
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import CreateUser from "./components/CreateUser";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";

function App() {
  
  return (
      <>
      <Navbar/>
      <Switch>
        <Route path='/create' component={CreatePost}/>
        <Route path='/' component={CreateUser}/>
        <Redirect to='/'/>
      </Switch>
      </>
  );
}

export default App;
