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

        function errorCallback(response) {
            console.log(response);
        }
        return {
            getLanguage: function(success) {
                $http.get(url + "PROGRAMMING_LANGUAGES").then(success).catch(errorCallback);
            },
            createUser: function(userData, success) {
                $http.post(url + "USERS", JSON.stringify(userData)).then(success).catch(errorCallback);
            },
            userLanguage: function(langData, success) {
                $http.post(url + "USERS_LENGUAGES", JSON.stringify(langData)).then(success).catch(errorCallback);
            },
            getUser: function(success) {
                $http.get(url + "USERS").then(success).catch(errorCallback);
            },
            getPurpose: function(success) {
                $http.get(url + "PURPOSES").then(success).catch(errorCallback);
            },
            createProject: function(projectData, success) {
                $http.post(url + "PROJECTS", JSON.stringify(projectData)).then(success).catch(errorCallback);
            },
            projectLanguage: function(langData, success) {
                $http.post(url + "PROJECTS_LENGUAGES", JSON.stringify(langData)).then(success).catch(errorCallback);
            },
            projectUser: function(userData, success) {
                $http.post(url + "USERS_PROJECTS", JSON.stringify(userData)).then(success).catch(errorCallback);
            }
        };
    };
})();