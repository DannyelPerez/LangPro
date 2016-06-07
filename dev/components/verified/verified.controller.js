(function() {
    "use strict";

    angular.module("AppProject")
        .controller("verifiedController", verifiedController);
    verifiedController.$inject = ['$stateParams','$location'];

    function verifiedController($stateParams,$location) {
        var vm = this;
        console.log($stateParams);
        console.log($location);
    }
})();