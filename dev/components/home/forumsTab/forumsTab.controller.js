(function() {
    "use strict";

    angular.module("AppProject")
        .controller("forumsTabController", forumsTabController);
    forumsTabController.$inject = ['$state', '$mdSidenav', '$scope', 'requestsService'];

    function forumsTabController($state, $mdSidenav, $scope, requestsService) {
        var vm = this;

    }
})();