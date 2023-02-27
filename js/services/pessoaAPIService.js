angular.module("pessoa").factory("pessoasAPI", function ($http, config) {
	var _buscar = function () {
		return $http.get(config.baseUrl + "/pessoas");
	};

	var _adicionar = function (pessoa) {
		return $http.post(config.baseUrl + "/pessoas", pessoa);
	};

    var _alterar = function (pessoa) {
		return $http.put(config.baseUrl + `/pessoas/${pessoa.id}`, pessoa);
	};

    var _excluir = function (pessoa) {
		return $http.delete(config.baseUrl + `/pessoas/${pessoa.id}`,pessoa);
	};

	return {
		buscar: _buscar,
		adicionar: _adicionar,
        alterar: _alterar,
        excluir: _excluir
	};
});