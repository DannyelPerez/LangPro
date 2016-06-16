(function() {
    "use strict";

    angular.module("AppProject")
        .controller("projectController", projectController);
    projectController.$inject = ['$state', '$mdSidenav', '$scope'];

    function projectController($state, $mdSidenav, $scope) {
        var vm = this;
        vm.imagePath = 'https://material.angularjs.org/latest/img/washedout.png';
    }
})();
