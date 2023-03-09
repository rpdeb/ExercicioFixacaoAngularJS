angular.module("aplicacao").config(function ($routeProvider) {

    $routeProvider.when("/pessoa", {
        templateUrl: "../view/pessoa.html",
        controller: "pessoaController",
        resolve: {
            pessoas: function (pessoasAPI) {
                return pessoasAPI.buscar();
            }
        }
    });

    $routeProvider.when("/item", {
        templateUrl: "../view/item-compra.html",
        controller: "itemCompraController",
        resolve: {
            itensdecompra: function (itensAPI) {
                return itensAPI.buscar();
            }
        }
    });

    $routeProvider.when("/compra", {
        templateUrl: "../view/compra.html",
        controller: "compraController",
        resolve: {
            compras: function (comprasAPI) {
                return comprasAPI.buscar();
            }
        }
    });

    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });

    $routeProvider.otherwise({ redirectTo: "/pessoa" });
});
