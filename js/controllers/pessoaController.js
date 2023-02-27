angular.module("pessoa", []);
angular.module("pessoa").controller("pessoaController", function ($scope, pessoasAPI) {

    $scope.novaPessoa = {};
    $scope.pessoaSelecionado = {};
    $scope.pessoas = [];
    $scope.novaPessoa.codigo = Math.floor(Math.random() * 1000);

    var carregarPessoas = function () {
        pessoasAPI.buscar().success(function (data) {
            $scope.pessoas = data;
        });
    };

    $scope.adicionarPessoa = function () {
        var pessoa = $scope.novaPessoa;
        pessoa.nascimento = new Date();
        pessoasAPI.adicionar(pessoa).success(function (data) {
            carregarPessoas();
        });
    };

    $scope.selecionaPessoa = function (pessoa) {
        $scope.pessoaSelecionado = pessoa;
    };

    $scope.alterarPessoa = function () {
        var pessoa = $scope.pessoaSelecionado;
        pessoasAPI.alterarPessoa(pessoa).success(function (data) {
            carregarPessoas();
        });
    };

    $scope.excluirPessoa = function () {
        var pessoa = $scope.pessoaSelecionado;
        pessoasAPI.excluir(pessoa).success(function (data) {
            carregarPessoas();
        });
    };
    carregarPessoas();
});