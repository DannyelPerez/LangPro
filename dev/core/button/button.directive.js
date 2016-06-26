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
                name: '=?',
                onClick: '=?',
                arialLabel: '=?',
                icon: '=?',
                round: '=?',
                color: '=?',
                mini: '=?'
            },
            controller: 'buttonController as vm',
            templateUrl: 'dev/core/button/button.html',
            link: function(scope, element, attrs) {
                scope.miniClass = scope.mini ? 'md-mini' : ' ';
            }

        }
    };
})();