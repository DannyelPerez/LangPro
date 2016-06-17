(function() {
    "use strict";

    angular.module("AppProject")
        .controller("verifiedController", verifiedController);
    verifiedController.$inject = ['$stateParams', '$location', '$state', 'authenticationService'];

    function verifiedController($stateParams, $location, $state, authenticationService) {
        var vm = this;
        console.log($stateParams);
        console.log($location);
        vm.cards = [{
            icon: 'glyphicon glyphicon-user',
            title: 'Encuentra Personas',
            subtitle: 'Busca y encuentra personas que quieren trabajar en proyectos parecidos'
        }, {
            icon: 'glyphicon glyphicon-refresh',
            title: 'Actualizate',
            subtitle: 'Enterate de temas interesantes sobre nuevos Frameworks y nuevas tecnologias'
        }, {
            icon: 'glyphicon glyphicon-flash',
            title: 'Desarrolla',
            subtitle: 'Programa rapido con tus diferente amigos en tus proyectos'
        }];

        vm.button = {
            name: "Commenzar",
            onClick: function() {
                $state.go('login');
            }
        };
    }
})();