let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  //Adding pokemon to list
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon 
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  
    function getAll() {
      return pokemonList;
    }

    function addListItem(pokemon){
        let pokemonList = document.querySelector('.list-group');
        let listpokemon = document.createElement('li');
        listpokemon.classList.add("col-sm-8");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function (event) {
          showDetails(pokemon);
        });
    }

    button.classList.add('btn', 'btn-block', 'btn-outline-primary');
    button.classList.add('m-1', 'bg-blue', 'text-capitalize');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '.modal');

    listItem.appendChild(button);
    ul.appendChild(listItem);

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
      
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        showModal(pokemon);
      });
    }

    //Closes modal with Escape button
    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector('.modal-content');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });

    document.querySelector('#show-modal').addEventListener('click', () => {
      showModal();
    });
    
    
    document.querySelector('#show-modal').addEventListener('click', () => {
      showModal('Modal title', 'This is the modal content!');
    });
    
    return {  
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
    };

    function showModal(pokemon) {
      let modalTitle = $('modal-title');
      let modalBody = $('.modal-body');
    
      modalTitle.empty();
      modalBody.empty();

      //creating name as title in the modal
      let titleElement = $('<h1>' + item.name + '</h1>');
      //adding picture of pokemon to modal
      let imageElement = $()
      //adding height of pokemon to modal
      let contentElement = $('<p>' + 'height :' + pokemon.height + '</p>');



      modalTitle.appendChild(titleElement);//Add title to modal
      modal.appendChild(contentElement);//Add content to modal
      modal.appendChild(imageElement);//Add image to modal
      modalContainer.appendChild(modal)
    
      modalContainer.classList.add('is-visible');
    }

    

    function hideModal() {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
    }
  })();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
