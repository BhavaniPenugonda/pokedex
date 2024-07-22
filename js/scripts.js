
const pokemonRepository= (function(){


  let pokemonList = [
    {name :'Pikachu', height:0.4, type : ['electric']},
    {name :'Pidgeot', height:1.5, type : ['Flying','Normal']},
    {name :'Caterpie', height:0.3, type : ['Bug']}
  ];


  function getAll(){
    return pokemonList;
  }

  function add(pokemon){
    pokemonList.push(pokemon);
  }

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



  function showDetails(pokemon){
    console.log(pokemon.name);
  }
  
  return{
    add:add,
    getAll:getAll,
    addListItem: addListItem
    
  };
})();


pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
  
});