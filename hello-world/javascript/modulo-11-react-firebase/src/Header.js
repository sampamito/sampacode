
function Header(props){
    
    return(
        <div className="header">

        <div className="center">

          <div className="header__logo">
            <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/320px-Instagram_logo.svg.png"></img> </a>
          </div>

          {
            (props.user) ?
              <div className="header__loginInfo">
                <span>Olá, <b>{props.user}</b></span>
                <a href="#">Postar</a>
              </div>
              :

              <div className="header__loginForm">
                
                <form>
                  <input type="text" placeholder="Login..." />
                  <input type="password" placeholder="Senha..." />
                  <input type="submit" name="acao" value="Logar" />
                </form>

                <div className="btn__newAccount">
                  <a href="#">Criar Conta!</a>
                </div>

              </div>
          }

        </div>

      </div>
    )
}

export default Header;