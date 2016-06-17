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
        var url = "http://backendfindmecoworker.herokuapp.com/api/";

        function errorCallback(response) {
            console.log(response);
        }
        return {
            confirmEmail: function(uid, token, handleSuccess) {
                let url = webApiUrl
                $http.get(url + 'USERS/confirm(object={"uid":' + uid + ',"token":' + token + '})').then(successCallback)
                    .catch(errorCallback);
            }
        };
    };
})();