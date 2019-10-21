            angular.module("sobt").controller("sobtController", function ($scope, $http) {
            $scope.app = "sobt";
            $scope.serviceOrders = [{nome: "gabriel"}];
            $scope.contatos = [
                {nome: "Pedro", telefone: "991028830", operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "red"},
                {nome: "Carlos", telefone: "991028830", operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "green"},
                {nome: "Jose", telefone: "991028830", operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "red"}
            ];
            
            var carregarServiceNotes = function () {
                $http.get("http://localhost:9000/api/v1/serviceOrders").then(successCallback, errorCallback);

                function successCallback(response){
                    $scope.serviceOrders = response.data;
                    console.log(response);
                
                }
                function errorCallback(error){
                    
                }
            }
                
            /*$scope.adicionarserviceOrder = function(serviceOrder){
                $scope.serviceOrder.push(angular.copy(serviceOrder));
                $scope.serviceOrderForm.$setPrestine();
            };
            $scope.apagarserviceOrder = function(serviceOrder) {
                $scope.serviceOrder = serviceOrder.filter(function (serviceOrder) {
                    if (!serviceOrder.selecionado) return serviceOrder;
                })
            };
            $scope.isserviceOrderelecionado = function (serviceOrder) {
                return serviceOrder.some(function (serviceOrder) {
                    return serviceOrder.selecionado;
                });
            };*/

            carregarServiceNotes();
        });

        
    