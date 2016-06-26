(function() {
    "use strict";

    angular.module("AppProject")
        .controller("forumsTabController", forumsTabController);
    forumsTabController.$inject = ['$state', '$mdSidenav', '$scope', 'requestsService'];

    function forumsTabController($state, $mdSidenav, $scope, requestsService) {
        var vm = this;
        vm.cards = []
        requestsService.getForums(function(response) {
        	console.log(response);
            response.data.forEach(function(element, index) {
                vm.cards.push({
                    title: element.NAME,
                    desc: element.DESCRIPTION,
                    data: element,
                    image: 'https://material.angularjs.org/latest/img/washedout.png'
                });
            });
        });
    }
})();