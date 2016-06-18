(function() {
    "use strict";

    angular.module("AppProject")
        .controller("projectsViewController", projectsViewController);
    projectsViewController.$inject = ['$state', '$mdSidenav', '$scope'];

    function projectsViewController($state, $mdSidenav, $scope) {
        var vm = this;

    }
})();