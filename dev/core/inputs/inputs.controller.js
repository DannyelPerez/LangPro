(function() {
    "use strict";

    angular.module("AppProject")
        .controller("inputsController", inputsController);
    inputsController.$inject = ['$scope'];

    function inputsController($scope) {
        var vm = this;

        vm.showHints = true;
        vm.hasHint = $scope.errorMessage ? true : false;
        vm.changeShowHintsValue = function() {
            if (!vm.hasHint)
                return;
            return $scope.model.value.match($scope.pattern) === undefined ? false : true;
        }

    }
})();