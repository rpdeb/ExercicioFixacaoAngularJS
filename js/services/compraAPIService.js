angular.module("compra").factory("comprasAPI", function ($http, config) {
	var _buscar = function () {
		return $http.get(config.baseUrl + "/compras");
	};

	var _adicionar = function (compra) {
		return $http.post(config.baseUrl + "/compras", compra);
	};

    var _alterar = function (compra) {
		return $http.put(config.baseUrl + `/compras/${compra.id}`, compra);
	};

    var _excluir = function (compra) {
		return $http.delete(config.baseUrl + `/compras/${compra.id}`,compra);
	};

	return {
		buscar: _buscar,
		adicionar: _adicionar,
        alterar: _alterar,
        excluir: _excluir
	};
});