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

        requestsService.getPurpose(function(response) {
            console.log(response);
            response.data.forEach(function(element) {
                vm.purposes.buffer.push({
                    name: element.NAME,
                    id: element.id,
                    _lowername: element.NAME.toLowerCase()
                });
            });
        });

        vm.description = {
            title: 'Description',
            value: '',
            length: 100,
            messageExps: ['maxlength'],
            errorMessage: "Field should not exceed limit length",
            formname: 'submitProjectForm',
            name: 'description'

        }

        vm.inputsForm = [{
            title: 'Project Name',
            value: '',
            name: 'project'
        }, {
            title: 'Max Users',
            value: '',
            name: 'maxuser'
        }, {
            title: ' Git Repository ',
            value: '',
            name: 'git'
        }];

        vm.button = {
            name: 'Submit',
            onClick: function() {
                let obj = {
                    "NAME": vm.inputsForm[0].value,
                    "MAXUSERS": vm.inputsForm[1].value,
                    "REPOSITORY": vm.inputsForm[2].value,
                    "DESCRIPTION": vm.description.value,
                    "PURPOSEID":vm.purposes.values[0].id
                }
                console.log(obj);
                requestsService.createProject(obj, function(response) {
                    let projectID = response.data.id;
                    vm.languages.values.forEach(function(element, index) {
                        requestsService.projectLanguage({
                            PROJECTID: projectID,
                            LANGUAGEID: element.id
                        }, function(response) {

                        });
                    });
                    vm.users.values.forEach(function(element, index) {
                        requestsService.projectUser({
                            PROJECTID: projectID,
                            USERID: element.id
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

        vm.users = {
            values: [],
            buffer: [],
            title: 'Users'
        }

        vm.purposes = {
            values: [],
            buffer: [],
            title: 'Purpose'
        }
    }
})();