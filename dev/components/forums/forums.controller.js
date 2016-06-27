(function() {
    "use strict";

    angular.module("AppProject")
        .controller("forumsController", forumsController);
    forumsController.$inject = ['$state',
        'requestsService',
        'authenticationService',
        'toaster'
    ];

    function forumsController($state, requestsService,
        authenticationService, toaster) {
        var vm = this;
        vm.user = '';
        vm.initials = '';
        vm.userID = undefined;

        function init() {
            let initials = vm.user.split(' ');
            vm.initials = initials[0].charAt(0) + initials[1].charAt(0);
        }
        vm.question = {
            name: 'Question',
            model: {
                value: ''
            }
        }

        vm.description = '';

        vm.share = {
            name: 'Share',
            color: '#FFC107',
            onClick: function() {
            	createForum();
            }
        }

        vm.languages = {
            values: [],
            buffer: [],
            title: 'Languages'
        }

        authenticationService.getUser(function(response) {
            vm.user = response.data.realm;
            vm.userID = response.data.id;
            init();
        });

        requestsService.getLanguage(function(response) {
            response.data.forEach(function(element) {
                vm.languages.buffer.push({
                    name: element.NAME,
                    id: element.id,
                    _lowername: element.NAME.toLowerCase()
                });
            });
        });

        function createForum() {
            let obj = {
                "DESCRIPTION": vm.description,
                "NAME": vm.question.model.value,
                "LENGUAGEID": vm.languages.values[0].id ? vm.languages.values[0].id : 0,
                "CREATEDBY": vm.userID
            }
            requestsService.createForum(obj, function(response) {
                toaster.pop({
                    type: 'success',
                    title: 'Success',
                    body: 'Forum created successfully',
                    showCloseButton: true
                });
                setTimeout($state.go('dashboard.home'), 3000);
            });
        }



    }
})();