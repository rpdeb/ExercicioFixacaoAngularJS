angular.module("aplicacao").service("itensAPI", function ($http, config) {
    this.buscar = function () {
        return $http.get(config.url + "/itensdecompra");
    };

    this.cadastrar = function () {
        return $http.post(config.url + "/itensdecompra", item);
    }

    this.alterar = function () {
        return $http.put(config.url + `/itensdecompra/${item.id}`, item);
    }

    this.excluir = function () {
        return $http.delete(config.url + `/itensdecompra/${item.id}`, item);
    }
});