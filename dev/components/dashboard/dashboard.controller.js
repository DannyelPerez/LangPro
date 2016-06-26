(function() {
    "use strict";

    angular.module("AppProject")
        .controller("dashboardController", dashboardController);
    dashboardController.$inject = ['$state',
        '$mdSidenav',
        '$scope',
        'utilities',
        'authenticationService'
    ];

    function dashboardController($state, $mdSidenav, $scope,
        utilities,authenticationService) {
        var vm = this;
        vm.currentNavItem = 'home';
        vm.isActive = false;
        vm.simulateQuery = true;
        vm.isDisabled = false;
        vm.round = true;
        vm.utilities = utilities;

        utilities.setCurrentTab('PROJECTS');

        vm.redirectLogin = function() {
            $state.go("dashboard.login", {});
        }
        vm.redirectProject = function() {
            $state.go("dashboard.singleProjectView", {});
        }

        $scope.showMobileMainHeader = true;
        vm.openSideNavPanel = function() {
            $mdSidenav('left').open();
        };
        vm.closeSideNavPanel = function() {
            $mdSidenav('left').close();
        };
        vm.showSearchbar = function() {
            if (vm.isActive) {
                vm.isActive = false;
            } else {
                vm.isActive = true;
            }
        };

        vm.myFunct = function(keyEvent) {
            if (keyEvent.which === 23)
                alert('I am an alert');
        };

        function dummy() {
            alert('arreglar el redireccionamiento');
        }

        vm.panelOptions = [{
            title: 'My Profile',
            onClick: dummy,
            icon: 'glyphicon glyphicon-user',
            color: '#E91E63'
        }, {
            title: 'My Projects',
            onClick: dummy,
            icon: 'glyphicon glyphicon-folder-open',
            color: '#8BC34A'
        }, {
            title: 'My Forums',
            onClick: dummy,
            icon: 'glyphicon glyphicon-list-alt',
            color: '#FF5722'
        }, {
            title: 'Sign out',
            onClick: authenticationService.logout,
            icon: 'glyphicon glyphicon-off',
            color: '#9E9E9E'
        }, ];

        vm.addNewButton = {
            name: 'Add',
            round: true,
            icon: 'glyphicon-plus',
            onClick: function() {
                if (utilities.getCurrentTab() === 'PROJECTS')
                    alert('go to create new project');
                else
                    $state.go('dashboard.newForum');
            }
        }


    }
})();