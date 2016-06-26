(function() {
    "use strict";

    angular.module("AppProject")
        .controller("registerProjectViewController", registerProjectViewController);
    registerProjectViewController.$inject = ['$state', '$mdSidenav', '$scope', 'requestsService'];

    function registerProjectViewController($state, $mdSidenav, $scope, requestsService) {
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

        requestsService.getUser(function(response) {
            console.log(response);
            response.data.forEach(function(element) {
                vm.users.buffer.push({
                    name: element.username,
                    id: element.id,
                    _lowername: element.username.toLowerCase()
                });
            });
        });

        vm.inputsForm = [{
            name: 'Project Name',
            value: ''
        }, {
            name: 'Max Users',
            value: ''
        }, {
            name: ' Git Repository ',
            value: ''
        }];

        vm.button = {
            name: 'Submit',
            onClick: function() {

            }
        }

        vm.languages = {
            values: [],
            buffer: [],
            title: 'Languages'
        }

         vm.users = {
            values: [],
            buffer: [],
            title: 'Users'
        }
    }
})();