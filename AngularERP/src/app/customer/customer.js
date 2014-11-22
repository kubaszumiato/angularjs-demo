angular.module('ngBoilerplate.customer', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config($stateProvider) {
    $stateProvider.state('customer', {
        url: '/customers/:customerIndex',
        views: {
            "main": {
                controller: 'customerController',
                templateUrl: 'customer/customer.tpl.html'
            }
        },
        data: { pageTitle: 'customer' }
    });
})

.controller('customerController', function customerController($scope, $http, $stateParams) {

    $scope.index = $stateParams.customerIndex;
    
    // take customers from json file
    $scope.customers = [];
    $http.get('assets/Customers.json').success(function (data) {
        $scope.customers = data;
        $scope.customer = $scope.customer[$scope.index];
    });
});