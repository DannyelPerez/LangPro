(function(){
	"use strict";

	angular.module("AppProject").run(run);

	run.$inject = ["$rootScope","$http","$state","$timeout","$location",'$cookieStore']; 

	function run($rootScope,$http,$state,$timeout,$location, $cookieStore){
		$rootScope.Session = window.localStorage['Session'];
		getBasicAuthentication();

		$rootScope.$on('$locationChangeStart', locationChangeStart);

		function getBasicAuthentication () {
            $rootScope.globals = $cookieStore.get('globals') || {};

            if ($rootScope.globals.token) {
                $http.defaults.headers.common['Authorization'] =
                $rootScope.globals.token;
            }
        }

        function locationChangeStart (event, next, current) {
            if ($location.path() !== '/' && !$rootScope.globals.token) {
                $location.path('/login');
            }
            
            if($location.path() === '/' && $rootScope.globals.token) {
                $location.path('/home');
            }
        }
	}

})();