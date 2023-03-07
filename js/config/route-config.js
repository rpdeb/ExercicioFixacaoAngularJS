angular.module("aplicacao").config(function ($routeProvider) {

    $routeProvider.when("/pessoas", {
        templateUrl: "view/pessoa.html",
        controller: "pessoaController",
        resolve: {
            pessoas: function (pessoasAPI) {
                return pessoasAPI.buscar();
            }
        }
    });

    $routeProvider.when("/itensdecompra", {
        templateUrl: "view/item-compra.html",
        controller: "itemCompraController",
        resolve: {
            itensdecompra: function (itensAPI) {
                return itensAPI.buscar();
            }
        }
    });

    $routeProvider.when("/compras", {
        templateUrl: "view/compra.html",
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

    $routeProvider.otherwise({ redirectTo: "/pessoas" });
});
