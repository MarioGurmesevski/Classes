const pokemonListEl = document.querySelector(".pokemon-list");
const pokemonCardEl = document.querySelector(".pokemon-card");

console.log(pokemonListEl, pokemonCardEl);

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

function fetchPokemons() {
  fetch(POKEMON_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      renderPokemonList(pokemonListEl, data.results);
    });
}

function renderPokemonDetails(cardElement, pokemonDetailsData){
cardElement.innerHTML`<h3>${pokemonDetailsData.name}</h3>
<img src=${pokemonDetailsData.sprites.front_default} alr="Image of a pokemon" />`;
}

function fetchPokemonByUrl(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function renderPokemonList(listElement, pokemonData) {
  for (let el of pokemonData) {
    const newLi = document.createElement("LI");
    newLi.textContent = el.name;
    listElement.appendChild(newLi);
    newLi.addEventListener("click", function () {
      fetchPokemonByUrl(el.url);
    });
  }
}

fetchPokemons();
