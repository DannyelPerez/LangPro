(function() {
    "use strict";

    angular.module("AppProject")
        .controller("projectController", projectController);
    projectController.$inject = ['$state', '$mdSidenav', '$scope'];

    function projectController($state, $mdSidenav, $scope) {
        var vm = this;
        vm.imagePath = 'https://material.angularjs.org/latest/img/washedout.png';
        vm.imagePath2 = 'images/pc.png';

        vm.cards = [{
        	image:'https://material.angularjs.org/latest/img/washedout.png',
        	title:'This is the title 1',
        	desc:"This is the first card"
        },
        {
        	image:'images/pc.png',
        	title:'This is the title 2',
        	desc:'This is the second card'
        }];
    }
})();
