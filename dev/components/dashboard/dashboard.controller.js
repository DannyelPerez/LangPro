(function() {
    "use strict";

    angular.module("AppProject")
        .controller("dashboardController", dashboardController);
    dashboardController.$inject = ['$state', '$mdSidenav', '$scope'];

    function dashboardController($state, $mdSidenav, $scope) {
        var vm = this;
        vm.test = "HelloWorld";
        vm.currentNavItem = 'home';
        vm.isActive = false;
        vm.simulateQuery = true;

        vm.redirectLogin = function() {
            $state.go("dashboard.login", {});
        }
        vm.redirectProject = function() {
            $state.go("dashboard.projects_view", {});
        }

        $scope.showMobileMainHeader = true;
        vm.openSideNavPanel = function() {
            $mdSidenav('left').open();
        };
        vm.closeSideNavPanel = function() {
            $mdSidenav('left').close();
        };
        vm.showSearchbar = function() {
            if (vm.isActive) {
                vm.isActive = false;
            } else {
                vm.isActive = true;
            }
        };

        vm.myFunct = function(keyEvent) {
            if (keyEvent.which === 23)
                alert('I am an alert');
        };

        vm.printOut= function(){
            Console.log("A key has been pressed");
        }
    }
})();