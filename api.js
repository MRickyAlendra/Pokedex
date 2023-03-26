const poke_container = document.getElementById("poke_container");
const bg_color = {
  grass: "#33FF47",
  fire: "#FFAC33",
  water: "#33F6FF",
  electric: "#33B9FF",
  rock: "#D16040",
  fairy: "#F365FF",
  poison: "#1AA04B",
  bug: "#24A906",
  flying: "#18AEDB",
  fighting: "#EC2828",
  dragon: "#FF9800",
  physic: "#FFFB00",
  ground: "#C14D2C",
  normal: "#00000",
};
const border_color = {
  grass: "#29DF3B",
  fire: "#E79B2E",
  water: "#2CDFE7",
  electric: "#2AA0DD",
  rock: "#B95538",
  fairy: "#C752D0",
  poison: "#15833D",
  bug: "#1E8E05",
  flying: "#1193BA",
  fighting: "#CE2424",
  dragon: "#D07C00",
  physic: "#D4D100",
  ground: "#A44125",
  normal: "#FFFFFF",
};

const main_types = Object.keys(bg_color);

const fetchPokemons = async (pokemons_number) => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  console.log(pokemon.sprites.front_default);
  createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const poke_id = pokemon.id;
  const poke_types = pokemon.types.map((el) => el.type.name);
  const typee = main_types.find((type) => poke_types.indexOf(type) > -1);
  const type = typee[0].toUpperCase() + typee.slice(1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const image = pokemon.sprites.front_default;
  const bgcolor = bg_color[typee];
  const bdcolor = border_color[typee];

  console.log(typee);

  pokemonEl.style.backgroundColor = bgcolor;
  pokemonEl.style.borderColor = bdcolor;

  const pokeInnerHTML = `
        <div class="img-container">
			<p style="margin-top: 0;">${poke_id}</p>
            <img src="${image}">
            <p>${name}</p>
            <small class="type">Type: <span>${type}</small>
        </div>
    `;

  pokemonEl.innerHTML = pokeInnerHTML;
  poke_container.appendChild(pokemonEl);
}
