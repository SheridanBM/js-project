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

Object.keys(pokemonList).forEach(function(property) {
    document.write(property + ': ' + pokemonList[property] + '<br>');
  });