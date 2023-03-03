angular.module("aplicacao", []);
angular.module("aplicacao").controller("itemCompraController", function ($scope, $http) {

    $scope.novoItem = {};
    $scope.itemSelecionado = {};
    $scope.itens = [];
    $scope.compras = [];
    $scope.novoItem.codigo = Math.floor(Math.random() * 10000);

    var carregarItens = function () {
        $http.get("http://localhost:3000/itensdecompra").success(function (data) {
            $scope.itens = data;
        });
    };

    var carregarCompras = function () {
        $http.get("http://localhost:3000/compras").success(function (data) {
            $scope.compras = data;
        });
    };

    $scope.adicionarItem = function (item) {
        var item = $scope.novoItem;
        $http.post("http://localhost:3000/itensdecompra", item).success(function (data) {
            carregarItens();
        });
    };

    $scope.selecionaItem = function (item) {
        $scope.itemSelecionado = item;
    };

    $scope.alterarItem = function () {
        var item = $scope.itemSelecionado;
        $http.put(`http://localhost:3000/itensdecompra/${item.id}`, item).success(function (data) {
            carregarItens();
        });
    };

    $scope.excluirItem = function () {
        var item = $scope.itemSelecionado;
        $http.delete(`http://localhost:3000/itensdecompra/${item.id}`, item).success(function (data) {
            carregarItens();
        });
    };

    carregarItens();
    carregarCompras();
});