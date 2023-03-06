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
    // $routeProvider.when("/pessoa", {
    // 	templateUrl: "view/novoContato.html",
    // 	controller: "novoContatoCtrl",
    // 	resolve: {
    // 		operadoras: function (operadorasAPI) {
    // 			return operadorasAPI.getOperadoras();
    // 		}
    // 	}
    // });
    // $routeProvider.when("/detalhesContato/:id", {
    // 	templateUrl: "view/detalhesContato.html",
    // 	controller: "detalhesContatoCtrl",
    // 	resolve: {
    // 		contato: function (contatosAPI, $route) {
    // 			return contatosAPI.getContato($route.current.params.id);
    // 		}
    // 	}
    // });
    // $routeProvider.when("/error", {
    // 	templateUrl: "view/error.html"
    // });
    $routeProvider.otherwise({ redirectTo: "/pessoas" });
});
