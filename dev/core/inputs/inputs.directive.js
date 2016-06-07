(function() {
    'use strict';

    var app = angular
        .module('AppProject');
    app
        .directive('lpInput', lpInput);

    function lpInput() {
        return {
            restrict: 'E',
            scope: {
                name:'=?',
                value:'=?'
            },
            controller : 'inputsController as vm',
            templateUrl: 'dev/core/inputs/inputs.html'
                       
        }
    };
})();