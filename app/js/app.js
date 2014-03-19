'use strict';

/* App Module */
var mayhemApp = angular.module('mayhemApp', [
  'ngRoute',
  'mayhemControllers',
  'mayhemServices'
]);

mayhemApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/tab1.html',
        controller: 'Tab1Ctrl'
      }).
      when('/tab1', {
        templateUrl: 'partials/tab1.html',
        controller: 'Tab1Ctrl'
      }).
      when('/tab2', {
        templateUrl: 'partials/tab2.html',
        controller: 'Tab2Ctrl'
      }).
       when('/tab3', {
        templateUrl: 'partials/tab3.html',
        controller: 'Tab3Ctrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]).run( function($rootScope, $location, $http, Login) {

    console.log("-----"+Login);
    $rootScope.loggedUser = {uid : undefined,
                             permissions: undefined};
    //TODO Llamar para ver si está logado ya y cargar el contexto loggedUser en la vista
    //TODO
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( $rootScope.loggedUser.uid == undefined ) {
        console.log("no logged user")
        if ( next.templateUrl == "partials/login.html" ) {
          console.log("already asking for login.htmnl")
        } else {
          console.log("redirecting to /")
          $location.path( "/" );
        }
      }else{
        if(next.templateUrl){
          var page = next.templateUrl;
          page = page.replace("partials/","").replace(".html","");
          console.log("we3"+$rootScope.loggedUser.permissions.indexOf(page));
          if($rootScope.loggedUser.permissions.indexOf(page)==-1){
            $location.path( "/"+ $rootScope.loggedUser.permissions[0]);
          }
        }
      }      
    });
  });