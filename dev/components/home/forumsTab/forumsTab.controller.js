(function() {
    "use strict";

    angular.module("AppProject")
        .controller("forumsTabController", forumsTabController);
    forumsTabController.$inject = ['$state', '$mdSidenav', '$scope', 'requestsService', 'utilities'];

    function forumsTabController($state, $mdSidenav, $scope, requestsService, utilities) {
        var vm = this;

        $state.params.reloadForumsCards = function() {
            vm.cards = [];
            if (!$state.params.searchInput) {
                requestsService.getForums(function(response) {
                    for (let i = 0; i< response.data.length ; i++) {
                        vm.cards.push({
                            title: response.data[i].NAME,
                            desc: response.data[i].DESCRIPTION,
                            data: response.data[i],
                            onClick: function(data) {
                                let params = {
                                    params: data
                                };
                                $state.go('dashboard.checkForum', params);

                            },
                            image: utilities.getImage()
                        });
                    }
                    $state.params.addCards();
                });
            } else {
                requestsService.searchForums($state.params.searchInput, function(response) {
                    for (let i = 0; i< response.data.length ; i++) {
                        vm.cards.push({
                            title: response.data[i].NAME,
                            desc: response.data[i].DESCRIPTION,
                            data: response.data[i],
                            onClick: function(data) {
                                let params = {
                                    params: data
                                };
                                $state.go('dashboard.checkForum', params);

                            },
                            image: utilities.getImage()
                        });
                    }
                    $state.params.addCards();
                });
            }
        }

        $state.params.reloadForumsCards();
    }
})();