(function(){
    var app = angular.module('customerOrder_App', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/customers.html',
                controller: 'customerController'
            });
            // .when('/orders', {
            //     controller: 'customerOrdersController',
            //     templateUrl: '/app/views/customerOrders.html'
            // })
            // .otherwise({
            //     redirectTo: '/'
            // });
    });
}());