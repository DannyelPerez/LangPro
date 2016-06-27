(function() {
    "use strict";

    angular.module("AppProject")
        .controller("projectsViewController", projectsViewController);
    projectsViewController.$inject = ['$state', '$mdSidenav', '$scope', 'requestsService','authenticationService' ,'$stateParams'];

    function projectsViewController($state, $mdSidenav, $scope, requestsService,authenticationService,$stateParams) {
        if(!$stateParams.params)
            $state.go('dashboard.home');
        var vm = this;
        console.log($stateParams.params);
        vm.projectId = $stateParams.params.id;
        vm.serverIsDoneLang = false;
        vm.langsAreDone = false;
        vm.serverIsDoneUser = false;
        vm.usersAreDone = false;

        vm.languagesFromServer = [{
            values: []
        }]

        vm.usersFromServer = [{
            values: []
        }]

        requestsService.getProjectUser(vm.projectId, function(response) {
            let data = response.data;
            response.data.forEach(function(element, index) {
                vm.usersFromServer[0].values.push(element.USERID);
                vm.serverIsDoneUser = data.length - 1 === index ? true : false;
                getProjectUsers();
            });
        });

        requestsService.getProject(vm.projectId, function(response) {
            let data = response.data;
            vm.projectDesc.push(data.DESCRIPTION);
        });

        requestsService.getProjectLanguage(vm.projectId, function(response) {
            let data = response.data;
            response.data.forEach(function(element, index) {
                vm.languagesFromServer[0].values.push(element.LANGUAGEID);
                vm.serverIsDoneLang = data.length - 1 === index ? true : false;
                getProjectLangs();
            });
        });

        vm.arrayData = [{
            src: '../images/go.jpg'
        }, {
            src: '../images/p.jpg'
        }, {
            src: '../images/CodingSnippet.jpg'
        }];

        requestsService.getLanguage(function(response) {
            let data = response.data;
            response.data.forEach(function(element, index) {
                vm.languages.buffer.push({
                    name: element.NAME,
                    id: element.id,
                    _lowername: element.NAME.toLowerCase()
                });
                vm.langsAreDone = data.length - 1 === index ? true : false;
                getProjectLangs();
            });
        });

        requestsService.getUser(function(response) {
            let data = response.data;
            response.data.forEach(function(element, index) {
                vm.users.buffer.push({
                    name: element.username,
                    id: element.id,
                    _lowername: element.username.toLowerCase()
                });
                vm.usersAreDone = data.length - 1 === index ? true : false;
                getProjectUsers();
            });
        });

        vm.users = {
            values: [],
            buffer: [],
            title: 'Users'
        }

        vm.languages = {
            values: [],
            buffer: [],
            title: 'Languages'
        }

        vm.langsToDisplay = [];
        vm.usersToDisplay = [];
        vm.projectDesc = [];

        function getProjectLangs() {
            if (vm.serverIsDoneLang && vm.langsAreDone) {
                for (var i = 0; i < vm.languages.buffer.length; i++) {
                    for (var j = 0; j < vm.languagesFromServer[0].values.length; j++) {
                        if (vm.languages.buffer[i].id === vm.languagesFromServer[0].values[j]) {
                            console.log(vm.languages.buffer[i].name);
                            vm.langsToDisplay.push(vm.languages.buffer[i].name);
                        }
                    }
                }
            }
        }

        function getProjectUsers() {
            if (vm.serverIsDoneUser && vm.usersAreDone) {
                for (var i = 0; i < vm.users.buffer.length; i++) {
                    for (var j = 0; j < vm.usersFromServer[0].values.length; j++) {
                        if (vm.users.buffer[i].id === vm.usersFromServer[0].values[j]) {
                            console.log(vm.users.buffer[i].name);
                            vm.usersToDisplay.push(vm.users.buffer[i].name);
                        }
                    }
                }
            }
        }
    }
})();