(function() {
    "use strict";

    angular.module("AppProject")
        .controller("projectsViewController", projectsViewController);
    projectsViewController.$inject = ['$state', '$mdSidenav', '$scope'];

    function projectsViewController($state, $mdSidenav, $scope) {
        var vm = this;
        vm.imagePath = 'https://material.angularjs.org/latest/img/washedout.png';
        vm.imagePath2 = 'images/pc.png';

        vm.urlTemplate = 'dev/components/home/projectsTab/projectsTab.html';
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
            }],
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
            }],
        }];

    }
})();