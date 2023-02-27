angular.module("itemCompra", []);
angular.module("itemCompra").controller("itemCompraController", function ($scope, itensAPI) {

    $scope.novoItem = {};
    $scope.itemSelecionado = {};
    $scope.itens = [];
    $scope.novoItem.codigo = Math.floor(Math.random() * 10000);
  
    var carregarItens = function () {
         itensAPI.buscar().success(function (data) {
            $scope.itens = data;
        });
    };

    $scope.adicionarItem = function (item) {
        var item = $scope.novoItem;
        itensAPI.adicionar(item).success(function (data) {	
        carregarItens();
		});
    };

    $scope.selecionaItem = function (item) {
        $scope.itemSelecionado = item;
    };

    $scope.alterarItem = function () {
        var item = $scope.itemSelecionado;
        itensAPI.alterar(item).success(function (data) {
            carregarItens();
			});
       
    };

    $scope.excluirItem = function () {
        var item = $scope.itemSelecionado;
        itensAPI.excluir(item).success(function (data) {
            carregarItens();
			});
    };
    carregarItens();
});