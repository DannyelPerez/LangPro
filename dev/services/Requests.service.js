(function() {
    'use strict';
    var app = angular
        .module('AppProject');
    app.
    factory('requestsService', requestsService);
    requestsService.$inject = [
        '$http',
        '$location',
    ];

    function requestsService($http, $location) {
        var url = "http://backendfindmecoworker.herokuapp.com/api/";
        function errorCallback(response){
            console.log(response);
        }
        return {
            getLanguage: function(success){
                $http.get(url+"PROGRAMMING_LANGUAGES").then(success).catch(errorCallback);
            },
            createUser:function(userData,success){
                $http.post(url+"USERS",JSON.stringify(userData)).then(success).catch(errorCallback);
            },
            userLanguage:function(langData,success){
                $http.post(url+"USERS_LENGUAGES",JSON.stringify(langData)).then(success).catch(errorCallback);
            },
            getUser: function(success){
                $http.get(url+"USERS").then(success).catch(errorCallback);
            }
        };
    };
})();