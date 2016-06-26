(function() {
    "use strict";

    angular.module("AppProject")
        .controller("infoCardsController", infoCardsController);
    infoCardsController.$inject = ['$scope'];

    function infoCardsController($scope) {
        var vm = this;
        vm.cards = {};
        vm.cards.cards = [];

        function addCards() {
            let maxCards = Math.floor((Math.random() * 3) + 2);
            let currentCars = 0;
            let row = [];
            for (let i = 0; i < $scope.cards.length; i++) {
                row.push($scope.cards[i]);
                currentCars++;
                if (currentCars === maxCards || $scope.cards.length - 1 === i) {
                    currentCars = 0;
                    maxCards = Math.floor((Math.random() * 3) + 2);
                    vm.cards.cards.push({
                        row: row
                    });
                    row = [];
                }
            }

        }

        $scope.$watchCollection('cards', function(newValues, oldValues) {
            if ($scope.cards.length > 0)
                addCards();
        });
    }
})();