'use strict';

/* Controllers */

var mayhemControllers = angular.module('mayhemControllers', []);

mayhemControllers.controller('GlobalCtrl', ['$scope',
  function($scope) {
    $scope.globalState = {selectedTab:undefined};
  }]
);

mayhemControllers.controller('LoginCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User) {
    $scope.loginInfo = {};
    $scope.login = function(){
      if(User.doLogin($scope.loginInfo.j_username, $("[name=lpassword]").val())){
        console.log("akiiii2")
        $scope.loggedUser.uid = $scope.loginInfo.j_username;
        console.log("akiiii3")
        $scope.loggedUser.permissions = User.loadPermissions($scope.loggedUser.uid);
        console.log("akiiii5")
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

mayhemControllers.controller('Comp1Ctrl', ['$scope',
  function($scope) {
  }]
);

mayhemControllers.controller('Comp2Ctrl', ['$scope',
  function($scope) {
  }]
);