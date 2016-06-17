(function() {
    "use strict";

    angular.module("AppProject")
        .controller("singleProjectViewController", singleProjectViewController);
    singleProjectViewController.$inject = ['$state', '$mdSidenav', '$scope'];

    function singleProjectViewController($state, $mdSidenav, $scope) {
        var vm = this;

    }
})();