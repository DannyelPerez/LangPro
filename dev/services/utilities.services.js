(function() {
    'use strict';
    var app = angular
        .module('AppProject');
    app.
    factory('utilities', utilities);
    utilities.$inject = [];

    function utilities() {
        var vm = this;
        vm.currentTab = ' ';
        vm.ShowAddButtonAndSearchBar = undefined;
        vm.imageMap = {
            1: 'images/go.jpg',
            2: 'images/js.jpg',
            3: 'images/node.jpg',
            4: 'https://material.angularjs.org/latest/img/washedout.png'
        };
        vm.colorMap = {
            1: '#FFC107',
            2: '#03A9F4',
            3: '#8BC34A',
            4: '#F44336',
            5: '#E91E63',
            6: '#00796B',
            7: '#FF9800',
            8: '#303F9F',
            9: '#9C27B0'
        };
        return {
            setCurrentTab: function(tab) {
                vm.currentTab = tab;
            },
            getCurrentTab: function() {
                return vm.currentTab;
            },
            setShowAddButtonAndSearchBar(value) {
                vm.ShowAddButtonAndSearchBar = value;
            },
            getShowAddButtonAndSearchBar: function() {
                return vm.ShowAddButtonAndSearchBar;
            },
            getImage: function() {
                let img = Math.floor((Math.random() * 4) + 1);
                return vm.imageMap[img];
            },
            getColor: function() {
                let color = Math.floor((Math.random() * 9) + 1);
                return vm.colorMap[color];
            }

        };
    };
})();