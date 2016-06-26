(function() {
    'use strict';

    var app = angular
        .module('AppProject');
    app
        .directive('lpInfoCards', lpInfoCards);

    function lpInfoCards() {
        return {
            restrict: 'E',
            scope: {
                cards: '=?'
            },
            controller: 'infoCardsController as vm',
            templateUrl: 'dev/core/info-cards/info-cards.html'

        }
    };
})();