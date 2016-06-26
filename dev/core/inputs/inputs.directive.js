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
                formName: '=?',
                title: '=?',
                name: '=?',
                required: '=?',
                errorMessage: '=?',
                pattern: '=?',
                inputType: '=?',
                min: '=?',
                max: '=?',
                minLength: '=?',
                maxLength: '=?',
                model: '=?',
                hintMessage: '=?',
                messageExps: '=?'
            },
            controller: 'inputsController as vm',
            templateUrl: 'dev/core/inputs/inputs.html',
            link: function(scope, element, attrs) {
                scope.inputType = scope.inputType ? scope.inputType : 'text';
            }
        }
    };
})();