
const pokemonRepository= (function(){
  
  /* pokemon Array list  is created and assigned to a variable */
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');
  
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
    button.classList.add('btn','btn-primary');
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#pokemonModal');
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    
  }
  
  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
      showModal(
        pokemon.name,'Height: ' +pokemon.height,pokemon.imageUrl
        
      );
    });
    
  }
  
  
  function showModal(title,text,img) {
    
    modalContainer.innerHTML='';
    let modal=document.createElement('div');
    modal.classList.add('modal');
    
    //Adds the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'close';
    closeButtonElement.addEventListener('click',hideModal);
    
    let pokemonName = document.createElement('h1');
    pokemonName.innerText = title;
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = text;
    let pokemonImage = document.createElement('img');
    pokemonImage.setAttribute('src',img);
    pokemonImage.setAttribute('width','100%');
    pokemonImage.setAttribute('height','100%');
    
    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
  }
  
  function hideModal(){
    modalContainer.classList.remove('is-visible');
  }
  
  window.addEventListener('keydown',(e)=>{
    if(e.key==='Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  
  modalContainer.addEventListener('click',(e) => {
    let target= e.target;
    if(target=== modalContainer){
      hideModal();
    }
  });
  
  
  
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