(function () {
    var customerController = function($scope){
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [{
            id : 1,
            joined: '2000-12-02',
            name: 'Ashraf',
            city: 'Dhaka',
            orderTotal : 1100.0,
            orders : {
                id:5,
                product:'k',
                total:5
            }
        }, {
            id : 2,
            joined: '2000-12-02',
            name: 'xAshraf',
            city: 'Dhaka',
            orderTotal : 11123.0,
            orders : {
                id:7,
                product:'k',
                total:5
            }
        }, {
            id : 3,
            joined: '2000-12-02',
            name: 'pashraf',
            city: 'Dhasdfaka',
            orderTotal : 1111.0,
            orders : {
                id:9,
                product:'k',
                total:5
            }
        }];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    }
    customerController.$inject = ['$scope'];
    angular.module('customerOrder_App').controller('customerController',customerController);
}());