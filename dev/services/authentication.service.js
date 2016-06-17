(function() {
    'use strict';
    var app = angular
        .module('AppProject');
    app.
    factory('authenticationService', authenticationService);
    authenticationService.$inject = [
        '$http',
        '$location',
        'toaster'
    ];

    function authenticationService($http, $location, toaster) {
        var url = "http://backendfindmecoworker.herokuapp.com/api/";

        function errorCallback(response) {
            toaster.pop({
                type: 'error',
                title: response.data.error.name,
                body: response.data.error.message,
                showCloseButton: true
            });
        }
        return {
            confirmEmail: function(uid, token, successCallback) {
                $http.get(url + 'USERS/confirm?uid=' + uid + '&token=' + token).then(successCallback)
                    .catch(errorCallback);
            }
        };
    };
})();