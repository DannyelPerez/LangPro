(function() {
    "use strict";

    angular.module("AppProject")
        .controller("loginController", loginController);
    loginController.$inject = [];

    function loginController() {
        var vm = this;
        vm.log = "This is the login";
    }
})();