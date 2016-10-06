angular.module("pokemonApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeCtrl"
    })
    .state("list", {
      url: "/list",
      templateUrl: './views/list.html',
    })
    .state("individual", {
      url: "/individual",
      templateUrl: './views/individual.html',
    });

$urlRouterProvider.otherwise('/');

});
