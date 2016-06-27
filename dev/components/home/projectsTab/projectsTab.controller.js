(function() {
    "use strict";

    angular.module("AppProject")
        .controller("projectsTabController", projectsTabController);
    projectsTabController.$inject = ['$state','requestsService'];

    function projectsTabController($state,requestsService) {
        var vm = this;
        vm.cards = []
        requestsService.getProjects(function(response) {
            response.data.forEach(function(element, index) {
                vm.cards.push({
                    title: element.NAME,
                    desc: element.DESCRIPTION,
                    data: element,
                    onClick: function(data){
                        let params = {
                            params : data
                        };
                        $state.go('dashboard.projectsView', params);
                        
                    },
                    image: 'https://material.angularjs.org/latest/img/washedout.png'
                });
            });
        });


    }
})();