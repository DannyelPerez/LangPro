(function() {
    "use strict";

    angular.module("AppProject").run(run);

    run.$inject = ["$rootScope", "$http", "$state", "$timeout", "$location", '$cookieStore', '$stateParams'];

    function run($rootScope, $http, $state, $timeout, $location, $cookieStore, $stateParams) {
        $rootScope.Session = window.localStorage['Session'];
        getBasicAuthentication();

        $rootScope.$on('$locationChangeStart', locationChangeStart);

        function getBasicAuthentication() {
            $rootScope.globals = $cookieStore.get('globals') || {};

            if ($rootScope.globals.token) {
                $http.defaults.headers.common['Authorization'] =
                    $rootScope.globals.token;
            }
        }

        function locationChangeStart(event, next, current) {
            if ($location.path() !== '/' && !$rootScope.globals.token &&
                ($location.path()).match(/\/\S{8}\/\d\/\&\S{5}\=\S*/) == undefined
                && $location.path() !== '/registration') {
                $location.path('/login');
            }

            if ($location.path() === '/' && $rootScope.globals.token) {
                $location.path('/home');
            }
        }
    }

})();