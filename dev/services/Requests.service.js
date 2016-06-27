(function() {
    'use strict';
    var app = angular
        .module('AppProject');
    app.
    factory('requestsService', requestsService);
    requestsService.$inject = [
        '$http',
        '$location',
        'toaster'
    ];

    function requestsService($http, $location, toaster) {
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
            getLanguage: function(success) {
                $http.get(url + "PROGRAMMING_LANGUAGES").then(success).catch(errorCallback);
            },
            createUser: function(userData, success) {
                $http.post(url + "USERS", JSON.stringify(userData)).then(success).catch(errorCallback);
            },
            userLanguage: function(langData, success) {
                $http.post(url + "USERS_LANGUAGES", JSON.stringify(langData)).then(success).catch(errorCallback);
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
                $http.post(url + "PROJECTS_LANGUAGES", JSON.stringify(langData)).then(success).catch(errorCallback);
            },
            projectUser: function(userData, success) {
                $http.post(url + "USERS_PROJECTS", JSON.stringify(userData)).then(success).catch(errorCallback);
            },
            getProjectLanguage: function(id, success) {
                $http.get(url + 'PROJECTS_LANGUAGES?filter={"where":{"PROJECTID":' + id + '}}').then(success).catch(errorCallback);
            },
            createForum: function(data, success) {
                $http.post(url + "FORUMS", JSON.stringify(data)).then(success).catch(errorCallback);
            },
            getProjectUser: function(id, success) {
                $http.get(url + 'USERS_PROJECTS?filter={"where":{"PROJECTID":' + id + '}}').then(success).catch(errorCallback);
            },
            getProject: function(id, success) {
                $http.get(url + 'PROJECTS/' + id).then(success).catch(errorCallback);
            },
            getForums: function(success) {
                $http.get(url + "FORUMS").then(success).catch(errorCallback);
            },
            getUserById(id, success) {
                $http.get(url + "USERS/" + id).then(success).catch(errorCallback);
            },
            getForumCommentsById(id, success) {
                $http.get(url + 'FORUM_PARTICIPANTS?filter={"where":{"IDFORUM":' + id + '}}').then(success).catch(errorCallback);
            },
            postCommentInForum(data, success) {
                $http.post(url + "FORUM_PARTICIPANTS", JSON.stringify(data)).then(success).catch(errorCallback);
            },
            getProjects: function(success) {
                $http.get(url + "PROJECTS").then(success).catch(errorCallback);
            },
            getProjectsUser: function(id, success) {
                $http.get(url + 'USERS_PROJECTS?filter={"where":{"USERID":' + id + '}}').then(success).catch(errorCallback);
            },
            searchForums(value, success) {
                let str = '%7B%22where%22%3A%7B%22NAME%22%3A%7B%22like%22%3A%22%25' + value + '%25%22%7D%7D%7D';
                $http.get(url + 'FORUMS?filter=' + str).then(success).catch(errorCallback);
            }
        };
    };
})();