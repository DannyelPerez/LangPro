(function() {
    "use strict";

    angular.module("AppProject")
        .controller("projectsViewController", projectsViewController);
    projectsViewController.$inject = ['$state', '$mdSidenav', '$scope', 'requestsService'];

    function projectsViewController($state, $mdSidenav, $scope, requestsService) {
        var vm = this;
        vm.projectId = 1;

        requestsService.getProjectLanguage(vm.projectId, function(response) {
            console.log(response.data);
            vm.languages.push(response.data);
        });

        vm.arrayData = [{
            src: '../images/go.jpg'
        }, {
            src: 'https://material.angularjs.org/latest/img/washedout.png'
        }, {
            src: '../images/node.jpg'
        }];

        vm.languages = [{
            values: [],
            buffer: [],
            title: 'Languages'
        }]

        console.log(vm.languages);

        vm.users = {
            values: [],
            buffer: [],
            title: 'Users'
        }
    }
})();