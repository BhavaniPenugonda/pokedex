
let pokemonRepository= (function(){
  
  /* pokemon Array list  is created and assigned to a variable */
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  /*Get all pokemons*/
  function getAll(){
    return pokemonList;
  }
  
  function add(pokemon){
    pokemonList.push(pokemon);
  }
  /* prints the pokemon name, when pokemon button is clicked */
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    listpokemon.classList.add('list-group-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn','btn-primary');
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#pokemonModal');

    
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    
  }
  
  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
      showModal(
        pokemon.name,pokemon.height,pokemon.imageUrl
        
      );
    });
    
  }
  
  
  
  function showModal(name,height,img) {
    let  modalTitle= document.querySelector('.modal-title');
    let modalBody= document.querySelector('.modal-body');
    modalTitle.innerText = name;
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = 'Height: ' + height;
    let modalImage = document.createElement('img');
    modalImage.src = img ;
    modalBody.innerHTML = '';
    modalBody.appendChild(pokemonHeight);
    modalBody.appendChild(modalImage);
    
  }
  
  
  
  
  
  function loadList() {
    return fetch(apiUrl).then(function(response){
      return response.json(); 
    }).then(function(json) {
      json.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e){
      console.error(e);
    })
  }
  
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details){
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e){
      console.error(e);
    });
  }
  
  
  
  return{
    add:add,
    getAll:getAll,
    addListItem: addListItem,
    showDetails:showDetails,
    loadList:loadList,
    loadDetails:loadDetails
    
  };
})();

pokemonRepository.loadList().then(function(){
  /* loop  that prints all pokemons   */
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    
  });
});