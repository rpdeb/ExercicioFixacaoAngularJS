angular.module("aplicacao", []);
angular.module("aplicacao").controller("itemCompraController", function ($scope, $http) {

    $scope.novoItem = {};
    $scope.itemSelecionado = {};
    $scope.itens = [];
    $scope.novoItem.codigo = Math.floor(Math.random() * 10000);

    var buscarItens = function () {
        $http.get("http://localhost:3000/itensdecompra").success(function (data) {
            $scope.itens = data;
        });
    };

    $scope.cadastrarItem = function (item) {
        var item = $scope.novoItem;
        $http.post("http://localhost:3000/itensdecompra", item).success(function (data) {
            buscarItens();
        });
    };

    $scope.selecionaItem = function (item) {
        $scope.itemSelecionado = item;
    };

    $scope.alterarItem = function () {
        var item = $scope.itemSelecionado;
        $http.put(`http://localhost:3000/itensdecompra/${item.id}`, item).success(function (data) {
            buscarItens();
        });
    };

    $scope.excluirItem = function () {
        var item = $scope.itemSelecionado;
        $http.delete(`http://localhost:3000/itensdecompra/${item.id}`, item).success(function (data) {
            buscarItens();
        });
    };
    buscarItens();
});