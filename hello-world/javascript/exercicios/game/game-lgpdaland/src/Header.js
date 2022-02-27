import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { auth, storage, db } from '../src/firebase.js';
import logoespada from "../src/logoespada.png";
import warrior from "../src/warrior.png"
import lgpdiners from "../src/lgpdiners.png"
import desafio1 from "../src/desafio1.webp"
import desafio2 from "../src/desafio2.jpg"

function Header(props) {

    const [desafios, setDesafios] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        // fazer uma chamada para API e preencher o estado das tarefas
        if (window.localStorage.getItem('desafios') != undefined) {
            var jsonAux = JSON.parse(window.localStorage.getItem('desafios'));
            setDesafios(jsonAux);

        }

    }, [])

    const totLgpdiners = desafios.reduce((soma, val) => {
        return soma + val.pontos;
    }, 0);

    function createAccount(e) {

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
            closeModalCreateAccount();
        }).catch((error) => {
            alert(error.message);
        });

    }

    function openModalCreateAccount(e) {
        e.preventDefault();

        let modal = document.querySelector('.modalCreateAccount');

        modal.style.display = "block";

    }

    function closeModalCreateAccount() {

        let modal = document.querySelector('.modalCreateAccount');

        modal.style.display = "none";

    }

    function logon(e) {
        e.preventDefault();
        let email = document.getElementById('email-login').value;
        let password = document.getElementById('password-login').value;

        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            props.setUser(auth.user.displayName);
            window.location.href = "/";
            alert('Logado com sucesso!')
        }).catch((err) => {
            alert(err.message);
        })
    }

    function openModalUpload(e) {

        e.preventDefault();

        let modal = document.querySelector('.modalUpload');

        modal.style.display = "block";

    }

    function closeModalUpload() {

        let modal = document.querySelector('.modalUpload');

        modal.style.display = "none";
        

    }

    function saveDesafio(e) {
        e.preventDefault();

        var numero = ""
        var pontos = 0
        var correto = true
        var resposta = ""
        var addDesafio = []

        numero = document.getElementById('numero').value;
        pontos = parseInt(document.getElementById('pontos').value);
        correto = document.getElementById('correto').value;
        resposta = document.getElementById('resposta').value;
        addDesafio = [

            ...desafios,
            {
                questao: numero,
                resposta: resposta,
                pontos: pontos,
                username: props.user,
                certo: correto,
                timestamp: new Date().getTime()
            }
        ]

        setDesafios(addDesafio);

        window.localStorage.setItem('desafios', JSON.stringify(addDesafio));

        setModal(false);

        alert("Resposta correta! ")
        
        closeModalUpload();
        openModalUpload(e);
    }

    function saveDesafio2(e) {
        e.preventDefault();

        var numero = ""
        var pontos = 0
        var correto = true
        var resposta = ""
        var addDesafio = []

        numero = document.getElementById('numero-2').value;
        pontos = parseInt(document.getElementById('pontos').value);
        correto = document.getElementById('correto').value;
        resposta = document.getElementById('resposta').value;
        addDesafio = [

            ...desafios,
            {
                questao: numero,
                resposta: resposta,
                pontos: pontos,
                username: props.user,
                certo: correto,
                timestamp: new Date().getTime()
            }
        ]

        setDesafios(addDesafio);

        window.localStorage.setItem('desafios', JSON.stringify(addDesafio));

        setModal(false);

        alert("Resposta correta! ")
        
        closeModalUpload();
        openModalUpload(e);
    }

    function saveDesafio3(e) {
        e.preventDefault();

        var numero = ""
        var pontos = 0
        var correto = true
        var resposta = ""
        var addDesafio = []

        numero = document.getElementById('numero').value;
        pontos = parseInt(document.getElementById('pontos').value);
        correto = document.getElementById('correto').value;
        resposta = document.getElementById('resposta').value;
        addDesafio = [

            ...desafios,
            {
                questao: numero,
                resposta: resposta,
                pontos: pontos,
                username: props.user,
                certo: correto,
                timestamp: new Date().getTime()
            }
        ]

        setDesafios(addDesafio);

        window.localStorage.setItem('desafios', JSON.stringify(addDesafio));

        setModal(false);

        alert("Resposta correta! ")
        
        closeModalUpload();
        openModalUpload(e);
    }

    function saveDesafio4(e) {
        e.preventDefault();

        var numero = ""
        var pontos = 0
        var correto = true
        var resposta = ""
        var addDesafio = []

        numero = document.getElementById('numero').value;
        pontos = parseInt(document.getElementById('pontos').value);
        correto = document.getElementById('correto').value;
        resposta = document.getElementById('resposta').value;
        addDesafio = [

            ...desafios,
            {
                questao: numero,
                resposta: resposta,
                pontos: pontos,
                username: props.user,
                certo: correto,
                timestamp: new Date().getTime()
            }
        ]

        setDesafios(addDesafio);

        window.localStorage.setItem('desafios', JSON.stringify(addDesafio));

        setModal(false);

        alert("Resposta correta! ")
        
        closeModalUpload();
        openModalUpload(e);
    }


    function logoff(e) {
        e.preventDefault();

        auth.signOut().then((val) => {
            props.setUser(null);
            window.location.href = "/";
        });
    }

    return (
        <div className="header">

            <div className="modalUpload">

                {
                    (window.localStorage.getItem('desafios') == undefined) ?

                        <div className="formUpload">

                            <div onClick={() => closeModalUpload()} className="close-modal-create">X</div>
                            <h2>Desafio 1</h2>
                            <img width="560" height="315" src={desafio1}></img>
                            <br />
                            Minim dolor Lorem ipsum tempor ea aliquip commodo. Laborum ex quis in aliqua sit tempor elit mollit nisi. Irure cillum officia officia magna voluptate dolore nisi amet qui veniam sit. Pariatur in aliqua ad nostrud est in incididunt voluptate excepteur Lorem consectetur. Cupidatat velit consectetur consequat consequat esse voluptate Lorem duis nisi nisi est duis in. Reprehenderit adipisicing minim et fugiat aliqua cupidatat ad ipsum incididunt magna do culpa.
                            <br />
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/hl77erVyGgg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <form id="form-1" onSubmit={(e) => saveDesafio(e)}>
                                <input type="hidden" id="numero" value="1" />
                                <input type="hidden" id="resposta" value="1" />
                                <input type="hidden" id="pontos" value="100" />
                                <input type="hidden" id="correto" value="true" />

                                <input type="submit" value="Confirmar" />
                            </form>

                        </div>

                        :

                        desafios.map((val) => {
                            if (val.questao == "1") {
                                return (

                                    <div className="formUpload">
                                        <div onClick={() => closeModalUpload()} className="close-modal-create">X</div>
                                        <h2>Desafio 2</h2>
                                        <img width="560" height="315" src={desafio2}></img>
                                        <br />
                                        Minim dolor Lorem ipsum tempor ea aliquip commodo. Laborum ex quis in aliqua sit tempor elit mollit nisi. Irure cillum officia officia magna voluptate dolore nisi amet qui veniam sit. Pariatur in aliqua ad nostrud est in incididunt voluptate excepteur Lorem consectetur. Cupidatat velit consectetur consequat consequat esse voluptate Lorem duis nisi nisi est duis in. Reprehenderit adipisicing minim et fugiat aliqua cupidatat ad ipsum incididunt magna do culpa.
                                        <br />
                                        <form id="form-2" onSubmit={(e) => saveDesafio2(e)}>
                                            <input type="hidden" id="numero" value="2" />
                                            <input type="hidden" id="resposta" value="1" />
                                            <input type="hidden" id="pontos" value="100" />
                                            <input type="hidden" id="correto" value="true" />

                                            <input type="submit" value="Enviado" />
                                        </form>

                                    </div>

                                );

                            } else if (val.questao == "2") {
                                return (

                                    <div className="formUpload">
                                        <div onClick={() => closeModalUpload()} className="close-modal-create">X</div>
                                        <h2>Desafio 3</h2>
                                        <img width="560" height="315" src={desafio2}></img>
                                        <br />
                                        Minim dolor Lorem ipsum tempor ea aliquip commodo. Laborum ex quis in aliqua sit tempor elit mollit nisi. Irure cillum officia officia magna voluptate dolore nisi amet qui veniam sit. Pariatur in aliqua ad nostrud est in incididunt voluptate excepteur Lorem consectetur. Cupidatat velit consectetur consequat consequat esse voluptate Lorem duis nisi nisi est duis in. Reprehenderit adipisicing minim et fugiat aliqua cupidatat ad ipsum incididunt magna do culpa.
                                        <br />
                                        <form id="form-3" onSubmit={(e) => saveDesafio3(e)}>
                                            <input type="hidden" id="numero" value="3" />
                                            <input type="hidden" id="resposta" value="1" />
                                            <input type="hidden" id="pontos" value="100" />
                                            <input type="hidden" id="correto" value="true" />

                                            <b>1 - Sobre a LGPD, quando ela entrou em vigor?</b>

                                            <input type="submit" value="responder" />
                                        </form>

                                    </div>

                                );
                            } else if (val.questao == "3") {
                                return (

                                    <div className="formUpload">
                                        <div onClick={() => closeModalUpload()} className="close-modal-create">X</div>
                                        <h2>Desafio 4</h2>
                                        <img width="560" height="315" src={desafio2}></img>
                                        <br />
                                        Minim dolor Lorem ipsum tempor ea aliquip commodo. Laborum ex quis in aliqua sit tempor elit mollit nisi. Irure cillum officia officia magna voluptate dolore nisi amet qui veniam sit. Pariatur in aliqua ad nostrud est in incididunt voluptate excepteur Lorem consectetur. Cupidatat velit consectetur consequat consequat esse voluptate Lorem duis nisi nisi est duis in. Reprehenderit adipisicing minim et fugiat aliqua cupidatat ad ipsum incididunt magna do culpa.
                                        <br />
                                        <form id="form-4" onSubmit={(e) => saveDesafio4(e)}>
                                            <input type="hidden" id="numero" value="3" />
                                            <input type="hidden" id="resposta" value="1" />
                                            <input type="hidden" id="pontos" value="100" />
                                            <input type="hidden" id="correto" value="true" />

                                            <b>1 - Sobre a LGPD, quando ela entrou em vigor?</b>
                                            <input type="textarea" name="resposta" value="a" />
                                            <input type="radio" name="resposta" value="b" /> B -  Setembro/2020;
                                            <input type="radio" name="resposta" value="c" /> C - Fevereiro/2022;
                                            <input type="radio" name="resposta" value="d" /> D - Janeiro/2000.
                                            <br />

                                            <input type="submit" value="responder" />
                                        </form>

                                    </div>

                                );
                            }
                        })

                }

            </div>

            <div className="modalCreateAccount">
                <div className="formCreateAccount">
                    <div onClick={() => closeModalCreateAccount()} className="close-modal-create">X</div>
                    <h2>Criar Conta</h2>
                    <form onSubmit={(e) => createAccount(e)}>
                        <input id="email-register" type="text" placeholder="Seu e-mail..." />
                        <input id="username-register" type="text" placeholder="Seu username..." />
                        <input id="password-register" type="password" placeholder="Sua senha..." />
                        <input type="submit" value="Criar Conta!" />
                    </form>
                </div>
            </div>

            <div className="center">

                <div className="header__logo">
                    <a href=""><img src={logoespada}></img> </a>
                </div>

                {
                    (props.user) ?
                        <div className="header__loginInfo">
                            <span>Olá, <b>{props.user}</b> <img src={warrior}></img> </span>
                            <a onClick={(e) => openModalUpload(e)} href="#">Jogar</a>
                            <a onClick={(e) => logoff(e)} href="#">Sair</a>
                            <p> <img src={lgpdiners}></img> L$ {totLgpdiners}</p>
                        </div>
                        :

                        <div className="header__loginForm">

                            <form onSubmit={(e) => logon(e)}>
                                <input id="email-login" type="text" placeholder="Login..." />
                                <input id="password-login" type="password" placeholder="Senha..." />
                                <input type="submit" name="acao" value="Logar" />
                            </form>

                            <div className="btn__newAccount">
                                <a onClick={(e) => openModalCreateAccount(e)} href="#">Criar Conta!</a>
                            </div>

                        </div>

                }

            </div>

        </div >
    )
}

export default Header;