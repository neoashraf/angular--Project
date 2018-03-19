(function () {
    var customerController = function($scope){

        $scope.sortBy = 'name';
        $scope.reverse = false;
        
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
            name: 'yashraf',
            city: 'Dhaka',
            orderTotal: 0,
            orders : {
                id:5,
                product:'khaw',
                unitPrice: 91,
                amount :5
            }
        }];

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        function computeOrderTotalCost(){
            for(var i=0; i < $scope.customers.length;i++){
                $scope.customers[i].orderTotal = $scope.customers[i].orders.amount * $scope.customers[i].orders.unitPrice;
            }
        }
        computeOrderTotalCost();

    }

    customerController.$inject = ['$scope'];
    angular.module('customerOrder_App').controller('customerController',customerController);

}());