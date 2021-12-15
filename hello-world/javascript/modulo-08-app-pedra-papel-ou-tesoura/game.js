const enemyOptions = document.querySelectorAll('.enemy-options div');

var elements = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var enemyOpt = "";

function validateVictory() {
    let winer = document.querySelector('.winer');

    // validacao para quando o jogador 1 escolhe papel
    if (playerOpt == "player-paper") {

        if (enemyOpt == "enemy-paper") {
            winer.innerHTML = "Empatou o Jogo!";
        } else if (enemyOpt == "enemy-rock") {
            winer.innerHTML = "Jogador 1 Venceu!";
        } else if (enemyOpt == "enemy-scissor") {
            winer.innerHTML = "Jogador 2 Venceu!";
        }

    // validacao para quando o jogador 1 escolhe pedra
    } else if (playerOpt == "player-rock") {

        if (enemyOpt == "enemy-paper") {
            winer.innerHTML = "Jogador 2 Venceu!";
        } else if (enemyOpt == "enemy-rock") {
            winer.innerHTML = "Empatou o Jogo!";
        } else if (enemyOpt == "enemy-scissor") {
            winer.innerHTML = "Jogador 1 Venceu!";
        }

    // validacao para quando o jogador 1 escolhe tesoura
    } else if (playerOpt == "player-scissor") {
        if (enemyOpt == "enemy-paper") {
            winer.innerHTML = "Jogador 1 Venceu!";
        } else if (enemyOpt == "enemy-rock") {
            winer.innerHTML = "Jogador 2 Venceu!";
        } else if (enemyOpt == "enemy-scissor") {
            winer.innerHTML = "Empatou o Jogo!";
        }
    }

}

function resetEnemy() {
    for (var z = 0; z < enemyOptions.length; z++) {
        enemyOptions[z].childNodes[0].style.opacity = 0.3;
    }
}

function enemyPlayer() {
    let rand = Math.floor(Math.random() * 3);

    resetEnemy();
    for (var y = 0; y < enemyOptions.length; y++) {
        if (y == rand) {
            enemyOptions[y].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[y].childNodes[0].getAttribute('opt');
        }
    }

    validateVictory();
}

function reseteOpacityPlayer() {
    for (var x = 0; x < elements.length; x++) {
        elements[x].style.opacity = 0.3;
    }
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (t) => {
        reseteOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        enemyPlayer();
    });
}

