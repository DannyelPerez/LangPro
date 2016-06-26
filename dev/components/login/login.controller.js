(function() {
    "use strict";

    angular.module("AppProject")
        .controller("loginController", loginController);
    loginController.$inject = ['$stateParams', 'toaster', 'authenticationService', '$state', '$rootScope'];

    function loginController($stateParams, toaster, authenticationService, $state, $rootScope) {
        var vm = this;
        authenticationService.clearCredentials();
        vm.email = {
            name: 'Email',
            model: {
                value: ''
            },
            type: 'email'
        };
        vm.password = {
            name: 'Contraseña',
            model: {
                value: ''
            },
            type: 'password'
        };

        vm.button = {
            name: 'Login',
            onClick: function() {
                authenticationService.login(vm.email.model.value, vm.password.model.value, loginSuccess);
            }
        }

        function loginSuccess(response) {
            authenticationService.setCredentials(response.data.id);
            window.localStorage['Session'] =
                $rootScope.Session = response.data.userId;
                console.log($rootScope.Session);
            $state.go('dashboard.home');
        }
    }
})();