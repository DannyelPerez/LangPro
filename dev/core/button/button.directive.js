(function() {
    'use strict';

    var app = angular
        .module('AppProject');
    app
        .directive('lpButton', lpButton);

    function lpButton() {
        return {
            restrict: 'E',
            scope: {
                name:'=?',
                onClick:'=?'
            },
            controller : 'buttonController as vm',
            templateUrl: 'dev/core/button/button.html'
                       
        }
    };
})();