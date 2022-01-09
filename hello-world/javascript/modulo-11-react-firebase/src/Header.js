import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { auth, storage, db } from '../src/firebase.js';


function Header(props){

    const [progress, setProgress] = useState(0);

    const [file, setFile] = useState(null);

    useEffect(()=>{

    },[])

    function createAccount(e){

      e.preventDefault();
      let email = document.getElementById('email-register').value;
      let username = document.getElementById('username-register').value;
      let password = document.getElementById('password-register').value;

      //Criar conta firebase
      auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
        authUser.user.updateProfile({
          displayName:username
        })
        alert('Conta criada com sucesso');
        closeModalCreateAccount();
      }).catch((error)=>{
        alert(error.message);
      });

    }
      
    function openModalCreateAccount(e){
      e.preventDefault();

      let modal = document.querySelector('.modalCreateAccount');

      modal.style.display = "block";

    }
    
    function closeModalCreateAccount(){

      let modal = document.querySelector('.modalCreateAccount');

      modal.style.display = "none";

    }

    function logon(e){
      e.preventDefault();
      let email = document.getElementById('email-login').value;
      let password = document.getElementById('password-login').value;

      auth.signInWithEmailAndPassword(email, password).then((auth)=>{
        props.setUser(auth.user.displayName);
        window.location.href = "/";
        alert('Logado com sucesso!')
      }).catch((err)=>{
        alert(err.message);
      })
    }

    function openModalUpload(e){
      e.preventDefault();

      let modal = document.querySelector('.modalUpload');

      modal.style.display = "block";

    }

    function closeModalUpload(){

      let modal = document.querySelector('.modalUpload');

      modal.style.display = "none";

    }

    function uploadPost(e){
      e.preventDefault();

      let tituloPost = document.getElementById('title-upload').value;
      let progressEl = document.getElementById('progress-upload');

      const uploadTask = storage.ref(`images/${file.name}`).put(file);

      uploadTask.on("state_changed",function(snapshot){
        const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        setProgress(progress);
      },function(error){

      }, function(){
        storage.ref("images").child(file.name).getDownloadURL().then(function(url){
          db.collection('posts').add({
            title: tituloPost,
            image: url,
            username: props.user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })

          setProgress(0);
          setFile(null);

          alert('Upload Realizado com sucesso!');

          document.getElementById('form-upload').reset();
          closeModalUpload();
        })
      })

    }

    function logoff(e){
      e.preventDefault();

      auth.signOut().then((val)=>{
        props.setUser(null);
        window.location.href = "/";
      });
    }

    return(
        <div className="header">
          <div className="modalCreateAccount">
            <div className="formCreateAccount">
              <div onClick={()=>closeModalCreateAccount()} className="close-modal-create">X</div>
              <h2>Criar Conta</h2>
              <form onSubmit={(e)=>createAccount(e)}>
                <input id="email-register" type="text" placeholder="Seu e-mail..." />
                <input id="username-register" type="text" placeholder="Seu username..." />
                <input id="password-register" type="password" placeholder="Sua senha..." />
                <input type="submit" value="Criar Conta!" />
              </form>              
            </div>
          </div>

          <div className="modalUpload">
            <div className="formUpload">
              <div onClick={()=>closeModalUpload()} className="close-modal-create">X</div>
              <h2>Fazer Upload</h2>
              <form id="form-upload" onSubmit={(e)=>uploadPost(e)}>
                <progress id="progress-upload" value={progress}></progress>
                <input id="title-upload" type="text" placeholder="Nome da sua foto..." />
                <input onChange={(e)=>setFile(e.target.files[0])} id="file-upload" type="file" name="file" />        
                <input type="submit" value="Postar no Instagram" />
              </form>              
            </div>
          </div>

          <div className="center">

            <div className="header__logo">
              <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/320px-Instagram_logo.svg.png"></img> </a>
            </div>

            {
              (props.user) ?
                <div className="header__loginInfo">
                  <span>Olá, <b>{props.user}</b></span>
                  <a onClick={(e)=>openModalUpload(e)} href="#">Postar</a>
                  <a onClick={(e)=>logoff(e)} href="#">Sair</a>
                </div>
                :

                <div className="header__loginForm">
                  
                  <form onSubmit={(e)=>logon(e)}>
                    <input id="email-login" type="text" placeholder="Login..." />
                    <input id="password-login" type="password" placeholder="Senha..." />
                    <input type="submit" name="acao" value="Logar" />
                  </form>

                  <div className="btn__newAccount">
                    <a onClick={(e)=>openModalCreateAccount(e)} href="#">Criar Conta!</a>
                  </div>                

                </div>

            }
          
          </div>

        </div>
    )
}

export default Header;