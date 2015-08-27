//routes.js
angular.module('myApp')
  .config(appRoutes);

//Inject routeProvider into appRoutes
appRoutes.$inject = ["$routeProvider"];

function appRoutes($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "js/templates/_home.html",
      controller: "BradyController",
      controllerAs: "bradyCtrl"
    })
}
