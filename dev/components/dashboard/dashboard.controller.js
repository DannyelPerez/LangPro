(function() {
    "use strict";

    angular.module("AppProject")
        .controller("dashboardController", dashboardController);
    dashboardController.$inject = ['$state', '$mdSidenav', '$scope'];

    function dashboardController($state, $mdSidenav, $scope) {
        var vm = this;
        vm.test = "HelloWorld";
        vm.currentNavItem = 'home';

        vm.redirectLogin = function() {
            $state.go("dashboard.login", {});
        }
        vm.redirectProject = function() {
            $state.go("dashboard.project", {});
        }

        $scope.showMobileMainHeader = true;
        vm.openSideNavPanel = function() {
            $mdSidenav('left').open();
        };
        vm.closeSideNavPanel = function() {
            $mdSidenav('left').close();
        };
    }
})();