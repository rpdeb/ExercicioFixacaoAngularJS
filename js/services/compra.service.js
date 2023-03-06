angular.module("aplicacao").service("comprasAPI", function ($http, config) {
    this.buscar = function () {
        return $http.get(config.url + "/compras");
    };

    this.cadastrar = function () {
        return $http.post(config.url + "/compras", compra);
    }

    this.alterar = function () {
        return $http.put(config.url + `/compras/${compra.id}`, compra);
    }

    this.excluir = function () {
        return $http.delete(config.url + `/compras/${compra.id}`, compra);
    }
});