import './App.css';
import { db } from '../src/firebase.js';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Header from './Header'

function App() {

  const [user, setUser] = useState('Guilherme');

  useEffect(() => {
    console.log(db);
  }, [])

  return (
    <div className="App">

        <Header user={user}></Header>

    </div>
  );
}

export default App;
