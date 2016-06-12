(function() {
    "use strict";

    angular.module("AppProject")
        .controller("registrationController", registrationController);
    registrationController.$inject = ['$state', 'requestsService'];

    function registrationController($state, requestsService) {
        var vm = this;
        requestsService.getLanguage(function(response) {
            response.data.forEach(function(element) {
                vm.languages.buffer.push({
                    name: element.NAME,
                    id: element.id,
                    _lowername: element.NAME.toLowerCase()
                });
            });
        });

        vm.inputsForm = [{
            name: 'Name',
            value: ''
        }, {
            name: 'Username',
            value: ''
        }, {
            name: 'Email ',
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

        vm.button = {
            name: 'Register',
            onClick: function() {
                let obj = {
                    "realm": vm.inputsForm[0].value,
                    "username": vm.inputsForm[1].value,
                    "email": vm.inputsForm[2].value,
                    "password": vm.inputsForm[3].value
                }
                requestsService.createUser(obj, function(response) {
                    vm.languages.values.forEach(function(element, index) {
                        requestsService.userLanguage({
                            USERID: response.data.id,
                            LANGUAGEID: element.id
                        }, function(response) {

                        });
                    });
                });
            }
        }

        vm.languages = {
            values: [],
            buffer: [],
            title: 'Languages'
        }

    }
})();