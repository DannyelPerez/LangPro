(function() {
    'use strict';
    var app = angular
        .module('AppProject');
    app.
    factory('authenticationService', authenticationService);
    authenticationService.$inject = [
        '$http',
        '$location',
    ];

    function authenticationService($http, $location) {
        var url = $location.$$protocol + "://" + path.$$host + ":" + path.$$port + "/QM/oData";
        return {
        	confirmEmail: function(uid, token, handleSuccess){
        		let url = webApiUrl 
        		$http.get(url).then(successCallback)
                      .catch(errorCallback);
        	}
        };
    };
})();