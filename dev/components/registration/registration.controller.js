(function() {
    "use strict";

    angular.module("AppProject")
        .controller("registrationController", registrationController);
    registrationController.$inject = ['$state'];

    function registrationController($state) {
        var vm = this;
        vm.inputsForm = [{
            name: 'Username',
            value: ''
        }, {
            name: 'Email',
            value: ''
        }, {
            name: 'Password',
            value: '',
            type: 'password'
        }, {
            name: 'Password Confirm',
            value: '',
            type: 'password'
        }];

        vm.datepicker = {
            name: 'picker',
            value: ''
        }
        vm.chips = {
            contents:'',
            readonly:'readonly'
        }
        vm.button = {
            name: 'Register',
            onClick: function() {
                $state.go('login', {
                    param1: 'esta',
                    para2: 'es tuya'
                });
            }
        }

    }
})();