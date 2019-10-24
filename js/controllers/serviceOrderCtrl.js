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
      serviceOrder.orderDate = new Date();
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
          var index = $scope.serviceOrders.indexOf(serviceOrder);
          if (index > -1) {
            $scope.serviceOrders.splice(index, 1);
          }
        } else return serviceOrder;
      });
    };

    $scope.updateServiceOrder = function(serviceOrder) {
      $http({
        method: "PUT",
        url:
          "http://localhost:9000/api/v1/serviceOrders" + "/" + serviceOrder.id,
        data: serviceOrder
      });
      var index = $scope.serviceOrders.indexOf(serviceOrder);
      if (index > -1) {
        $scope.serviceOrders.splice(index, 1);
      }
      $scope.reset();
      loadServiceOrders();
      loadServiceOrders();
      loadServiceOrders();
      loadServiceOrders();
      loadServiceOrders();
    };

    var getServiceOrder = function(id) {
      $http
        .get("http://localhost:9000/api/v1/serviceOrders" + "/" + id)
        .then(successCallback, errorCallback);

      function successCallback(response) {
        return response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
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
    };

    loadServiceOrders();
  });
