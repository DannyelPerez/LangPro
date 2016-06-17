(function() {
    "use strict";

    angular.module("AppProject")
        .controller("loginController", loginController);
    loginController.$inject = ['$stateParams', 'toaster', 'authenticationService', '$state','$rootScope'];

    function loginController($stateParams, toaster, authenticationService, $state,$rootScope) {
        var vm = this;
        authenticationService.clearCredentials();
        vm.email = {
            name: 'Email',
            value: '',
            type: 'email'
        };
        vm.password = {
            name: 'Contraseña',
            value: '',
            type: 'password'
        };

        vm.button = {
            name: 'Login',
            onClick: function() {
                authenticationService.login(vm.email.value, vm.password.value, loginSuccess);
            }
        }

        function loginSuccess(response) {
            authenticationService.setCredentials(response.data.id);
            window.localStorage['Session'] =
                $rootScope.Session = response.data.userId;
            $state.go('dashboard.home');
        }
    }
})();