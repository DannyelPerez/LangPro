(function() {
    "use strict";

    angular.module("AppProject")
        .controller("forumsTabController", forumsTabController);
    forumsTabController.$inject = ['$state', '$mdSidenav', '$scope', 'requestsService', 'utilities'];

    function forumsTabController($state, $mdSidenav, $scope, requestsService,utilities) {
        var vm = this;
        vm.cards = [];
        requestsService.getForums(function(response) {
            response.data.forEach(function(element, index) {
                vm.cards.push({
                    title: element.NAME,
                    desc: element.DESCRIPTION,
                    data: element,
                    onClick: function(data){
                    	let params = {
                    		params : data
                    	};
                    	$state.go('dashboard.checkForum', params);
                    	
                    },
                    image: utilities.getImage()
                });
            });
        });

    }
})();