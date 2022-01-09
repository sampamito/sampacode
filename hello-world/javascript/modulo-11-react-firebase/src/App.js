import './App.css';
import { auth, db } from '../src/firebase.js';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Header from './Header'
import Post from './Post'

function App() {

  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    auth.onAuthStateChanged((val)=>{
      if(val!=null){
        setUser(val.displayName);
      }
    })

    db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapchot)=>{
      setPosts(snapchot.docs.map((document)=>{
        return{id:document.id,info:document.data()}
      }))
    })
  }, [])

  return (
    <div id="app" className="App">

        <Header setUser={setUser} user={user}></Header>

        {
          posts.map(function(val){
            return(
              <Post user={user} info={val.info} id={val.id} />            
            )
          })
        }

    </div>
  );
}

export default App;
