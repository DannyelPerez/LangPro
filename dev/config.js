(function() {
    "use strict";

    angular.module("AppProject").config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {
        setupRoutes($stateProvider, $urlRouterProvider);
    }

    function setupRoutes($stateProvider, $urlRouterProvider) {
        let templatesUrl = "dev/components/";
        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state("dashboard.home", {
                url: "/home",
                templateUrl: templatesUrl + "home/home.html",
                controller: "homeController as vm"
            })
            .state("login", {
                url: "/login",
                templateUrl: templatesUrl + "login/login.html",
                controller: "loginController as vm"
            })
            .state("dashboard.projectsView", {
                url: "/projectsView",
                templateUrl: templatesUrl + "projectsView/projectsView.html",
                controller: "projectsViewController as vm"
            })
            .state("dashboard.registerProjectView", {
                url: "/registerProjectView",
                templateUrl: templatesUrl + "registerProjectView/registerProjectView.html",
                controller: "registerProjectViewController as vm"
            })
            .state("verified", {
                url: "/verified/{uid}/&token={token}",
                templateUrl: templatesUrl + "verified/verified.html",
                controller: "verifiedController as vm"
            })
            .state("registration", {
                url: "/registration",
                templateUrl: templatesUrl + "registration/registration.html",
                controller: "registrationController as vm"
            })
            .state("dashboard", {
                templateUrl: templatesUrl + "dashboard/dashboard.html",
                controller: "dashboardController as vm"
            });
    }

})();