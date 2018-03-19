(function () {
    var customerOrdersController = function($scope,$routeParams){
        $scope.orders = [];
        var customerId = $routeParams.customerId;  

        $scope.customers = [{
            id : 1,
            date: '2000-12-02',
            name: 'Ashraf',
            city: 'Dhaka',
            orderTotal: 0,
            orders : {
                id:5,
                product:'Asp',
                unitPrice: 11,
                amount :100
            }
        }, {
            id : 2,
            date: '2000-12-02',
            name: 'xAshraf',
            city: 'Dhaka',
            orderTotal: 0,
            orders : {
                id:5,
                product:'kar',
                unitPrice: 101,
                amount :10
            }
        }, {
            id : 3,
            date: '2000-12-02',
            name: 'pashraf',
            city: 'Dhaka',
            orderTotal: 0,
            orders : {
                id:5,
                product:'khaw',
                unitPrice: 91,
                amount :5
            }
        }];

        function init(){
            for(var i =0,len=$scope.customers.length;i<len;i++){
                if($scope.customers[i].id === parseInt(customerId)) {
                    $scope.orders.push($scope.customers[i].orders);
                    break;
                }
            }
        }
        init();
        console.log($scope.orders);
    };

    customerOrdersController.$inject = ['$scope','$routeParams'];
    angular.module('customerOrder_App').controller('customerOrdersController',customerOrdersController);
}());