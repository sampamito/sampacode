
/**
 * tratamento para nao executar a funcao antes de carregar
 * toda a DOM totalmente
 */
window.onload = () => {
    var quantity = document.getElementById("quantity");
    quantity.addEventListener("keyup", () => {
        getPokemons(quantity.value);
    });
}

/**
 * funcao getPokemons
 * @param {quantidade de pokemons a buscar na api} number 
 */
function getPokemons(number) {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=' + number)
        .then(response => response.json())
        .then(allpokemon => {

            var pokemons = [];

            allpokemon.results.map((val) => {

                fetch(val.url)
                    .then(response => response.json())
                    .then(pokemonSingle => {

                        pokemons.push({ name: val.name, image: pokemonSingle.sprites.front_default });

                        if (pokemons.length == number) {

                            var pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = "";

                            pokemons.map((val) => {
                                pokemonBoxes.innerHTML += `
                            <div class="pokemon-box">
                                <img src="${val.image}" />
                                <p>${val.name}</p>
                                </div>
                            `;

                            })

                        }

                    })

            })

        })
}