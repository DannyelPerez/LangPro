(function() {
    "use strict";

    angular.module("AppProject")
        .controller("verifiedController", verifiedController);
    verifiedController.$inject = ['$stateParams', '$location', '$state', 'authenticationService', 'toaster'];

    function verifiedController($stateParams, $location, $state, authenticationService, toaster) {
        var vm = this;
        if (!$stateParams)
            return;
        // authenticationService.confirmEmail($stateParams.uid, $stateParams.token, function(response) {
        //     toaster.pop({
        //         type: 'success',
        //         title: 'Enhorabuena',
        //         body: 'Usuario verificado exitosamente',
        //         showCloseButton: true
        //     });
        // });
        console.log($stateParams);
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
            name: "Iniciar Sesion",
            onClick: function() {
                $state.go('login');
            }
        };
    }
})();