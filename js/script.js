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

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height <48 && pokemonList[i].height >46){
      console.log(pokemonList[i].name + " (height: 47)");
    }else if (pokemonList[i].height <68){
      console.log(pokemonList[i].name + " (height: 67)");
    }else {
      console.log(pokemonList[i].name + " (height: 59)");
    }
  }
