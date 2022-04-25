let pokemonRepository = (function () {
    let repository = [
        {
            name: 'Slowpoke',
            height: 47,
            type: ['water', 'psychic']
        },
        {
            name: 'Rapidash',
            height: 67,
            type: 'fire'
        },
        {
            name: 'Grimmsnarl',
            height: 59,
            type: ['dark', 'fairy']
        } 
    ];
  
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  
    function getAll() {
      return repository;
    }
    
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function (event) {
        console.log(pokemon);
        })
    }

    function showDetails(pokemon){
        onsole.log(pokemonRepository.getAll());
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});