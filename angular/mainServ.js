angular.module("pokemonApp")
.service("mainServ", function($http){

this.getPoke = function(){
  return $http({
    method: "GET",
    url: "http://pokeapi.co/api/v2/pokemon"
  }).then(function(response){
    return response.data.results;
  });
}

//   this.getPokeTwo = function() {
//     return $http({
//       method: "GET",
//       url: "http://pokeapi.co/api/v2/pokemon/2/"
//     }).then(function(response){
//       return response.data.results;
//     });
// }

});
