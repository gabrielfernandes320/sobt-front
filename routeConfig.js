angular.module("sobt").config(function($routeProvider) {
  $routeProvider.when("/neworder", {
    templateUrl: "view/newServiceOrder.html"
  });
  $routeProvider.when("/orders", {
    templateUrl: "view/visualizeServiceOrders.html"
  });
  $routeProvider.when("/newclient", {
    templateUrl: "view/newClient.html"
  });
  $routeProvider.when("/clients", {
    templateUrl: "view/visualizeClients.html"
  });
  $routeProvider.when("/newitemtype", {
    templateUrl: "view/newItemType.html"
  });
  $routeProvider.when("/neworderstatus", {
    templateUrl: "view/newOrderStatus.html"
  });
});
