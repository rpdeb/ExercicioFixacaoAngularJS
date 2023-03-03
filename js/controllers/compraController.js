angular.module("aplicacao", []);
angular.module("aplicacao").controller("compraController", function ($scope, $http, comprasAPI) {
    $scope.novaCompra = {};
    $scope.compraSelecionada = {};
    $scope.compras = [];
    $scope.pessoas = [];
    $scope.novaCompra.valorTotal = 0;
    $scope.novaCompra.codigo = Math.floor(Math.random() * 1000);
    $scope.itens = [];

    var buscarPessoas = function () {
        $http.get("http://localhost:3000/pessoas").success(function (data) {
            $scope.pessoas = data;
        });
    };

    var buscarItens = function () {
        $http.get("http://localhost:3000/itensdecompra").success(function (data) {
            $scope.itens = data;
        });
    };

    var buscarCompras = function () {
        comprasAPI.buscar().success(function (data) {
            $scope.compras = data;
        });
    };

    $scope.cadastrarCompra = function (compra) {
        var compra = $scope.novaCompra;
        $http.post("http://localhost:3000/compras", compra).success(function (data) {
            buscarCompras();
        });
    };

    $scope.alterarCompra = function () {
        var compra = $scope.compraSelecionada;
        $http.put(`http://localhost:3000/pessoas/${compra.id}`, compra).success(function (data) {
            buscarCompras();
        });
    };

    $scope.selecionaCompra = function (compra) {
        $scope.compraSelecionada = compra;
    };

    $scope.excluirCompra = function () {
        var compra = $scope.compraSelecionada;
        $http.delete(`http://localhost:3000/compras/${compra.id}`, compra).success(function (data) {
            buscarCompras();
        });
    };

    buscarCompras();
    buscarPessoas();
    buscarItens();
});