(function() {
    "use strict";

    angular.module("AppProject")
        .controller("forumsViewController", forumsViewController);
    forumsViewController.$inject = ['$state',
        'requestsService',
        'authenticationService',
        'toaster',
        '$stateParams'
    ];

    function forumsViewController($state, requestsService,
        authenticationService, toaster, $stateParams) {
        var vm = this;
        if(!$stateParams.params)
            $state.go('dashboard.home');
    }
})();