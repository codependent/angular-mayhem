'use strict';

/* Services */

var mayhemServices = angular.module('mayhemServices', ['ngResource']);

mayhemServices.factory('User', ['$resource',
  function($resource){
    /*return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });*/

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
			return ['tab1','tab3']
		}
	};

  }]);
