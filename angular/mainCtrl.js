angular.module("pokemonApp")
.controller("mainCtrl", function($scope, mainServ){

  $scope.getPoke = function(){
    mainServ.getPoke()
    .then(function(response){
      $scope.data=response;
    })
  };
  $scope.getPoke();

  // $scope.getPokeTwo = function(){
  //   mainServ.getPokeTwo()
  //   .then(function(response){
  //     $scope.data=response;
  //   })
  // };
  // $scope.getPokeTwo();

});
