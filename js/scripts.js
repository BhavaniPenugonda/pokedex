
// pokemon list in array //
let pokemonRepository= (function(){
  let pokemonList = [
    {name :'Pikachu', height:0.4, type : ['electric']},
    {name :'Pidgeot', height:1.5, type : ['Flying','Normal']},
    {name :'Caterpie', height:0.3, type : ['Bug']}
  ];
  
  function add(pokemon){
    pokemonList.push(pokemon);
  }
  
  function getAll(){
    return pokemonList;
  }
  
  return{
    add:add,
    getAll:getAll
    
  };
})();



pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name   +  '(height: ' +  pokemon.height +  ')');
  if(pokemon.height>1){
    document.write('-Wow,that\'s big!');
  }
});