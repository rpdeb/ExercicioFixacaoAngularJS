angular.module("aplicacao", []);
angular.module("aplicacao").controller("pessoaController", function ($scope, $http) {

    $scope.novaPessoa = {};
    $scope.pessoaSelecionado = {};
    $scope.pessoas = [];
    $scope.novaPessoa.codigo = Math.floor(Math.random() * 1000);

    var carregarPessoas = function () {
        $http.get("http://localhost:3000/pessoas").success(function (data) {
            $scope.pessoas = data;
        });
    };

    $scope.adicionarPessoa = function () {
        var pessoa = $scope.novaPessoa;
        pessoa.nascimento = new Date();
        $http.post("http://localhost:3000/pessoas", pessoa).success(function (data) {
            carregarPessoas();
        });
    };

    $scope.selecionaPessoa = function (pessoa) {
        $scope.pessoaSelecionado = pessoa;
    };

    $scope.alterarPessoa = function () {
        var pessoa = $scope.pessoaSelecionado;
        $http.put(`http://localhost:3000/pessoas/${pessoa.id}`, pessoa).success(function (data) {
            carregarPessoas();
        });
    };

    $scope.excluirPessoa = function () {
        var pessoa = $scope.pessoaSelecionado;
        $http.delete(`http://localhost:3000/pessoas/${pessoa.id}`, pessoa).success(function (data) {
            carregarPessoas();
        });
    };
    carregarPessoas();
});