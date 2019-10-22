angular.module("sobt").controller("sobtController", function($scope, $http) {
  $scope.app = "sobt";
  $scope.serviceOrders = [];
  $scope.orderStatuses = [];
  $scope.itemTypes = [];
  $scope.customers = [];
  $scope.contatos = [];
  $scope.selecionado = "selecionado";

  var carregarServiceNotes = function() {
    $http
      .get("http://localhost:9000/api/v1/serviceOrders")
      .then(successCallback, errorCallback);

    function successCallback(response) {
      $scope.serviceOrders = response.data;
    }
    function errorCallback(error) {
      console.log(error);
    }
  };

  var loadOrderStatuses = function() {
    $http
      .get("http://localhost:9000/api/v1/orderStatus")
      .then(successCallback, errorCallback);

    function successCallback(response) {
      $scope.orderStatuses = response.data;
    }
    function errorCallback(error) {
      console.log(error);
    }
  };

  var loadItemTypes = function() {
    $http
      .get("http://localhost:9000/api/v1/itemTypes")
      .then(successCallback, errorCallback);

    function successCallback(response) {
      $scope.itemTypes = response.data;
    }
    function errorCallback(error) {
      console.log(error);
    }
  };

  var loadClients = function() {
    $http
      .get("http://localhost:9000/api/v1/customers")
      .then(successCallback, errorCallback);

    function successCallback(response) {
      $scope.customers = response.data;
    }
    function errorCallback(error) {
      console.log(error);
    }
  };

  $scope.addCustomer = function(customer) {
    $http
      .post("http://localhost:9000/api/v1/customers", customer)
      .then(successCallback, errorCallback);
    function successCallback() {
      delete $scope.customer;
      $scope.customerForm.$setPristine();
    }
    function errorCallback(error) {
      console.log(error);
    }
  };

  $scope.addItemType = function(itemType) {
    $http
      .post("http://localhost:9000/api/v1/itemTypes", itemType)
      .then(successCallback, errorCallback);
    function successCallback() {
      delete $scope.itemType;
      $scope.itemTypeForm.$setPristine();
    }
    function errorCallback(error) {
      console.log(error);
    }
  };

  $scope.addOrderStatus = function(orderStatus) {
    $http
      .post("http://localhost:9000/api/v1/orderStatus", orderStatus)
      .then(successCallback, errorCallback);
    function successCallback() {
      delete $scope.orderStatus;
      $scope.orderStatusForm.$setPristine();
    }
    function errorCallback(error) {
      console.log(error);
    }
  };

  $scope.addServiceOrder = function(serviceOrder) {
    serviceOrder.orderDate = new Date();
    $http
      .post("http://localhost:9000/api/v1/serviceOrders", serviceOrder)
      .then(successCallback, errorCallback);
    function successCallback() {
      delete $scope.serviceOrder;
      $scope.customerForm.$setPristine();
      carregarServiceNotes;
    }
    function errorCallback(error) {
      console.log(error);
    }
  };
  /*$scope.adicionarserviceOrder = function(serviceOrder){
                $scope.serviceOrder.push(angular.copy(serviceOrder));
                $scope.serviceOrderForm.$setPrestine();
            };*/
  $scope.deleteCustomers = function(customers) {
    $scope.customers = customers.filter(function(customer) {
      if (customer.selected) {
        $http({
          method: "DELETE",
          url: "http://localhost:9000/api/v1/customers" + "/" + customer.id
        });
      }
    });
    $scope.customers = customers.filter(function(customer) {
      if (!customer.selected) return customer;
    });
  };
  $scope.isClientSelected = function(customers) {
    return customers.some(function(customers) {
      return customers.selected;
    });
  };

  carregarServiceNotes();
  loadOrderStatuses();
  loadItemTypes();
  loadClients();
});
