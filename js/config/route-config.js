angular.module('aplicacao').config(function ($routeProvider) {
    $routeProvider
        .when('/produtos', {
            templateUrl: 'view/item-compra.html',
            controller: 'item-compra'
        })
        .when('/compra', {
            templateUrl: 'view/compra.html',
            controller: 'compra'
        })
        .when('/pessoa', {
            templateUrl: 'view/pessoa.html',
            controller: 'pessoa'
        })
        .when('/inicio', {
            templateUrl: 'view/inicio.html',
        })
        .otherwise({
            redirectTo: '/'
        });
});
