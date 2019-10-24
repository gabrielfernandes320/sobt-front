angular.module("sobt").config(function($routeProvider) {
  $routeProvider.when("/neworder", {
    templateUrl: "view/newServiceOrder.html",
    controller: "clientController"
  });
  $routeProvider.when("/orders", {
    templateUrl: "view/visualizeServiceOrders.html",
    controller: "serviceOrderController"
  });

  $routeProvider.when("/itemtypes", {
    templateUrl: "view/visualizeItemTypes.html",
    controller: "itemTypeController"
  });
  $routeProvider.when("/newitemtype", {
    templateUrl: "view/newItemType.html"
  });

  $routeProvider.when("/newclient", {
    templateUrl: "view/newClient.html"
  });
  $routeProvider.when("/clients", {
    templateUrl: "view/visualizeClients.html",
    controller: "clientController"
  });

  $routeProvider.when("/neworderstatus", {
    templateUrl: "view/newOrderStatus.html"
  });
  $routeProvider.when("/orderstatuses", {
    templateUrl: "view/visualizeOrderStatuses.html",
    controller: "orderStatusController"
  });
});
