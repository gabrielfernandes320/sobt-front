angular
  .module("sobt")
  .controller("orderStatusController", function($scope, $http) {
    $scope.app = "sobt";
    $scope.orderStatuses = [];
    $scope.selectedOrderStatus = {};

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

    $scope.deleteOrderStatus = function(orderStatus) {
      $http({
        method: "DELETE",
        url: "http://localhost:9000/api/v1/orderStatus" + "/" + orderStatus.id
      });
      var index = $scope.orderStatuses.indexOf(orderStatus);
      if (index > -1) {
        $scope.orderStatuses.splice(index, 1);
      }
    };

    $scope.updateOrderStatus = function(orderStatus) {
      $http({
        method: "PUT",
        url: "http://localhost:9000/api/v1/orderStatus" + "/" + orderStatus.id,
        data: orderStatus
      });
      $scope.reset();
    };

    var getOrderStatus = function(id) {
      $http
        .get("http://localhost:9000/api/v1/orderStatus" + "/" + id)
        .then(successCallback, errorCallback);

      function successCallback(response) {
        return response.data;
      }
      function errorCallback(error) {
        console.log(error);
      }
    };

    $scope.isOrderStatusSelected = function(orderStatuses) {
      return orderStatuses.some(function(orderStatuses) {
        return orderStatuses.selected;
      });
    };

    $scope.getTemplate = function(orderStatus) {
      if (orderStatus.id === $scope.selectedOrderStatus.id) {
        return "edit";
      } else return "display";
    };

    $scope.editOrderStatus = function(orderStatus) {
      $scope.selectedOrderStatus = angular.copy(orderStatus);
    };

    $scope.reset = function() {
      $scope.selectedOrderStatus = {};
    };

    var reload = function() {
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
      loadOrderStatuses();
    };

    loadOrderStatuses();
  });
