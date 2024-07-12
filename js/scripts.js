
//pokemon list in array //
let pokemonList = [
  {name :'Pikachu', height:0.4, type : ['electric']},
  {name :'Pidgeot', height:1.5, type : ['Flying','Normal']},
  {name :'Caterpie', height:0.3, type : ['Bug']}
];

//conditional loop that prints the Pokemon list and tells which is the big pokemon//
for(let i=0;i<pokemonList.length;i++) {
   document.write('<p>'+  pokemonList[[i]].name  + '(height: ' +  pokemonList[i].height +  ')');
   if(pokemonList[i].height>1){
    document.write('-Wow,that\'s big');
   }

}