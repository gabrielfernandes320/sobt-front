angular.module("sobt").controller("clientController", function($scope, $http) {
  $scope.app = "sobt";
  $scope.clients = [];
  $scope.selectedClient = {};

  var loadClients = function() {
    $http
      .get("http://localhost:9000/api/v1/customers")
      .then(successCallback, errorCallback);

    function successCallback(response) {
      $scope.clients = response.data;
    }
    function errorCallback(error) {
      console.log(error);
    }
  };

  $scope.addClient = function(client) {
    $http
      .post("http://localhost:9000/api/v1/customers", client)
      .then(successCallback, errorCallback);
    function successCallback() {
      delete $scope.client;
      $scope.clientForm.$setPristine();
    }
    function errorCallback(error) {
      console.log(error);
    }
  };

  $scope.deleteClients = function(clients) {
    $scope.clients = clients.filter(function(client) {
      if (client.selected) {
        $http({
          method: "DELETE",
          url: "http://localhost:9000/api/v1/customers" + "/" + client.id
        });
      }
    });
    $scope.clients = clients.filter(function(client) {
      if (!client.selected) return client;
    });
  };

  $scope.updateClient = function(client) {
    $http({
      method: "PUT",
      url: "http://localhost:9000/api/v1/customers" + "/" + client.id,
      data: client
    });
    $scope.reset();
  };

  $scope.isClientSelected = function(clients) {
    return clients.some(function(clients) {
      return clients.selected;
    });
  };

  $scope.getTemplate = function(client) {
    if (client.id === $scope.selectedClient.id) {
      return "edit";
    } else return "display";
  };

  $scope.editClient = function(client) {
    $scope.selectedClient = angular.copy(client);
  };

  $scope.reset = function() {
    $scope.selectedClient = {};
    $scope.loadClients();
  };

  loadClients();
});
