(function() {
    "use strict";

    angular.module("AppProject")
        .controller("loginController", loginController);
    loginController.$inject = ['$stateParams', 'toaster'];

    function loginController($stateParams, toaster) {
        var vm = this;
        vm.username = {
            name: 'Username',
            value: ''
        };
        vm.email = {
            name: 'Email',
            value: ''
        };

        vm.button = {
            name: 'Login',
            onClick: function() {
                console.log(vm.username.value);
                console.log(vm.email.value);
            }
        }
        console.log($stateParams);
        toaster.pop({
                type: 'error',
                title: 'Title text',
                body: 'Body text',
                showCloseButton: true
            });
    }
})();