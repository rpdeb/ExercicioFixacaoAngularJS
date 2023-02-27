angular.module("itemCompra").factory("itensAPI", function ($http) {
	var _buscar = function () {
		return $http.get("http://localhost:3000/itensdecompra");
	};

	var _adicionar = function (item) {
		return $http.post("http://localhost:3000/itensdecompra", item);
	};

    var _alterar = function (item) {
		return $http.put(`http://localhost:3000/itensdecompra/${item.id}`, item);
	};

    var _excluir = function (item) {
		return $http.delete(`http://localhost:3000/itensdecompra/${item.id}`,item);
	};

	return {
		buscar: _buscar,
		adicionar: _adicionar,
        alterar: _alterar,
        excluir: _excluir
	};
});