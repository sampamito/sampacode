import './App.css';
import Header from './Header';
import Stories from './Stories';
import Feed from './Feed';
import FeedPosts from './FeedPosts';
import profile from './resources/profile.jpg';
import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai";

import { useState, useEfect, useEffect } from 'react';
import { db } from '../src/firebase.js';

function App() {

  const [posts, setPosts] = useState([]);

  // executa uma vez ao iniciar a pagina
  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => {
        console.log(doc.data());
        return { info: doc.data() }
      }));
    })
  }, [])

  return (
    <div className="App">

      { /* componente de header */}
      <Header />

      { /* componente de stories */}
      <Stories />

      { /* componente de feed */}
      <Feed />
      {
        posts.map((val) => {
          return (

            <FeedPosts name={val.info.name} postContent={val.info.content} image={val.info.image} hour="4" />

          )
        })
      }

    </div>
  );
}
// parei o video com 1:28:09
export default App;
