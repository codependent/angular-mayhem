'use strict';

/* Controllers */

var mayhemControllers = angular.module('mayhemControllers', []);

mayhemControllers.controller('GlobalCtrl', ['$scope',
  function($scope) {
    $scope.globalState = {selectedTab:undefined};
  }]
);

mayhemControllers.controller('LoginCtrl', ['$scope', '$location', 'Login',
  function($scope, $location, Login) {
    $scope.loginInfo = {};
    $scope.login = function(){
      if(Login.doLogin($scope.loginInfo.j_username, $("[name=lpassword]").val())){
        $scope.loggedUser.uid = $scope.loginInfo.j_username;
        $scope.loggedUser.permissions = Login.loadPermissions($scope.loggedUser.uid);
        $location.path( "/"+$scope.loggedUser.permissions[0]);
      }
     }
   }]
);

mayhemControllers.controller('Tab1Ctrl', ['$scope',
  function($scope) {
    $scope.globalState.selectedTab = 'tab1';
  }]
);

mayhemControllers.controller('Tab2Ctrl', ['$scope',
  function($scope) {
    $scope.globalState.selectedTab = 'tab2';
  }]
);

mayhemControllers.controller('Tab3Ctrl', ['$scope',
  function($scope) {
    $scope.globalState.selectedTab = 'tab3';
  }]
);