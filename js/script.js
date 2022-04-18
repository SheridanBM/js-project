/*let pokemonList = [
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

// printArrayDetails function declaration
function printArrayDetails(){
    for (let i=0; i < pokemonList.length; i++){
        if (pokemonList[i].height < 50){
            document.write('<p>' + pokemonList[i].name + " - a small one" + '</p>');
        }else if (pokemonList[i].height > 60){
            document.write('<p>' + pokemonList[i].name + " - a big one" + '</p>');
        }else {
            document.write('<p>' + pokemonList[i].name + " - is normal size" + '</p>');
        }
    }
}

// Calling printArrayDetails function twice
printArrayDetails();
printArrayDetails();

(function(){

    let pokemonList = [
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

    pokemonList.forEach(function(pokemon) {
        document.write('<p>' + pokemon.name + ' is ' + pokemon.height + ' inches tall' + '</p>');
    });
})()
*/

let pokemonRepository = (function () {
    let pokemonList = [
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
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    return {
      add: add,
      getAll: getAll
    };
  });
  
  const data = pokemonRepository();
  
  console.log( "Data", data );
  console.log( "All data", data.getAll() );
  const newPoke = {
    name : 'Pikachu',
    height : 45,
    type : 'electric'