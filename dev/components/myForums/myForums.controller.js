(function() {
    "use strict";

    angular.module("AppProject")
        .controller("myForumsController", myForumsController);
    myForumsController.$inject = ['$state', 'requestsService', '$stateParams'];

    function myForumsController($state, requestsService, $stateParams) {
        var vm = this;
        if (!$stateParams.params) {
            $state.go('dashboard.home');
            return;
        } else {
            vm.currentUser = $stateParams.params.id;

            vm.cards = [];
            vm.serverIsDoneProjects = false;

            requestsService.getForumsUser(vm.currentUser, function(response) {
                let data = response.data;
                console.log(data);
                response.data.forEach(function(element, index) {
                    vm.cards.push({
                        title: element.NAME,
                        desc: element.DESCRIPTION,
                        data: element,
                        onClick: function(data) {
                            let params = {
                                params: data
                            };
                            $state.go('dashboard.home', params);

                        },
                        image: 'https://material.angularjs.org/latest/img/washedout.png'
                    });
                });
            });
        }
    }
})();