angular.module("aplicacao").service("comprasAPI", function ($http) {
    this.buscar = function () {
        return $http.get("http://localhost:3000/compras");
    };

    this.cadastrar = function () {
        return $http.post("http://localhost:3000/compras", compra);
    }

    this.alterar = function () {
        return $http.put(`http://localhost:3000/compras/${compra.id}`, compra);
    }

    this.excluir = function (){
        return $http.delete(`http://localhost:3000/compras/${compra.id}`, compra);
    }
});