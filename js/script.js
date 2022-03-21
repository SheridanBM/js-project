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

// printArrayDetails function declaration
function printArrayDetails(){
    for (let i=0; i < pokemonList.length; i++){

        document.write('<p>' + pokemonList[i].name + '</p>');

        if (pokemonList[i].height === 47){
        console.log(pokemonList[i].name + ' (height: 47)');
        }else if (pokemonList[i].height === 67){
        console.log(pokemonList[i].name + ' (height: 67)');
        }else {
        console.log(pokemonList[i].name + ' (height: 59)');
        }
    }
}

// Calling printArrayDetails function twice
printArrayDetails();
printArrayDetails();