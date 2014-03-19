'use strict';

/* Services */

var mayhemServices = angular.module('mayhemServices', ['ngResource']);

mayhemServices.factory('Login', ['$resource',
  function($resource){
	return {
		doLogin : function (user,password){
			console.log("doLogin("+user+","+password+")");
			if(user == 'jose' && password == "jose"){
				return true;
			}else{
				return false;
			}
		},
		loadPermissions : function(user){
			return ['tab2','tab3']
		}
	};

  }]);
