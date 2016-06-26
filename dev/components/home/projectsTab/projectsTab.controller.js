(function() {
    "use strict";

    angular.module("AppProject")
        .controller("projectsTabController", projectsTabController);
    projectsTabController.$inject = ['$state'];

    function projectsTabController($state) {
        var vm = this;


        vm.imagePath = 'https://material.angularjs.org/latest/img/washedout.png';
        vm.imagePath2 = 'images/pc.png';
        console.log("home");
        vm.cards = [{
            row: [{
                image: 'https://material.angularjs.org/latest/img/washedout.png',
                title: 'This is the title 1',
                desc: "This is the first card"
            }, {
                image: 'images/go.jpg',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }]

        }, {
            row: [{
                image: 'https://material.angularjs.org/latest/img/washedout.png',
                title: 'This is the title 1',
                desc: "This is the first card"
            }, {
                image: 'images/js.jpg',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }, {
                image: 'images/node.jpg',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }, {
                image: 'images/go.jpg',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }]
        }, {
            row: [{
                image: 'https://material.angularjs.org/latest/img/washedout.png',
                title: 'This is the title 1',
                desc: "This is the first card"
            }, {
                image: 'images/go.jpg',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }, {
                image: 'images/js.jpg',
                title: 'This is the title 2',
                desc: 'This is the second card'
            }]
        }];


    }
})();