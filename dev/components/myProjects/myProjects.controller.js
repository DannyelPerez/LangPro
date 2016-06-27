(function() {
    "use strict";

    angular.module("AppProject")
        .controller("myProjectsController", myProjectsController);
    myProjectsController.$inject = ['$state', 'requestsService','$stateParams'];

    function myProjectsController($state, requestsService,$stateParams) {
        console.log($stateParams.params);
        if(!$stateParams.params)
            $state.go('dashboard.home');
        var vm = this;
        vm.currentUser = $stateParams.params.id;
        vm.projects = [];
        vm.cards = [];
        vm.serverIsDoneProjects = false;
        vm.userProjects = [];

        requestsService.getProjectsUser(vm.currentUser, function(response) {
            let data = response.data;
            response.data.forEach(function(element, index) {
                vm.projects.push(element.PROJECTID);
                vm.serverIsDoneProjects = data.length - 1 === index ? true : false;
            });
            getProjects(vm.projects);
        });


        function getProjects(ids) {
            ids.forEach(function(element1) {
                requestsService.getProject(element1, function(response) {
                    let data = response.data;
                    console.log(data);
                    console.log(element1);
                    vm.cards.push({
                        title: data.NAME,
                        desc: data.DESCRIPTION,
                        data: data,
                        onClick: function(data) {
                            let params = {
                                params: data
                            };
                            $state.go('dashboard.projectsView', params);

                        },
                        image: 'https://material.angularjs.org/latest/img/washedout.png'
                    });
                });
            });
        }

    }
})();