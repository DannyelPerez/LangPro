(function() {
    "use strict";

    angular.module("AppProject")
        .controller("projectsTabController", projectsTabController);
    projectsTabController.$inject = ['$state', '$mdSidenav', '$scope', 'requestsService', 'utilities'];

    function projectsTabController($state, $mdSidenav, $scope, requestsService, utilities) {
        var vm = this;

        $state.params.reloadProjectsCards = function() {
            vm.cards = [];
            if (!$state.params.searchInput) {
                requestsService.getProjects(function(response) {
                    for (let i = 0; i < response.data.length; i++) {
                        vm.cards.push({
                            title: response.data[i].NAME,
                            desc: response.data[i].DESCRIPTION,
                            data: response.data[i],
                            onClick: function(data) {
                                let params = {
                                    params: data
                                };
                                $state.go('dashboard.projectsView', params);

                            },
                            image: utilities.getImage()
                        });
                    }
                    $state.params.addCards();
                });
            } else {
                requestsService.searchProjects($state.params.searchInput, function(response) {
                    for (let i = 0; i < response.data.length; i++) {
                        vm.cards.push({
                            title: response.data[i].NAME,
                            desc: response.data[i].DESCRIPTION,
                            data: response.data[i],
                            onClick: function(data) {
                                let params = {
                                    params: data
                                };
                                $state.go('dashboard.projectsView', params);

                            },
                            image: utilities.getImage()
                        });
                    }
                    $state.params.addCards();
                });
            }
        }
        $state.params.reloadProjectsCards();
    }
})();