angular.module("aplicacao").service("pessoasAPI", function ($http) {
    this.buscar = function () {
        return $http.get("http://localhost:3000/pessoas");
    };

    this.cadastrar = function () {
        return $http.post("http://localhost:3000/pessoas", pessoa);
    }

    this.alterar = function () {
        return $http.put(`http://localhost:3000/pessoas/${pessoa.id}`, pessoa);
    }

    this.excluir = function (){
        return $http.delete(`http://localhost:3000/pessoas/${pessoa.id}`, pessoa);
    }
});