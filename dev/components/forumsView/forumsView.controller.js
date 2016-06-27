(function() {
    "use strict";

    angular.module("AppProject")
        .controller("forumsViewController", forumsViewController);
    forumsViewController.$inject = ['$state',
        'requestsService',
        'authenticationService',
        'toaster',
        '$stateParams',
        '$rootScope',
        'utilities'
    ];

    function forumsViewController($state, requestsService,
        authenticationService, toaster, $stateParams, $rootScope, utilities) {
        var vm = this;
        if (!$stateParams.params)
            $state.go('dashboard.home');
        else
            init();

        vm.comments = [];
        vm.currentUser = {};
        vm.comment = '';

        vm.share = {
            name: 'Share',
            color: utilities.getColor(),
            onClick: addComment
        }

        function init() {
            vm.theme = {
                initials: '',
                user: '',
                theme: $stateParams.params.NAME,
                description: $stateParams.params.DESCRIPTION,
                color: utilities.getColor(),
                headbar: utilities.getColor()
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
                        color: utilities.getColor(),
                        float: i % 2 === 0 ? 'right' : 'left'
                    }
                    requestsService.getUserById(data[i].IDUSER, function(resp) {
                        obj.user = resp.data.realm;
                        obj.initials = getInitials(obj.user);
                        vm.comments.push(obj);
                    });
                }
            });
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
                    color: utilities.getColor(),
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