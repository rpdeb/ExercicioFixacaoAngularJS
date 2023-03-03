angular.module("aplicacao", []);
angular.module("aplicacao").controller("pessoaController", function ($scope, $http, pessoasAPI) {

    $scope.novaPessoa = {};
    $scope.pessoaSelecionado = {};
    $scope.pessoas = [];
    $scope.novaPessoa.codigo = Math.floor(Math.random() * 1000);

    var buscarPessoas = function () {
        pessoasAPI.buscar().success(function (data) {
            $scope.pessoas = data;
        });
    };

    $scope.cadastrarPessoa = function () {
        var pessoa = $scope.novaPessoa;
        pessoa.nascimento = new Date();
        pessoasAPI.cadastrar(pessoa).success(function (data) {
            buscarPessoas();
        });
    };

    $scope.selecionaPessoa = function (pessoa) {
        $scope.pessoaSelecionado = pessoa;
    };

    $scope.alterarPessoa = function () {
        var pessoa = $scope.pessoaSelecionado;
        pessoasAPI.alterar(pessoa).success(function (data) {
            buscarPessoas();
        });
    };

    $scope.excluirPessoa = function () {
        var pessoa = $scope.pessoaSelecionado;
        pessoasAPI.excluir(pessoa).success(function (data) {
            buscarPessoas();
        });
    };
    buscarPessoas();
});