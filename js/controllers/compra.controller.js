angular.module("aplicacao").controller("compra", function ($scope, comprasAPI, $http) {
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
        comprasAPI.cadastrarCompra(compra).success(function (data) {
            buscarCompras();
        });
    };

    $scope.alterarCompra = function () {
        var compra = $scope.compraSelecionada;
        comprasAPI.alterar(compra).success(function (data) {
            buscarCompras();
        });
    };

    $scope.selecionaCompra = function (compra) {
        $scope.compraSelecionada = compra;
    };

    $scope.excluirCompra = function () {
        var compra = $scope.compraSelecionada;
        comprasAPI.excluir(compra).success(function (data) {
            buscarCompras();
        });
    };

    buscarCompras();
    buscarItens();
    buscarPessoas();
});