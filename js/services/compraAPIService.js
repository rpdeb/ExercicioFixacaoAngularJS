angular.module("compra").factory("comprasAPI", function ($http) {
	var _buscar = function () {
		return $http.get("http://localhost:3000/compras");
	};

	var _adicionar = function (compra) {
		return $http.post("http://localhost:3000/compras", compra);
	};

    var _alterar = function (compra) {
		return $http.put(`http://localhost:3000/compras/${compra.id}`, compra);
	};

    var _excluir = function (compra) {
		return $http.delete(`http://localhost:3000/compras/${compra.id}`,compra);
	};

	return {
		buscar: _buscar,
		adicionar: _adicionar,
        alterar: _alterar,
        excluir: _excluir
	};
});