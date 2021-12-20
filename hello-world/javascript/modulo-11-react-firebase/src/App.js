//import './App.css';
import {db} from '../src/firebase.js';
import React, { Component }  from 'react';
import {useEffect} from 'react';

function App() {

  useEffect(()=>{
    console.log(db);
  },[])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
