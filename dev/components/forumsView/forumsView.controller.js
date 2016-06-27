(function() {
    "use strict";

    angular.module("AppProject")
        .controller("forumsViewController", forumsViewController);
    forumsViewController.$inject = ['$state',
        'requestsService',
        'authenticationService',
        'toaster',
        '$stateParams',
        '$rootScope'
    ];

    function forumsViewController($state, requestsService,
        authenticationService, toaster, $stateParams, $rootScope) {
        if (!$stateParams.params)
            $state.go('dashboard.home');
        var vm = this;
        vm.comments = [];
        vm.currentUser = {};
        vm.colorMap = {
            1: '#FFC107',
            2: '#03A9F4',
            3: '#8BC34A',
            4: '#F44336',
            5: '#E91E63',
            6: '#00796B',
            7: '#FF9800',
            8: '#303F9F',
            9: '#9C27B0'
        }

        vm.theme = {
            initials: '',
            user: '',
            theme: $stateParams.params.NAME,
            description: $stateParams.params.DESCRIPTION,
            color: getColor(),
            headbar: getColor()
        }

        vm.comment = '';

        vm.share = {
            name: 'Share',
            color: getColor(),
            onClick: addComment
        }

        requestsService.getUserById($stateParams.params.CREATEDBY, function(response) {
            vm.theme.user = response.data.realm;
            vm.theme.initials = getInitials(vm.theme.user);
        });

        requestsService.getForumCommentsById($stateParams.params.id, function(response) {
            if (!response.data || response.data.length < 0)
                return;
            let data = response.data;
            for (let i = 0; i < data.length; i++) {
                let obj = {
                    comment: data[i].COMMENT,
                    color: getColor(),
                    float: i % 2 === 0 ? 'right' : 'left'
                }
                requestsService.getUserById(data[i].IDUSER, function(resp) {
                    obj.user = resp.data.realm;
                    obj.initials = getInitials(obj.user);
                    vm.comments.push(obj);
                });
            }
        });

        function getColor() {
            let color = Math.floor((Math.random() * 9) + 1);
            return vm.colorMap[color];
        }

        function getInitials(user) {
            let initials = user.split(' ');
            return initials[0].charAt(0) + initials[1].charAt(0);
        }

        requestsService.getUserById($rootScope.Session, function(response) {
            vm.currentUser = response.data;
        });

        function addComment() {
            let obj = {
                IDUSER: $rootScope.Session,
                IDFORUM: $stateParams.params.id,
                COMMENT: vm.comment
            };
            requestsService.postCommentInForum(obj, function(response) {
                toaster.pop({
                    type: 'success',
                    title: 'Success',
                    body: 'Comment added successfully',
                    showCloseButton: true
                });
                let objC = {
                    comment: vm.comment,
                    color: getColor(),
                    float: vm.comments.length % 2 === 0 ? 'right' : 'left',
                    user: vm.currentUser.realm,
                    initials: getInitials(vm.currentUser.realm)
                };
                vm.comments.push(objC);
                vm.comment = ' ';
            });
        }

    }
})();