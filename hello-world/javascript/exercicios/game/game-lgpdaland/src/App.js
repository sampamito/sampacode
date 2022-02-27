
import './App.css';
import Intro from './Intro'
import Header from './Header'
import { auth, db } from '../src/firebase.js';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    auth.onAuthStateChanged((val)=>{
      if(val!=null){
        setUser(val.displayName);
      }
    })

  }, [])

  return (
    <div id="app" className="App">
      
        <Header setUser={setUser} user={user}></Header>
        
      
    </div>
  );
}

export default App;
