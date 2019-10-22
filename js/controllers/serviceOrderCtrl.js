angular
  .module("sobt")
  .controller("serviceOrderController", function($scope, $http) {
    $scope.app = "sobt";
    $scope.serviceOrders = [];
    $scope.selectedServiceOrder = {};

    var loadServiceOrders = function() {
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

    $scope.addServiceOrder = function(serviceOrder) {
      $http
        .post("http://localhost:9000/api/v1/serviceOrders", serviceOrder)
        .then(successCallback, errorCallback);
      function successCallback() {
        delete $scope.serviceOrder;
        $scope.serviceOrderForm.$setPristine();
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.deleteServiceOrders = function(serviceOrders) {
      $scope.serviceOrders = serviceOrders.filter(function(serviceOrder) {
        if (serviceOrder.selected) {
          $http({
            method: "DELETE",
            url:
              "http://localhost:9000/api/v1/serviceOrders" +
              "/" +
              serviceOrder.id
          });
        }
      });
      $scope.serviceOrders = serviceOrders.filter(function(serviceOrder) {
        if (!serviceOrder.selected) return serviceOrder;
      });
    };

    $scope.updateServiceOrder = function(serviceOrder) {
      $http({
        method: "PUT",
        url:
          "http://localhost:9000/api/v1/serviceOrders" + "/" + serviceOrder.id,
        data: serviceOrder
      });
      loadServiceOrders();
      $scope.reset();
    };

    $scope.isServiceOrderSelected = function(serviceOrders) {
      return serviceOrders.some(function(serviceOrders) {
        return serviceOrders.selected;
      });
    };

    $scope.getTemplate = function(serviceOrder) {
      if (serviceOrder.id === $scope.selectedServiceOrder.id) {
        return "edit";
      } else return "display";
    };

    $scope.editServiceOrder = function(serviceOrder) {
      $scope.selectedServiceOrder = angular.copy(serviceOrder);
    };

    $scope.reset = function() {
      $scope.selectedServiceOrder = {};
      $scope.loadServiceOrders();
    };

    loadServiceOrders();
  });
