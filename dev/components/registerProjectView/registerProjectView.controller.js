(function() {
    "use strict";

    angular.module("AppProject")
        .controller("registerProjectViewController", registerProjectViewController);
    registerProjectViewController.$inject = ['$state', '$mdSidenav', '$scope'];

    function registerProjectViewController($state, $mdSidenav, $scope) {
        var vm = this;

        vm.inputsForm = [{
            name: 'Project Name',
            value: ''
        }, {
            name: 'Max Users',
            value: ''
        }, {
            name: ' Git Repository ',
            value: ''
        }];

        vm.button = {
            name: 'Submit',
            onClick: function() {

            }
        }
    }
})();