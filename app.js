angular.module("pokemonIndex", ["ui.router"])
.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./templates/home.html"
    })
    .state("list", {
      url: "/list",
      templateUrl: "./templates/list.html"
    })
    .state("one", {
      url: "/one/:id",
      templateUrl: "./templates/one.html"
    })

    ;
  $urlRouterProvider
    .otherwise("/");
});
