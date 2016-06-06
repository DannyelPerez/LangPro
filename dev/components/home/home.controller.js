(function() {
    "use strict";

    angular.module("AppProject")
        .controller("homeController", homeController);
    homeController.$inject = [];

    function homeController() {
        var vm = this;
        vm.test = "He   llo         World";
    }
})();