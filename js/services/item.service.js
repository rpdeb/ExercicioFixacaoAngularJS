angular.module("aplicacao").service("itensAPI", function ($http) {
    this.buscar = function () {
        return $http.get("http://localhost:3000/itensdecompra");
    };

    this.cadastrar = function () {
        return $http.post("http://localhost:3000/itensdecompra", item);
    }

    this.alterar = function () {
        return $http.put(`http://localhost:3000/itensdecompra/${item.id}`, item);
    }

    this.excluir = function () {
        return $http.delete(`http://localhost:3000/itensdecompra/${item.id}`, item);
    }
});