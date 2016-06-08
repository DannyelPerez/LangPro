(function() {
    "use strict";

    angular.module("AppProject")
        .controller("loginController", loginController);
    loginController.$inject = ['$stateParams'];

    function loginController($stateParams) {
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
            name: 'Boton',
            onClick: function() {
                console.log(vm.username.value);
                console.log(vm.email.value);
            }
        }
        console.log($stateParams);

    }
})();