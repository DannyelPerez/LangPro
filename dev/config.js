(function() {
    "use strict";

    angular.module("AppProject").config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {
        setupRoutes($stateProvider, $urlRouterProvider);
    }

    function setupRoutes($stateProvider, $urlRouterProvider) {
        let templatesUrl = "dev/components/";
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: templatesUrl + "home/home.html",
                controller: "homeController as vm"
            })
            .state("login", {
                url: "/login",
                templateUrl: templatesUrl + "login/login.html",
                controller: "loginController as vm"
            });
    }

})();