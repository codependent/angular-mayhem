'use strict';

/* Controllers */

var mayhemComponents = angular.module('mayhemComponents', []);



mayhemComponents.controller('Comp1Ctrl', ['$scope',
  function($scope) {
	$scope.clicks = 0;
	$scope.click = function(){
		console.log("Global variable in comp1: ");
		console.log($scope.globalState);
		$scope.clicks++;
	}
  }]
);

mayhemComponents.controller('Comp2Ctrl', ['$scope',
  function($scope) {
	$scope.clicks = 0;
	$scope.click = function(){
		$scope.clicks++;
	}
  }]
);

mayhemComponents.controller('Comp3Ctrl', ['$scope',
   function($scope) {
 	$scope.clicks = 0;
 	$scope.click = function(){
 		$scope.clicks++;
 	}
   }]
 );

mayhemComponents.controller('Comp4Ctrl', ['$scope',
   function($scope) {
 	$scope.clicks = 0;
 	$scope.click = function(){
 		$scope.clicks++;
 	}
   }]
 );

mayhemComponents.controller('Comp5Ctrl', ['$scope',
   function($scope) {
 	$scope.clicks = 0;
 	$scope.click = function(){
 		$scope.clicks++;
 	}
   }]
 );

mayhemComponents.controller('Comp6Ctrl', ['$scope',
   function($scope) {
 	$scope.clicks = 0;
 	$scope.click = function(){
 		$scope.clicks++;
 	}
   }]
 );