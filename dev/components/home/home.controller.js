(function() {
    "use strict";

    angular.module("AppProject")
        .controller("homeController", homeController);
    homeController.$inject = ['$stateParams'];

    function homeController($stateParams) {
        var vm = this;
        vm.test = "HelloWorld";
        console.log($stateParams);
    }
})();