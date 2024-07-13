
//pokemon list in array //
let pokemonList = [
  {name :'Pikachu', height:0.4, type : ['electric']},
  {name :'Pidgeot', height:1.5, type : ['Flying','Normal']},
  {name :'Caterpie', height:0.3, type : ['Bug']}
];

//prints the pokemon lists and tells which is big pokemon //
for(let i=0;i<pokemonList.length;i++) {
  let bigPokemon = '-Wow,that\'s big!'
  let pokemon =  pokemonList[i].name  + '(height: ' +  pokemonList[i].height +  ')';
  if(pokemonList[i].height>1){
   document.write('<p>' + pokemon + bigPokemon +'</p>');
  }
  else {
    document.write('<p>' + pokemon + '</p>');
  }

}
