(function() {
    'use strict';

    var app = angular
        .module('AppProject');
    app
        .directive('lpChips', lpChips);

    function lpChips() {
        return {
            restrict: 'E',
            scope: {
                values:'=?',
                buffer:'=?',
                title:'=?'
            },
            controller : 'chipsController as vm',
            templateUrl: 'dev/core/chips/chips.html'
                       
        }
    };
})();