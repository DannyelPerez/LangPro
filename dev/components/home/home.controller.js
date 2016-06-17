(function() {
    "use strict";

    angular.module("AppProject")
        .controller("homeController", homeController);
    homeController.$inject = ['$state', '$mdSidenav', '$scope'];

    function homeController($state, $mdSidenav, $scope) {
        var vm = this;

        vm.imagePath = 'https://material.angularjs.org/latest/img/washedout.png';
        vm.imagePath2 = 'images/pc.png';

        vm.cards = [{
            row: [{
                image: 'https://material.angularjs.org/latest/img/washedout.png',
                title: 'This is the title 1',
                desc: "This is the first card"
            }, {
                image: 'images/pc.png',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }]

        }, {
            row: [{
                image: 'https://material.angularjs.org/latest/img/washedout.png',
                title: 'This is the title 1',
                desc: "This is the first card"
            }, {
                image: 'images/pc.png',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }, {
                image: 'images/pc.png',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }, {
                image: 'images/pc.png',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }]
        }, {
            row: [{
                image: 'https://material.angularjs.org/latest/img/washedout.png',
                title: 'This is the title 1',
                desc: "This is the first card"
            }, {
                image: 'images/pc.png',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }, {
                image: 'images/pc.png',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }]
        }];
    }
})();