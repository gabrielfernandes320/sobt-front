            angular.module("sobt").controller("sobtController", function ($scope, $http) {
            $scope.app = "sobt";
            $scope.serviceNotes = [];
            $scope.operadoras = [
                {nome: "Oi", codigo: 14, categoria: "Celular"},
                {nome: "Vivo", codigo: 15, categoria: "Celular"},
                {nome: "Tim", codigo: 41, categoria: "Celular"},
                {nome: "Claro", codigo: 16, categoria: "Celular"},
                {nome: "Embratel", codigo: 16, categoria: "Fixo"}
            ];
            
            var carregarServiceNotes = function () {
                $http.get("http://localhost:9000/api/v1/serviceOrders").then(successCallback, errorCallback);

                function successCallback(response){
                    console.log(response)
                }
                function errorCallback(error){
                    console.log(error)
                }
            }
                
            $scope.adicionarContato = function(contato){
                $scope.contatos.push(angular.copy(contato));
                $scope.contatoForm.$setPrestine();
            };
            $scope.apagarContatos = function(contatos) {
                $scope.contatos = contatos.filter(function (contato) {
                    if (!contato.selecionado) return contato;
                })
            };
            $scope.isContatoSelecionado = function (contatos) {
                return contatos.some(function (contato) {
                    return contato.selecionado;
                });
            };

            carregarServiceNotes();
        });

        
    