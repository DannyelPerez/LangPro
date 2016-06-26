(function() {
    "use strict";

    angular.module("AppProject")
        .controller("homeController", homeController);
    homeController.$inject = ['$state', '$mdSidenav', '$scope', 'utilities'];

    function homeController($state, $mdSidenav, $scope,utilities) {
        var vm = this;
        vm.urlTemplate = 'dev/components/home/projectsTab/projectsTab.html';
        vm.urlForums = 'dev/components/home/forumsTab/forumsTab.html';
        vm.changeCurrentTab = function(tab) {
            utilities.setCurrentTab(tab);
        }
    }
})();