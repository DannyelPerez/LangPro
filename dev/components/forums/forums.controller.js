(function() {
    "use strict";

    angular.module("AppProject")
        .controller("forumsController", forumsController);
    forumsController.$inject = ['$state', 'requestsService'];

    function forumsController($state, requestsService) {
        var vm = this;

    }
})();