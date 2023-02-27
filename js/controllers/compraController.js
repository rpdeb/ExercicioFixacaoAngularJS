angular.module("compra", []);
angular.module("compra").controller("compraController", function ($scope, comprasAPI, pessoasAPI) {
    $scope.novaCompra = {};
    $scope.compraSelecionada = {};
    $scope.compras = [];
    $scope.pessoas = [];
    $scope.novaCompra.valorTotal = 0;
    $scope.novaCompra.codigo = Math.floor(Math.random() * 1000);

    var carregarPessoas = function () {
        pessoasAPI.buscar().success(function (data) {
            $scope.pessoas = data;
        });
    };

    var carregarCompras = function () {
        comprasAPI.buscar().success(function (data) {
            $scope.compras = data;
        });
    };

    $scope.adicionarCompra = function (compra) {
        var compra = $scope.novaCompra;
        comprasAPI.adicionar(compra) .success(function (data) {
            carregarCompras();
        });
    };

    $scope.selecionaCompra = function (compra) {
        $scope.compraSelecionada = compra;
    };

    $scope.excluirCompra = function () {
        var compra = $scope.compraSelecionada;
        comprasAPI.excluir(compra).success(function (data) {
            carregarCompras();
        });
    };

    carregarCompras();
    carregarPessoas();
    carregarItens();
});