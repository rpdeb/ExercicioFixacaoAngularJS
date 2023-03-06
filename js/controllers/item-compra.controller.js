angular.module("aplicacao", []);
angular.module("aplicacao").controller("itemCompraController", function ($scope, itensAPI) {

    $scope.novoItem = {};
    $scope.itemSelecionado = {};
    $scope.itens = [];
    $scope.novoItem.codigo = Math.floor(Math.random() * 10000);

    var buscarItens = function () {
        itensAPI.buscar().success(function (data) {
            $scope.itens = data;
        });
    };

    $scope.cadastrarItem = function (item) {
        var item = $scope.novoItem;
        itensAPI.cadastrar(item).success(function (data) {
            buscarItens();
        });
    };

    $scope.selecionaItem = function (item) {
        $scope.itemSelecionado = item;
    };

    $scope.alterarItem = function () {
        var item = $scope.itemSelecionado;
        itensAPI.alterar(item).success(function (data) {
            buscarItens();
        });
    };

    $scope.excluirItem = function () {
        var item = $scope.itemSelecionado;
        itensAPI.excluir(item).success(function (data) {
            buscarItens();
        });
    };
    buscarItens();
});