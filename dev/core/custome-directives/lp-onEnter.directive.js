(function() {
    'use strict';

    var app = angular
        .module('AppProject');
    app
        .directive('lpOnEnter', lpOnEnter);

    function lpOnEnter() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.lpOnEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    };
})();

