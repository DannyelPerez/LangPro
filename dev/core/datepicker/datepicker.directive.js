(function() {
    'use strict';

    var app = angular
        .module('AppProject');
    app
        .directive('lpDatepicker', lpDatepicker);

    function lpDatepicker() {
        return {
            restrict: 'E',
            scope: {
                value:'=?'
            },
            controller : 'datepickerController as vm',
            templateUrl: 'dev/core/datepicker/datepicker.html'
                       
        }
    };
})();