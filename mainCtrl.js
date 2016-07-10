angular.module("pokemonIndex")
.controller("mainCtrl", function($scope, mainServ) {
  $scope.pokemon;
  $scope.onePokemon;

  $scope.catchEmAll = function(){
    console.log("all");
    mainServ.catchEmAll()
    .then(function(response){
      console.log(response);
      $scope.pokemon = response;
    })
  };
  $scope.catchEmAll();
  $scope.catchOne = function(url){
    console.log("one", url);
    mainServ.catchOne(url)
    .then(function(response){
      console.log(response);
      $scope.onePokemon = response;
    });
  };
});
