angular.module("aplicacao").factory("itensAPI", function ($http) {
    var _buscar = function () {
        return $http.get(config.baseUrl + "/itensdecompra");
    };

    var _adicionar = function (item) {
        return $http.post(config.baseUrl + "/itensdecompra", item);
    };

    var _alterar = function (item) {
        return $http.put(config.baseUrl + `/itensdecompra/${item.id}`, item);
    };

    var _excluir = function (item) {
        return $http.delete(config.baseUrl + `/itensdecompra/${item.id}`, item);
    };

    return {
        buscar: _buscar,
        adicionar: _adicionar,
        alterar: _alterar,
        excluir: _excluir
    };
});