angular.module("aplicacao", []);
angular.module("aplicacao").controller("compraController", function ($scope, $http) {
    $scope.novaCompra = {};
    $scope.compraSelecionada = {};
    $scope.compras = [];
    $scope.pessoas = [];
    $scope.novaCompra.valorTotal = 0;
    $scope.novaCompra.codigo = Math.floor(Math.random() * 1000);

    var carregarPessoas = function () {
        $http.get("http://localhost:3000/pessoas").success(function (data) {
            $scope.pessoas = data;
        });
    };

    var carregarCompras = function () {
        $http.get("http://localhost:3000/compras").success(function (data) {
            $scope.compras = data;
        });
    };

    $scope.adicionarCompra = function (compra) {
        var compra = $scope.novaCompra;
        $http.post("http://localhost:3000/compras", compra).success(function (data) {
            carregarCompras();
        });
    };

    $scope.selecionaCompra = function (compra) {
        $scope.compraSelecionada = compra;
    };

    $scope.excluirCompra = function () {
        var compra = $scope.compraSelecionada;
        $http.delete(`http://localhost:3000/compras/${compra.id}`, compra).success(function (data) {
            carregarCompras();
        });
    };

    carregarCompras();
    carregarPessoas();
});