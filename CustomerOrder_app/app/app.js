(function(){
    var app = angular.module('customerOrder_App', ['ngRoute']);
    app.config(function($routeProvider,$locationProvider) {
        
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/customers.html',
                controller: 'customerController'
            })
            .when('/customerOrders/:customerId', {
                templateUrl: 'app/views/customerOrders.html',
                controller: 'customerOrdersController'
            })
            .otherwise({
                redirectTo: '/'
            });
            $locationProvider.hashPrefix('');
    });
    
}());