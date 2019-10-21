angular.module('sobt').config(function($routeProvider){
    $routeProvider.when('/new',{
        templateUrl: 'view/newServiceOrder.html'
    })
    $routeProvider.when('/orders',{
        templateUrl: 'view/visualizeServiceOrders.html'
    })
    $routeProvider.when('/newclient',{
        templateUrl: 'view/newClient.html'
    })
    
});