(function() {
    "use strict";

    angular.module("AppProject")
        .controller("registerProjectViewController", registerProjectViewController);
    registerProjectViewController.$inject = ['$state', '$mdSidenav', '$scope', 'requestsService','toaster'];

    function registerProjectViewController($state, $mdSidenav, $scope, requestsService,toaster) {
        var vm = this;
        vm.langResponse = false;
        vm.userResponse = false;

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
            model:{value: ''},
            length: 100,
            messageExps: ['maxlength'],
            errorMessage: "Field should not exceed limit length",
            formname: 'submitProjectForm',
            name: 'description'

        }

        vm.inputsForm = [{
            title: 'Project Name',
            model:{value: ''},
            name: 'project'
        }, {
            title: 'Max Users',
            model:{value: ''},
            name: 'maxuser',
            type:'Numeric'
        }, {
            title: ' Git Repository ',
            model:{value: ''},
            name: 'git'
        }];

        vm.button = {
            name: 'Submit',
            onClick: function() {
                let obj = {
                    "NAME": vm.inputsForm[0].model.value,
                    "MAXUSERS": vm.inputsForm[1].model.value,
                    "REPOSITORY": vm.inputsForm[2].model.value,
                    "DESCRIPTION": vm.description.model.value,
                    "PURPOSEID": vm.purposes.values[0].id
                }
                console.log(obj);
                requestsService.createProject(obj, function(response) {
                    let projectID = response.data.id;
                    vm.languages.values.forEach(function(element, index) {
                        requestsService.projectLanguage({
                            PROJECTID: projectID,
                            LANGUAGEID: element.id
                        }, function(response) {
                            vm.langResponse = vm.languages.values.length - 1 === index ? true : false;
                            successProject();
                        });
                    });
                    vm.users.values.forEach(function(element, index) {
                        requestsService.projectUser({
                            PROJECTID: projectID,
                            USERID: element.id
                        }, function(response) {
                            vm.userResponse = vm.users.values.length - 1 === index ? true : false;
                            successProject();
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

        function successProject() {
            if (vm.langResponse && vm.userResponse) {
                toaster.pop({
                    type: 'success',
                    title: 'Success',
                    body: 'Project created successfully!',
                    showCloseButton: true
                });
            }
        }
    }
})();