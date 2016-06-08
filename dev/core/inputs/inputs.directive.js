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
                value:'=?',
                inputType:'=?'
            },
            controller : 'inputsController as vm',
            templateUrl: 'dev/core/inputs/inputs.html'
                       
        }
    };
})();