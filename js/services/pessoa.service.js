angular.module("aplicacao").service("pessoasAPI", function ($http, config) {
    this.buscar = function () {
        return $http.get(config.url + "/pessoas");
    };

    this.cadastrar = function () {
        return $http.post(config.url + "/pessoas", pessoa);
    }

    this.alterar = function () {
        return $http.put(config.url + `/pessoas/${pessoa.id}`, pessoa);
    }

    this.excluir = function () {
        return $http.delete(config.url + `/pessoas/${pessoa.id}`, pessoa);
    }
});