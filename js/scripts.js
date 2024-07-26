
const pokemonRepository= (function(){

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
    let button = document.createElement('button');
   button.addEventListener('click', function() {
      showDetails(pokemon);
    });
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

  }

   f

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

  function showDetails(pokemon){
    loadDetails(pokemon).then(function () {
    console.log(pokemon.name);
  });
}
  
  return{
    add:add,
    getAll:getAll,
    addListItem: addListItem,
    loadList:loadList,
    loadDetails:loadDetails
    
  };
})();

pokemonRepository.loadList().then(function(){
/* loop  that prints all pokemons with eventlistener   */
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
  
});
});