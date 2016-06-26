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
        return {
            setCurrentTab: function(tab) {
                vm.currentTab = tab;
            },
            getCurrentTab: function() {
                return vm.currentTab;
            },
            setShowAddButtonAndSearchBar(value){
                vm.ShowAddButtonAndSearchBar = value;
            },
            getShowAddButtonAndSearchBar(){
                return vm.ShowAddButtonAndSearchBar;
            }
        };
    };
})();