angular
  .module("sobt")
  .controller("itemTypeController", function($scope, $http) {
    $scope.app = "sobt";
    $scope.itemTypes = [];
    $scope.selectedItemType = {};

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

    $scope.vai = function() {
      console.log("OK");
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

    $scope.deleteItemTypes = function(itemTypes) {
      $scope.itemTypes = itemTypes.filter(function(itemType) {
        if (itemType.selected) {
          $http({
            method: "DELETE",
            url: "http://localhost:9000/api/v1/itemTypes" + "/" + itemType.id
          });
          var index = itemTypes.indexOf(itemType);
          if (index > -1) {
            itemTypes.splice(index, 1);
          }
        } else return itemType;
      });
    };

    $scope.updateItemType = function(itemType) {
      $http({
        method: "PUT",
        url: "http://localhost:9000/api/v1/itemTypes" + "/" + itemType.id,
        data: itemType
      });
      $scope.reset();
      reload();
    };

    $scope.isItemTypeSelected = function(itemTypes) {
      return itemTypes.some(function(itemTypes) {
        return itemTypes.selected;
      });
    };

    $scope.getTemplate = function(itemType) {
      if (itemType.id === $scope.selectedItemType.id) {
        return "edit";
      } else return "display";
    };

    $scope.editItemType = function(itemType) {
      $scope.selectedItemType = angular.copy(itemType);
    };

    $scope.reset = function() {
      $scope.selectedItemType = {};
    };

    var reload = function() {
      loadItemTypes();
      loadItemTypes();
      loadItemTypes();
      loadItemTypes();
      loadItemTypes();
    };

    loadItemTypes();
  });