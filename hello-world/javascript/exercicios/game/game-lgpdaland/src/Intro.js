import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { auth, storage, db } from '../src/firebase.js';
import capa from "../src/capa.png"
import warrior from "../src/warrior.png"
import lgpdiners from "../src/lgpdiners.png"

function Intro(props) {

    useEffect(() => {

    }, [])

    function createPlayer(e) {

        e.preventDefault();
        let email = document.getElementById('email-register').value;
        let username = document.getElementById('username-register').value;
        let password = document.getElementById('password-register').value;

        //Criar conta firebase
        auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
            authUser.user.updateProfile({
                displayName: username
            })
            alert('Conta criada com sucesso');
            closeModalCreatePlayer();
        }).catch((error) => {
            alert(error.message);
        });

    }

    function openModalCreatePlayer(e) {
        e.preventDefault();

        let modal = document.querySelector('.modalCreatePlayer');

        modal.style.display = "block";

    }

    function closeModalCreatePlayer() {

        let modal = document.querySelector('.modalCreatePlayer');

        modal.style.display = "none";

    }

    return (

        <div className="center">

            <div className="modalCreatePlayer">
                <div className="formCreatePlayer">
                    <div onClick={() => closeModalCreatePlayer()} className="close-modal-create">X</div>
                    <h2>Criar Conta</h2>
                    <form onSubmit={(e) => createPlayer(e)}>
                        <input id="email-register" type="text" placeholder="Seu e-mail..." />
                        <input id="username-register" type="text" placeholder="Seu nome de Guerreiro..." />
                        <input id="password-register" type="password" placeholder="Sua senha..." />
                        <input type="submit" value="Criar Conta!" />
                    </form>
                </div>
            </div>

            {
                (props.user) ?
                    <div className="header__loginInfo">
                        <span> Olá, <b>{props.user}</b> <img src={warrior} /></span>
                        <br />
                        <span> <img src={lgpdiners} /> L$ 9999.99 </span>
                        <a href="#">Jogar</a>
                        <a href="#">Sair</a>

                    </div>
                    :

                    < div className="btn__newPlayer" >
                        <img src={warrior} />
                        <a onClick={(e) => openModalCreatePlayer(e)} href="#">Entrar no Exercito</a>
                    </div >

            }

            <img className="capa" src={capa} />
            <br />
            <h1>Junte-se ao exército e defenda LGPDaland</h1>
            Excepteur qui do ut mollit tempor veniam Lorem duis labore laboris sint veniam laborum.Ullamco aliquip qui nulla commodo mollit nostrud sint ullamco pariatur cillum Lorem do.Culpa do mollit ullamco eu ipsum voluptate.
            <br />


        </div>
    )

}

export default Intro;