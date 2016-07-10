angular.module("pokemonIndex")
.service("mainServ", function($http) {
  this.catchEmAll = function(){
    return $http({
      method: "GET",
      url: "http://pokeapi.co/api/v2/pokemon"
    }).then(function(response){
      return response.data.results;
    });
  };

  this.catchOne = function(url){
    return $http({
      method: "GET",
      url: url
    }).then(function(response){
      return response.data;
    });
  };

});
